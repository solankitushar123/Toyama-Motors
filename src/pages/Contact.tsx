import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { company } from "../data/company";
import { Phone, Mail, Printer, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Toyama Motors | Japan Vehicle & Machinery Exporter"
        description="Contact Toyama Motors for vehicle inquiries, machinery inquiries, or export questions. Phone, email and address details for our Toyama, Japan office."
      />
      <PageHero
        eyebrow="Contact"
        heading="Let's Talk About Your Requirements."
        supporting="Whether you are looking for a vehicle, machinery or require information about our export services, contact Toyama Motors."
      />

      <section className="py-20 sm:py-28">
        <div className="container-page grid lg:grid-cols-[1fr_1.2fr] gap-14">
          <div>
            <h2 className="text-xl font-display font-semibold tracking-tight mb-6">
              Contact Information
            </h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3.5">
                <Phone size={18} className="mt-0.5 text-red-motor shrink-0" />
                <div>
                  <p className="text-xs text-slate-muted">Phone</p>
                  <a href={`tel:${company.phoneHref}`} className="text-[15px] font-medium">
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Phone size={18} className="mt-0.5 text-red-motor shrink-0" />
                <div>
                  <p className="text-xs text-slate-muted">Telephone</p>
                  <a href={`tel:${company.telHref}`} className="text-[15px] font-medium">
                    {company.tel}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Printer size={18} className="mt-0.5 text-red-motor shrink-0" />
                <div>
                  <p className="text-xs text-slate-muted">Fax</p>
                  <p className="text-[15px] font-medium">{company.fax}</p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Mail size={18} className="mt-0.5 text-red-motor shrink-0" />
                <div>
                  <p className="text-xs text-slate-muted">Email</p>
                  <a href={`mailto:${company.email}`} className="text-[15px] font-medium break-all">
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <MapPin size={18} className="mt-0.5 text-red-motor shrink-0" />
                <div>
                  <p className="text-xs text-slate-muted">Address</p>
                  <p className="text-[15px] font-medium leading-relaxed">
                    {company.addressPostal}
                    <br />
                    {company.addressJp}
                    <br />
                    {company.addressCity}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="border border-line rounded-card p-7 sm:p-9 bg-mist">
            <h2 className="text-xl font-display font-semibold tracking-tight mb-6">
              Send an Inquiry
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
