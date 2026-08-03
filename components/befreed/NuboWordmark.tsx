type NuboWordmarkProps = {
  className?: string;
};

export function NuboWordmark({ className = "" }: NuboWordmarkProps) {
  return (
    <span
      className={`nubo-wordmark ${className}`.trim()}
      role="img"
      aria-label="Nubo"
    >
      <span className="nubo-wordmark__letters" aria-hidden="true">
        Nub
      </span>
      <span className="nubo-wordmark__orb" aria-hidden="true" />
    </span>
  );
}
