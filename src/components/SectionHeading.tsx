type Props = {
  eyebrow?: string;
  heading: string;
  supporting?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  supporting,
  align = "left",
  size = "lg",
  className = "",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const headingSize = size === "lg" ? "text-3xl sm:text-4xl lg:text-[2.75rem]" : "text-2xl sm:text-3xl";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && <p className="label-eyebrow mb-3">{eyebrow}</p>}
      <h2 className={`${headingSize} font-display font-semibold leading-[1.15] tracking-tight`}>
        {heading}
      </h2>
      {supporting && (
        <p className="mt-4 text-slate-muted leading-relaxed">{supporting}</p>
      )}
    </div>
  );
}
