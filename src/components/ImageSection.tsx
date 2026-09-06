import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  heading: string;
  text: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  dark?: boolean;
  children?: ReactNode;
};

export default function ImageSection({
  eyebrow,
  heading,
  text,
  image,
  imageAlt,
  reverse = false,
  dark = false,
  children,
}: Props) {
  return (
    <section className={`py-20 sm:py-28 ${dark ? "bg-ink text-paper" : "bg-paper"}`}>
      <div className="container-page">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            reverse ? "" : ""
          }`}
        >
          <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
            <div className="relative rounded-card overflow-hidden aspect-[4/3]">
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
            <div
              className={`hidden sm:block absolute -bottom-6 ${
                reverse ? "-right-6" : "-left-6"
              } w-28 h-28 border ${dark ? "border-paper/15" : "border-line"} rounded-card -z-10`}
              aria-hidden="true"
            />
          </div>

          <div className={reverse ? "lg:order-1" : ""}>
            {eyebrow && (
              <p className={`label-eyebrow mb-4 ${dark ? "text-red-motor" : ""}`}>{eyebrow}</p>
            )}
            <h2 className="text-3xl sm:text-4xl font-display font-semibold leading-[1.15] tracking-tight max-w-lg">
              {heading}
            </h2>
            <p className={`mt-5 leading-relaxed max-w-lg ${dark ? "text-paper/65" : "text-slate-muted"}`}>
              {text}
            </p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
