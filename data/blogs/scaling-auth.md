---
title: "Scaling Authentication to 100k Concurrent Sessions"
date: "2026-05-20"
category: "Engineering"
excerpt: "How we designed a distributed auth layer that handles peak traffic without degrading latency — and the lessons we learned about session replication."
---

At BuildVault, we recently crossed a milestone that forced us to rethink our authentication architecture: **100,000 concurrent sessions** during peak traffic hours. The old monolithic auth path — a single Express server backed by Postgres — would buckle under the load, with p99 latency spikes hitting 2.3 seconds.

Here's how we rebuilt it.

## The Architecture

We settled on a three-layer design:

- **Layer 1 — Edge routers** (Fastify + Envoy): terminate TLS, rate-limit by IP, and fan out to the session layer.
- **Layer 2 — Session replicas** (a pool of Go services backed by Redis Cluster): each replica owns a shard of the session keyspace. Writes go to the primary replica; reads are served by any replica in the shard via hot replication.
- **Layer 3 — The WebAuthn/OAuth orchestrator** (also Go): handles the actual authentication handshake — passkeys, TOTP, OAuth provider callbacks — and issues short-lived JWTs.

### Session Replication

The key insight was that sessions are **read-heavy** (roughly 20:1 read-to-write ratio). Instead of forcing every node to hit a centralized store, each replica keeps an in-memory cache of its shard's sessions and replicates to two peers via Raft-style log shipping.

If a replica goes down, its peers replay the log and take over within 300ms. The client never notices because the edge routers detect the failure via health checks and redirect requests within one retry.

```go
// Simplified: session lookup with local cache
func (s *SessionStore) Get(ctx context.Context, token string) (*Session, error) {
    if sess, ok := s.localCache.Get(token); ok {
        return sess, nil
    }
    sess, err := s.remoteStore.Get(ctx, token)
    if err != nil {
        return nil, err
    }
    s.localCache.Set(token, sess, ttl)
    return sess, nil
}
```

## Results

| Metric | Before | After |
|--------|--------|-------|
| p99 latency | 2.3s | 42ms |
| Max sessions | ~15k | 130k |
| Failover time | ~30s | ~300ms |

## Lessons Learned

1. **Don't cache until you measure.** We initially added Redis caching everywhere, but the real bottleneck was connection pooling on the Postgres side. Dropping a cache layer actually simplified the architecture.
2. **Hot replication is worth the complexity.** The Raft-style log shipping added ~200 lines of Go, but it eliminated our failover pain entirely.
3. **JWTs should be short.** We dropped our JWT expiry from 24h to 15m and used refresh tokens for session persistence. This made revocation instantaneous and reduced the blast radius of a leaked token.

We're now working on opening this as a reference architecture — stay tuned.
