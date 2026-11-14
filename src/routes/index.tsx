import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "secret garden freedom" },
      { name: "description", content: "二人だけの美しい世界 — touch to begin." },
      { property: "og:title", content: "secret garden freedom" },
      { property: "og:description", content: "二人だけの美しい世界 — touch to begin." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/garden.html"
      title="secret garden freedom"
      allow="autoplay"
      className="fixed inset-0 h-screen w-screen border-0 bg-background"
    />
  );
}
