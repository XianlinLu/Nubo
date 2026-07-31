import { PlayIcon } from "./Icons";
import { cdn, features } from "./data";

function PromptVisual() {
  return (
    <div className="bf-demo bf-demo--prompt">
      <div className="bf-prompt-card">
        <span className="bf-prompt-card__label">What do you want to learn?</span>
        <p>How can I build stronger focus in a distracted world?</p>
        <div>
          <span>Personalized audio lesson</span>
          <button aria-label="Play generated lesson">
            <PlayIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

function VoiceVisual() {
  return (
    <div className="bf-demo bf-demo--voices">
      {["Ava", "Lena", "Jackson", "Maya", "Ethan"].map((voice, index) => (
        <button
          className={`bf-voice-pill bf-voice-pill--${index + 1}`}
          key={voice}
        >
          {voice}
          <PlayIcon />
        </button>
      ))}
    </div>
  );
}

function DepthVisual() {
  return (
    <div className="bf-demo bf-demo--depth">
      <div className="bf-depth-card bf-depth-card--quick">
        <strong>Quick</strong>
        <span>The fastest and easiest way to get key insights.</span>
      </div>
      <div className="bf-depth-card bf-depth-card--deep">
        <strong>Deep Dive</strong>
        <span>Follow every idea, story, and connection.</span>
      </div>
      <div className="bf-depth-card bf-depth-card--story">
        <strong>Storytelling</strong>
        <span>Learn through a vivid narrative.</span>
      </div>
    </div>
  );
}

function TalkVisual() {
  return (
    <div className="bf-demo bf-demo--talk">
      <p>Original ideas often sound wrong before they sound obvious.</p>
      <span className="bf-talk-orb bf-talk-orb--host">
        <i>Host</i>
      </span>
      <span className="bf-talk-orb bf-talk-orb--user">
        <i>You</i>
      </span>
    </div>
  );
}

function MindspaceVisual() {
  return (
    <div className="bf-demo bf-demo--mindspace">
      <div className="bf-memory-card">
        <span>Aha moment · just now</span>
        <p>
          Ideas do not arrive fully formed. Think about your work like an
          evolving map: strengthen curiosity, name the question, then choose the
          next useful step.
        </p>
        <small>Saved to Mindspace</small>
      </div>
    </div>
  );
}

function FeatureVisual({ type }: { type: string }) {
  if (type === "prompt") return <PromptVisual />;
  if (type === "voices") return <VoiceVisual />;
  if (type === "depth") return <DepthVisual />;
  if (type === "talk") return <TalkVisual />;
  return <MindspaceVisual />;
}

export function FeatureShowcase() {
  return (
    <section className="bf-features" id="features">
      <img
        className="bf-features__galaxy"
        src={`${cdn}/landing/galaxy_new.png`}
        alt=""
      />
      <div className="bf-features__inner">
        {features.map((feature, index) => (
          <article
            className={`bf-feature-row ${index % 2 ? "bf-feature-row--reverse" : ""}`}
            key={feature.title}
          >
            <div className="bf-feature-copy">
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
              <a className="bf-white-cta" href="#download">
                {feature.cta}
              </a>
            </div>
            <FeatureVisual type={feature.visual} />
          </article>
        ))}
      </div>
    </section>
  );
}
