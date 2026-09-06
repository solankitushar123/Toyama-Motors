import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Printer } from "lucide-react";
import Logo from "./Logo";
import { company, footerLinks } from "../data/company";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/90">
      <div className="container-page pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-12">
          <div>
            <Logo size={40} dark />
            <p className="mt-5 text-[15px] font-display text-paper/90">
              Japanese Quality. Global Mobility.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-paper/55 max-w-xs">
              Japan-based business specializing in new and used vehicles and
              machinery sourcing and export.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wideish uppercase text-paper/45 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-paper/75 hover:text-paper transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wideish uppercase text-paper/45 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-paper/75 hover:text-paper transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wideish uppercase text-paper/45 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-paper/75">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0 text-red-motor" />
                <a href={`tel:${company.phoneHref}`} className="hover:text-paper transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Printer size={15} className="mt-0.5 shrink-0 text-red-motor" />
                <span>Tel {company.tel} · Fax {company.fax}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 shrink-0 text-red-motor" />
                <a href={`mailto:${company.email}`} className="hover:text-paper transition-colors break-all">
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-red-motor" />
                <span>
                  {company.addressPostal} {company.addressJp}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-paper/45 text-center sm:text-left">
            © 2026 Toyama Motors. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-paper/45">
            <Link to="/privacy-policy" className="hover:text-paper/80 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-paper/80 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
