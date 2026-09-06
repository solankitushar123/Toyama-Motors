import { Link } from "react-router-dom";
import { company } from "../data/company";

type LogoProps = {
  variant?: "lockup" | "badge";
  size?: number;
  dark?: boolean;
  className?: string;
};

/**
 * Toyama Motors brand mark.
 *
 * The source logo supplied by the client was a low-resolution raster (176x166),
 * so an original vector badge was recreated here preserving the same identity:
 * rising-sun rays, Mt. Fuji silhouette, a car mark and sakura accents inside a
 * circular seal. `variant="lockup"` pairs the badge with a crisp text wordmark
 * for the navbar/footer; `variant="badge"` renders the full circular seal
 * (including its own baked-in wordmark) for standalone use.
 */
export default function Logo({
  variant = "lockup",
  size = 40,
  dark = false,
  className = "",
}: LogoProps) {
  if (variant === "badge") {
    return (
      <img
        src="./assets/logo-full.svg"
        width={size}
        height={size}
        alt="Toyama Motors seal"
        className={className}
      />
    );
  }

  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 shrink-0 ${className}`}
      aria-label="Toyama Motors home"
    >
      <img
        src="./assets/logo-mark.svg"
        width={size}
        height={size}
        alt=""
        aria-hidden="true"
        style={{ width: size, height: size }}
      />
      <span
        className={`font-display font-extrabold leading-none tracking-tight ${
          dark ? "text-paper" : "text-ink"
        }`}
        style={{ fontSize: size * 0.42 }}
      >
        {company.name}
        <span className="block text-[0.42em] font-semibold tracking-wideish uppercase text-red-motor mt-0.5">
          Japan
        </span>
      </span>
    </Link>
  );
}
