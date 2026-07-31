"use client";

import { useEffect, useMemo, useState } from "react";
import { cdn } from "./data";

function WaveField() {
  const paths = useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => {
        const offset = index * 5.5;
        return `M-80 ${120 + offset} C 180 ${108 - offset * 0.1}, 250 ${
          150 + offset * 0.7
        }, 500 ${128 - offset * 0.4} S 800 ${92 + offset * 0.9}, 1040 ${
          122 - offset * 0.15
        } S 1310 ${170 + offset * 0.45}, 1530 ${112 + offset * 0.35}`;
      }),
    [],
  );

  return (
    <svg
      className="bf-hero__waves"
      viewBox="0 0 1440 260"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {paths.map((path, index) => (
        <path
          d={path}
          key={path}
          style={{ animationDelay: `${index * -0.16}s` }}
        />
      ))}
    </svg>
  );
}

export function HeroSection() {
  const [count, setCount] = useState(880000);

  useEffect(() => {
    let frame = 0;
    const from = 880000;
    const to = 884439;
    const startedAt = performance.now();
    const tick = (time: number) => {
      const progress = Math.min(1, (time - startedAt) / 1600);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(from + (to - from) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="bf-hero" id="top">
      <img
        className="bf-hero__mascot"
        src={`${cdn}/landing/freedia_welcome.webp`}
        alt="Freedia"
      />
      <div className="bf-hero__content">
        <h1>Grow daily with personalized audio lessons</h1>
        <p>
          In your language, voice &amp; learning depth, sourced from books,
          research
          <br />
          papers &amp; domain experts
        </p>
        <a className="bf-primary-cta" href="#audio-topics">
          Get started
        </a>
        <span className="bf-hero__learners">
          {count.toLocaleString("en-US")} learners have joined
        </span>
      </div>
      <WaveField />
      <a className="bf-scroll-cue" href="#knowledge">
        <span>SCROLL</span>
        <span className="bf-scroll-cue__arrow" />
      </a>
    </section>
  );
}
