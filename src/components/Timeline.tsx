export type TimelineStep = {
  step: string;
  title: string;
  description: string;
};

export default function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div>
      {/* Desktop: horizontal */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-6 relative">
        <div className="absolute top-6 left-0 right-0 h-px bg-line" aria-hidden="true" />
        {steps.map((s) => (
          <div key={s.step} className="relative">
            <div className="flex items-center gap-3">
              <span className="relative z-10 w-12 h-12 rounded-full bg-paper border border-ink flex items-center justify-center font-display font-semibold text-sm">
                {s.step}
              </span>
            </div>
            <h3 className="mt-5 font-display font-semibold text-[15px] tracking-tight">
              {s.title}
            </h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-slate-muted">
              {s.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile / tablet: vertical */}
      <div className="lg:hidden relative pl-8">
        <div className="absolute top-2 bottom-2 left-[15px] w-px bg-line" aria-hidden="true" />
        <div className="space-y-10">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <span className="absolute -left-8 top-0 w-8 h-8 rounded-full bg-paper border border-ink flex items-center justify-center font-display font-semibold text-xs">
                {s.step}
              </span>
              <h3 className="font-display font-semibold text-[15px] tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate-muted">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
