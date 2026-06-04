---
title: "Building Real-Time Infrastructure on a Budget"
date: "2026-03-08"
category: "Engineering"
excerpt: "You don't need a massive budget for real-time features. Here's our stack for handling 10M events daily with a lean team and minimal cloud spend."
---

Real-time features are often associated with expensive infrastructure — dedicated WebSocket clusters, managed streaming services, six-figure Kafka bills. But you can build a system that handles **10 million events per day** on a modest budget if you make the right trade-offs.

Here's the stack we used for Pulse Monitor.

## The Stack

| Component | Choice | Monthly Cost |
|-----------|--------|-------------|
| Event ingestion | Rust + HTTP/2 (4× $20 VMs) | $80 |
| Stream processing | Go workers + NATS JetStream | $0 (on the same VMs) |
| Hot storage | ClickHouse (2× $80 nodes) | $160 |
| Cold storage | S3 + Parquet | ~$30 |
| Alerting | Custom Go evaluator, in-memory | $0 |
| Dashboard | React + Server-Sent Events | $0 |

**Total: ~$270/month** for 10M events/day, sub-100ms query times, and 99.9% uptime.

## Why Rust for Ingestion

We chose Rust for the ingestion layer because it gave us **predictable performance under load** without the GC pauses that plagued our previous Node.js implementation. Each $20 VM handles ~3M events/day with CPU to spare.

The HTTP/2 multiplexing means a single connection can carry thousands of concurrent event streams, avoiding connection overhead.

```rust
// Simplified event ingestion handler
async fn ingest_event(
    State(state): State<AppState>,
    Json(event): Json<Event>,
) -> impl IntoResponse {
    // Validate, enrich, publish to NATS
    let enriched = event.enrich().await?;
    state.nats.publish("events.raw", &enriched).await?;
    StatusCode::ACCEPTED
}
```

## NATS Over Kafka

For the streaming layer, we use [NATS JetStream](https://nats.io) instead of Kafka. It runs on the same VMs as the ingestion layer, so there's zero additional infrastructure cost. NATS gives us:

- At-least-once delivery guarantees
- Consumer groups for load-balanced processing
- Key-value store for stateful aggregations
- 5μs end-to-end latency (vs Kafka's ~2ms)

The trade-off is that NATS doesn't have Kafka's ecosystem (Kafka Connect, Schema Registry, etc.). But for a lean team, the operational simplicity is worth it.

## Dashboards with SSE

For the dashboard, we use **Server-Sent Events** instead of WebSockets. SSE is simpler to implement, works over standard HTTP, and reconnects automatically. Combined with React's `useSyncExternalStore`, the UI stays in sync with minimal code.

```tsx
function useEventStream(url: string) {
    return useSyncExternalStore(
        (callback) => {
            const es = new EventSource(url);
            es.onmessage = callback;
            return () => es.close();
        },
        () => lastEvent
    );
}
```

## The Lesson

You don't need enterprise infrastructure for real-time. Start with simple tools, benchmark honestly, and only add complexity when you have data that proves you need it. Pulse Monitor handles 10M events/day on $270/month — and it's been running for 18 months without a single redesign.
