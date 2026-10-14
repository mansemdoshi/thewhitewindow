// The White Window logo. Renders the day file and the night file side by side;
// CSS (.day-only / .night-only in globals.css) shows exactly one for the active theme.
// Always the supplied SVGs: never inline, redraw or recolour them (brand guide §05).

const DIR = "/brand/logo";

// Width ÷ height of each artwork's viewBox, so <img> reserves the right space.
const files = {
  horizontal: { day: "tww-logo-horizontal-light", night: "tww-logo-horizontal-dark", ratio: [751.4 / 120, 746 / 120] },
  stacked: { day: "tww-logo-stacked-light", night: "tww-logo-stacked-dark", ratio: [416.7 / 161.1, 413 / 161.1] },
  mark: { day: "tww-mark-day", night: "tww-mark-night", ratio: [1, 1] },
  wordmark: { day: "tww-wordmark-light", night: "tww-wordmark-dark", ratio: [825.4 / 50.1, 817.9 / 50.1] },
};

export default function Logo({ variant = "horizontal", withDescriptor = false, height = 44, alt = "", className = "" }) {
  const file = files[variant];
  let suffix = withDescriptor ? "-with-descriptor" : "";
  // The full mark needs at least 32px; below that use the simplified artwork.
  if (variant === "mark" && height < 32) suffix = "-simplified";
  const [dayRatio, nightRatio] =
    variant === "stacked" && withDescriptor ? [416.7 / 180.7, 413 / 180.7] : file.ratio;
  return (
    <span className={`logo ${className}`}>
      <img
        className="day-only"
        src={`${DIR}/${file.day}${suffix}.svg`}
        alt={alt}
        width={Math.round(height * dayRatio)}
        height={height}
      />
      <img
        className="night-only"
        src={`${DIR}/${file.night}${suffix}.svg`}
        alt=""
        aria-hidden="true"
        width={Math.round(height * nightRatio)}
        height={height}
      />
    </span>
  );
}
