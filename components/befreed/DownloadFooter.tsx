import { ArrowUpRight, DownloadIcon } from "./Icons";
import { cdn, footerColumns } from "./data";

const logo =
  "https://www.befreed.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0_t8tcd03q3l4.png&w=384&q=75";

export function DownloadSection() {
  return (
    <section className="bf-download" id="download">
      <div className="bf-download__panel">
        <div className="bf-download__copy">
          <span className="bf-download__eyebrow">1.5K RATINGS</span>
          <strong className="bf-download__rating">4.7</strong>
          <span className="bf-download__stars">★★★★★</span>
          <h2>
            Start your learning
            <br />
            journey, now
          </h2>
          <a
            className="bf-download__button"
            href="https://www.befreed.ai/download"
          >
            <DownloadIcon />
            Get it on iOS or Android
          </a>
        </div>
        <div className="bf-download__phone">
          <img
            src={`${cdn}/assets/download/iphone_260213.png`}
            alt="BeFreed App"
          />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bf-footer" id="footer">
      <div className="bf-footer__brand">
        <img src={logo} alt="BeFreed" />
        <p>Learn Anything, Personalized</p>
        <div>
          <a href="https://discord.com/" aria-label="Discord">
            <img src={`${cdn}/assets/landing/discord.png`} alt="" />
          </a>
          <a href="https://linkedin.com/" aria-label="LinkedIn">
            <img src={`${cdn}/assets/landing/in.png`} alt="" />
          </a>
        </div>
      </div>

      <div className="bf-footer__columns">
        {footerColumns.map((column) => (
          <div className="bf-footer__column" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a href="#top" key={link}>
                {link}
              </a>
            ))}
            {column.secondTitle ? <h3>{column.secondTitle}</h3> : null}
            {column.secondLinks?.map((link) => (
              <a href="#top" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="bf-footer__info">
        <span>Information</span>
        <div>
          {[
            "About Us",
            "Pricing",
            "FAQ",
            "Blog",
            "Career",
            "Partnerships",
            "Ambassador Program",
            "Directory",
          ].map((link) => (
            <a href="#top" key={link}>
              {link}
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </div>
      <div className="bf-footer__wordmark" aria-hidden="true">
        BeFreed
      </div>
    </footer>
  );
}
