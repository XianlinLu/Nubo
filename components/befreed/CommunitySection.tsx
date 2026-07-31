"use client";

import { useState } from "react";
import { ArrowUpRight, PauseIcon, PlayIcon } from "./Icons";
import { cdn, testimonials } from "./data";

const platformAssets: Record<string, string> = {
  appstore: `${cdn}/assets/landing/appstore.png`,
  twitter: `${cdn}/assets/landing/twitter.png`,
  reddit: `${cdn}/assets/landing/reddit_icon.png`,
  linkedin: `${cdn}/assets/landing/in_icon.png`,
};

export function CommunitySection() {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section className="bf-community" id="community">
      <div className="bf-community__badge">
        From Columbia University alumni built in San Francisco
      </div>
      <h2>
        BeFreed Brings Together A Global
        <br />
        Community Of 884,439 Curious Minds
      </h2>
      <a className="bf-community__discussion" href="#reviews">
        See more on how BeFreed is discussed across the web
        <ArrowUpRight />
      </a>

      <div className="bf-video-row" aria-label="Community videos">
        {Array.from({ length: 6 }, (_, index) => (
          <button
            className={`bf-video-card ${playing === index ? "is-playing" : ""}`}
            key={index}
            onClick={() =>
              setPlaying((current) => (current === index ? null : index))
            }
            aria-label={playing === index ? "Pause video" : "Play video"}
          >
            <img
              src={`/befreed-assets/community/community-${index + 1}.jpg`}
              alt={`BeFreed community creator ${index + 1}`}
            />
            <span className="bf-video-card__play">
              {playing === index ? <PauseIcon /> : <PlayIcon />}
            </span>
            {playing === index ? (
              <span className="bf-video-card__playing">PLAYING PREVIEW</span>
            ) : null}
          </button>
        ))}
      </div>

      <a className="bf-outline-cta" href="#reviews">
        View All
      </a>

      <div className="bf-testimonials" id="reviews">
        {testimonials.map((item) => (
          <article className="bf-testimonial" key={`${item.author}-${item.quote}`}>
            <p>{item.quote}</p>
            <span className="bf-testimonial__author">{item.author}</span>
            <div className="bf-testimonial__meta">
              <img src={platformAssets[item.platform]} alt={item.platform} />
              {item.stars ? (
                <span className="bf-stars" aria-label="Five stars">
                  ★ ★ ★ ★ ★
                </span>
              ) : (
                <span className="bf-social-counts">
                  ◯ {item.comments} &nbsp;&nbsp; ♡ {item.likes}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
