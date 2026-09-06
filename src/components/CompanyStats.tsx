import { companyHighlights } from "../data/company";

export default function CompanyStats() {
  return (
    <section className="border-y border-line bg-mist">
      <div className="container-page">
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-line">
          {companyHighlights.map((item) => (
            <div key={item.label} className="py-10 px-4 text-center sm:text-left first:pl-0">
              <p className="font-display text-xl sm:text-2xl font-semibold tracking-tight whitespace-pre-line">
                {item.value}
              </p>
              <p className="mt-1.5 text-xs tracking-wideish uppercase text-slate-muted">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
