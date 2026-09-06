type Props = {
  eyebrow: string;
  heading: string;
  supporting?: string;
};

export default function PageHero({ eyebrow, heading, supporting }: Props) {
  return (
    <section className="relative bg-ink pt-20 pb-16 sm:pt-24 sm:pb-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #F7F8FA 0px, #F7F8FA 1px, transparent 1px, transparent 64px)",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative animate-fadeUp">
        <p className="label-eyebrow mb-4">{eyebrow}</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-paper tracking-tight max-w-2xl">
          {heading}
        </h1>
        {supporting && (
          <p className="mt-5 text-paper/60 max-w-xl leading-relaxed">{supporting}</p>
        )}
      </div>
    </section>
  );
}
