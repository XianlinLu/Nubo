import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the complete BeFreed landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Grow daily with personalized audio lessons/);
  assert.match(html, /From the best knowledge sources/);
  assert.match(html, /The 5 Love Languages/);
  assert.match(html, /Listen to knowledge, on demand/);
  assert.match(html, /Community Of 884,439 Curious Minds/);
  assert.match(html, /Start your learning/);
  assert.match(html, /aria-label="Nubo"/);
  assert.doesNotMatch(html, /<iframe/i);
  assert.doesNotMatch(html, /圆形磁吸|hardware interaction|Magnetic Learning Hardware/i);
});
