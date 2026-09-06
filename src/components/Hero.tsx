import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[620px] max-h-[880px] w-full overflow-hidden bg-ink">
      <img
        src="https://picsum.photos/seed/toyama-hero-road/1920/1200"
        alt="Road through a Japanese landscape, representing Toyama Motors' export routes from Japan"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />

      {/* vertical Japanese wordmark — decorative, authentic tategaki (top-to-bottom) type */}
      <div
        className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-1 text-paper/25 select-none"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden="true"
      >
        <span className="jp text-sm tracking-[0.4em]">トヤマモータース</span>
      </div>

      <div className="relative h-full container-page flex flex-col justify-end pb-24 sm:pb-28">
        <div className="max-w-2xl animate-fadeUp">
          <p className="text-xs font-semibold tracking-wideish uppercase text-paper/70 mb-5">
            Toyama Motors <span className="text-red-motor">/</span> Japan
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-paper leading-[1.08] tracking-tight">
            Japanese Quality.
            <br />
            Global Mobility.
          </h1>
          <p className="mt-5 text-paper/70 text-[15px] sm:text-base max-w-lg leading-relaxed">
            Toyama Motors specializes in the sourcing and international export
            of new and used vehicles and machinery from Japan, connecting
            customers worldwide with quality Japanese products.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
            <Button to="/services" variant="accent" size="lg" icon>
              Explore Our Services
            </Button>
            <Button
              to="/contact"
              size="lg"
              className="!bg-transparent !text-paper !border-paper/40 hover:!bg-paper hover:!text-ink"
            >
              Contact Toyama Motors
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-paper/50">
        <span className="text-[10px] tracking-wideish uppercase">Scroll</span>
        <span className="w-px h-8 bg-paper/30 rounded-full relative">
          <span className="absolute -left-[3px] top-0 w-[7px] h-[7px] rounded-full bg-paper animate-bounce" />
        </span>
      </div>
    </section>
  );
}
