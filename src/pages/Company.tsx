import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Logo from "../components/Logo";
import { company } from "../data/company";
import { Phone, Mail, Printer, MapPin, Globe } from "lucide-react";

const profileRows: [string, string][] = [
  ["Company Name", company.name],
  ["Established", company.established],
  ["Industry", company.industry],
  ["Business Type", company.businessType],
  ["Location", company.location],
  ["CEO", `${company.ceo} (${company.ceoTitle})`],
  ["Telephone", company.tel],
  ["Mobile", company.phone],
  ["Fax", company.fax],
  ["Email", company.email],
  ["Address", `${company.addressPostal} ${company.addressJp}`],
  ["Website", company.website],
];

export default function Company() {
  return (
    <>
      <SEO
        title="Company Profile | Toyama Motors"
        description="Company profile for Toyama Motors: established 2023, Japan-based exporter of new and used vehicles and machinery, led by CEO Mohammed Sharif."
      />
      <PageHero
        eyebrow="Company Profile"
        heading="Company Profile"
        supporting="Verified company and contact details for Toyama Motors."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          {/* Digital business card, redrawn from the client's card in the site's own design language */}
          <div>
            <div className="rounded-card border border-line bg-gradient-to-br from-mist to-paper p-8 shadow-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="jp text-sm text-ink/70">{company.ceoNameJp}</p>
                  <p className="mt-3 font-display font-semibold">{company.ceo}</p>
                  <p className="text-xs text-slate-muted">{company.ceoTitle}</p>
                </div>
                <Logo variant="badge" size={64} />
              </div>

              <div className="mt-6 inline-block border border-red-motor/40 rounded-xs px-3 py-1.5">
                <p className="text-[12px] font-medium text-ink">{company.businessTagline}</p>
                <p className="jp text-[11px] text-ink/60">{company.businessTaglineJp}</p>
              </div>

              <div className="mt-7 pt-6 border-t border-line space-y-2 text-[13.5px] text-ink/80">
                <p>
                  {company.addressPostal} {company.addressJp}
                </p>
                <p>{company.email}</p>
                <p>
                  Tel: {company.tel} &nbsp; Fax: {company.fax}
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-steel leading-relaxed">
              Redrawn digitally from the company's printed business card, using
              the recreated Toyama Motors seal.
            </p>
          </div>

          {/* Profile table */}
          <div>
            <h2 className="text-2xl font-display font-semibold tracking-tight mb-6">
              Company Details
            </h2>
            <dl className="divide-y divide-line border-t border-b border-line">
              {profileRows.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[120px_minmax(0,1fr)] sm:grid-cols-[180px_minmax(0,1fr)] gap-4 py-4">
                  <dt className="text-xs tracking-wideish uppercase text-slate-muted pt-0.5">
                    {label}
                  </dt>
                  <dd className="text-[14.5px] text-ink font-medium break-words">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <a
                href={`tel:${company.phoneHref}`}
                className="flex items-center gap-3 border border-line rounded-xs px-4 py-3.5 hover:border-ink/30 transition-colors"
              >
                <Phone size={16} className="text-red-motor" />
                <span className="text-sm font-medium">{company.phone}</span>
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 border border-line rounded-xs px-4 py-3.5 hover:border-ink/30 transition-colors"
              >
                <Mail size={16} className="text-red-motor" />
                <span className="text-sm font-medium break-all">{company.email}</span>
              </a>
              <div className="flex items-center gap-3 border border-line rounded-xs px-4 py-3.5">
                <Printer size={16} className="text-red-motor" />
                <span className="text-sm font-medium">{company.fax}</span>
              </div>
              <div className="flex items-center gap-3 border border-line rounded-xs px-4 py-3.5">
                <Globe size={16} className="text-red-motor" />
                <span className="text-sm font-medium">{company.website}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location + QR */}
      <section className="py-20 sm:py-28 bg-mist">
        <div className="container-page grid lg:grid-cols-2 gap-10">
          <div className="border border-line rounded-card bg-paper p-8">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-red-motor" />
              <h3 className="font-display font-semibold tracking-tight">Location</h3>
            </div>
            <p className="mt-4 text-[14.5px] text-ink/80 leading-relaxed">
              {company.addressPostal}
              <br />
              {company.addressJp}
              <br />
              {company.addressCity}
            </p>
            <p className="mt-4 text-xs text-steel">
              A map embed will be added once an exact verified pin location is
              confirmed by Toyama Motors.
            </p>
          </div>

          <div className="border border-dashed border-line rounded-card bg-paper p-8 flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 border border-dashed border-steel rounded-xs flex items-center justify-center text-[11px] text-steel text-center px-3 leading-snug">
              QR CODE
              <br />
              REPLACE WITH VERIFIED COMPANY QR
            </div>
            <p className="mt-4 text-xs text-steel max-w-xs leading-relaxed">
              The business card includes a LINE QR code. Its destination could
              not be independently verified, so a placeholder is shown here
              instead of an assumed link.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
