"use client";

import { useEffect, useState } from "react";
import { PauseIcon, PlayIcon } from "./Icons";
import { cdn, topicOptions } from "./data";

export function AudioTopicsSection() {
  const [active, setActive] = useState(2);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const topic = topicOptions[active];

  useEffect(() => {
    if (!playing) return;
    const interval = window.setInterval(() => {
      setProgress((value) => (value >= 100 ? 0 : value + 0.8));
    }, 120);
    return () => window.clearInterval(interval);
  }, [playing]);

  const selectTopic = (index: number) => {
    setActive(index);
    setProgress(0);
    setPlaying(false);
  };

  return (
    <section className="bf-audio-topics" id="audio-topics">
      <div className="bf-audio-topics__quote" aria-hidden="true">
        {topic.lines.map((line, index) => (
          <p key={line}>
            {index === 0 ? <b>{line.split(" ")[0]} </b> : null}
            {index === 0 ? line.split(" ").slice(1).join(" ") : line}
          </p>
        ))}
      </div>

      <div className="bf-player-card">
        <img className="bf-player-card__cover" src={topic.cover} alt={topic.title} />
        <div className="bf-player-card__sources">
          <img src={`${cdn}/landing/sources_icon.png`} alt="" />
          {topic.sources} sources
        </div>
        <div className="bf-player-card__controls">
          <button
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? "Pause audio" : "Play audio"}
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>
          <span>0:00</span>
          <div className="bf-player-card__track">
            <i style={{ width: `${progress}%` }} />
          </div>
          <span>0:00</span>
        </div>
      </div>

      <div className="bf-topic-strip" role="tablist" aria-label="Audio topics">
        {topicOptions.map((option, index) => (
          <button
            className={index === active ? "is-active" : ""}
            key={option.title}
            role="tab"
            aria-selected={index === active}
            onClick={() => selectTopic(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      <a className="bf-white-cta bf-audio-topics__cta" href="#download">
        Get started
      </a>
    </section>
  );
}
