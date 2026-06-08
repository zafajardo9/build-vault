/**
 * Reusable JSON-LD structured data component.
 * Inject any valid JSON-LD object inside a <script> tag.
 */
export default function JsonLd({
  data,
}: {
  data: Record<string, unknown>;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
