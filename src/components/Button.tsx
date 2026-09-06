import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "md" | "lg";
  icon?: boolean;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  to: string;
  href?: never;
  onClick?: never;
  type?: never;
};

type ButtonAsAnchor = BaseProps & {
  href: string;
  to?: never;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  onClick?: () => void;
  type?: "button" | "submit";
  to?: never;
  href?: never;
};

type Props = ButtonAsLink | ButtonAsAnchor | ButtonAsButton;

const variants: Record<string, string> = {
  primary: "bg-ink text-paper hover:bg-ink-soft border border-ink",
  secondary: "bg-transparent text-ink border border-ink/70 hover:bg-ink hover:text-paper",
  accent: "bg-red-motor text-paper hover:bg-red-deep border border-red-motor",
  ghost: "bg-transparent text-ink border border-transparent hover:border-line",
};

const sizes: Record<string, string> = {
  md: "text-sm px-5 py-3",
  lg: "text-[15px] px-7 py-3.5",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon = false,
  className = "",
  ...rest
}: Props) {
  const classes = `group inline-flex items-center justify-center gap-2 font-medium rounded-xs transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={16}
          strokeWidth={2}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if ("to" in rest && rest.to) {
    return (
      <Link to={rest.to} className={classes}>
        {content}
      </Link>
    );
  }

  if ("href" in rest && rest.href) {
    const isExternal = rest.href.startsWith("http");
    return (
      <a
        href={rest.href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  const { onClick, type } = rest as ButtonAsButton;
  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
