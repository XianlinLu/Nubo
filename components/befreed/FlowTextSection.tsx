export function FlowTextSection() {
  return (
    <section className="bf-flow" aria-label="Knowledge flow">
      <svg viewBox="0 0 520 508" role="img" aria-label="AI that lets knowledge flow into you">
        <defs>
          <path
            id="knowledge-flow-path"
            d="M250 -10 C 250 95 220 125 255 165 C 300 215 330 238 286 280 C 240 324 185 298 185 360 C 185 425 295 425 295 482 C 295 510 275 520 258 528"
          />
        </defs>
        <text>
          <textPath href="#knowledge-flow-path" startOffset="-4%">
            AI that lets knowledge flow into you · AI that lets knowledge flow
            into you · AI that lets knowledge flow into you · AI that lets
            knowledge flow into you ·
          </textPath>
        </text>
      </svg>
    </section>
  );
}
