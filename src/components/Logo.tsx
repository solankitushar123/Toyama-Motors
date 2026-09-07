import { Link } from "react-router-dom";
import { company } from "../data/company";

type LogoProps = {
  variant?: "lockup" | "badge";
  size?: number;
  dark?: boolean;
  className?: string;
};

/**
 * Toyama Motors brand logo.
 *
 * Logo image is stored in:
 * public/assets/logo-full.jpeg
 *
 * Since the image is inside the public folder,
 * it is referenced directly using /assets/logo-full.jpeg.
 */
export default function Logo({
  variant = "lockup",
  size = 40,
  dark = false,
  className = "",
}: LogoProps) {
  const logo = "/assets/logo-full.jpeg";

  /**
   * Standalone badge variant
   */
  if (variant === "badge") {
    return (
      <img
        src={logo}
        width={size}
        height={size}
        alt="Toyama Motors seal"
        className={`object-contain ${className}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />
    );
  }

  /**
   * Navbar / Footer lockup variant
   */
  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 shrink-0 ${className}`}
      aria-label="Toyama Motors home"
    >
      {/* Brand Logo */}
      <img
        src={logo}
        width={size}
        height={size}
        alt="Toyama Motors"
        className="object-contain shrink-0"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      />

      {/* Brand Name */}
      <span
        className={`font-display font-extrabold leading-none tracking-tight ${
          dark ? "text-paper" : "text-ink"
        }`}
        style={{
          fontSize: `${size * 0.42}px`,
        }}
      >
        {company.name}

        {/* Country / Brand Label */}
        <span className="block text-[0.42em] font-semibold uppercase text-red-motor mt-0.5">
          Japan
        </span>
      </span>
    </Link>
  );
}