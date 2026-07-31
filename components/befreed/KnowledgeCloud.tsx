import { cdn } from "./data";

const tiles = [
  { id: 0, className: "tile-0", alt: "Knowledge card" },
  { id: 1, className: "tile-1", alt: "Roundtable video" },
  { id: 2, className: "tile-2", alt: "Learning card" },
  { id: 3, className: "tile-3", alt: "Event video" },
  { id: 4, className: "tile-4", alt: "Radical Candor" },
  { id: 5, className: "tile-5", alt: "Atomic Habits" },
  { id: 6, className: "tile-6", alt: "Why We Can't Stop Scrolling" },
  { id: 7, className: "tile-7", alt: "Sapiens" },
  { id: 8, className: "tile-8", alt: "When Your Brain Betrays You" },
  { id: 9, className: "tile-9", alt: "The 48 Laws of Power" },
  { id: 10, className: "tile-10", alt: "Conversation video" },
  { id: 11, className: "tile-11", alt: "Ancient philosophy" },
  { id: 12, className: "tile-12", alt: "Learning session" },
  { id: 13, className: "tile-13", alt: "Knowledge talk" },
  { id: 14, className: "tile-14", alt: "A curious mind" },
  { id: 15, className: "tile-15", alt: "Ideas and culture" },
  { id: 16, className: "tile-16", alt: "Audio learning" },
];

export function KnowledgeCloud() {
  return (
    <div className="bf-knowledge" id="knowledge" aria-label="Knowledge sources">
      <section className="bf-knowledge__scene bf-knowledge__scene--first">
        <h2>From the best knowledge sources</h2>
      </section>
      <section className="bf-knowledge__scene bf-knowledge__scene--second">
        <h2>narrated just for you</h2>
      </section>

      <div className="bf-knowledge__tiles" aria-hidden="true">
        {tiles.map((tile) => (
          <div className={`bf-source-tile ${tile.className}`} key={tile.id}>
            <img
              src={`${cdn}/landing/img-${tile.id}.png`}
              alt={tile.alt}
              loading="lazy"
            />
            <span className="bf-source-tile__mark">▣</span>
          </div>
        ))}
        <div className="bf-quote-tile quote-1">
          <strong>“</strong> Knowledge speaks.
          <br />
          Wisdom listens.
          <br />
          — Jimi Hendrix
          <span>♡</span>
        </div>
        <div className="bf-quote-tile quote-2">
          Every pause is part of
          <br />
          learning.
          <span>◯ 16 &nbsp; ♡ 118</span>
        </div>
        <div className="bf-quote-tile quote-3">
          <strong>“</strong> Doubt is the
          <br />
          beginning of wisdom.
          <br />
          — Aristotle
          <span>▣</span>
        </div>
      </div>
    </div>
  );
}
