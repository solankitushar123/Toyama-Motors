import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { company } from "../data/company";

const inquiryTypes = [
  "Vehicle Inquiry",
  "Machinery Inquiry",
  "Export Inquiry",
  "General Inquiry",
];

const inputClasses =
  "w-full bg-paper border border-line rounded-xs px-4 py-3 text-[14.5px] text-ink placeholder:text-steel focus:border-ink transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    inquiryType: inquiryTypes[3],
    message: "",
  });
  const [sent, setSent] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const subject = `${form.inquiryType} — ${form.name || "Website Inquiry"}`;
    const bodyLines = [
      `Inquiry Type: ${form.inquiryType}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "—"}`,
      `Country: ${form.country || "—"}`,
      "",
      "Message:",
      form.message,
    ];
    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line rounded-card p-8 bg-mist text-center">
        <CheckCircle2 size={32} className="mx-auto text-red-motor" strokeWidth={1.5} />
        <h3 className="mt-4 font-display font-semibold text-lg">
          Your email app should now be opening
        </h3>
        <p className="mt-2 text-[14.5px] text-slate-muted max-w-md mx-auto leading-relaxed">
          We've prepared your inquiry for {company.email}. If your email client
          didn't open automatically, please send your message directly to{" "}
          <a href={`mailto:${company.email}`} className="text-red-motor font-medium">
            {company.email}
          </a>{" "}
          or call {company.phone}.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-ink underline underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-medium text-slate-muted mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClasses}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-slate-muted mb-1.5">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-slate-muted mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClasses}
            placeholder="Optional"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-xs font-medium text-slate-muted mb-1.5">
            Country
          </label>
          <input
            id="country"
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
            className={inputClasses}
            placeholder="Your country"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className="block text-xs font-medium text-slate-muted mb-1.5">
          Inquiry Type
        </label>
        <select
          id="inquiryType"
          value={form.inquiryType}
          onChange={(e) => update("inquiryType", e.target.value)}
          className={`${inputClasses} appearance-none`}
        >
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-medium text-slate-muted mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us what you're looking for…"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 bg-red-motor hover:bg-red-deep text-paper font-medium text-sm px-7 py-3.5 rounded-xs transition-colors w-full sm:w-auto"
      >
        Send Inquiry
        <Send size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
      <p className="text-xs text-steel">
        This site has no backend — submitting opens your email app addressed to
        Toyama Motors. You can also email or call us directly.
      </p>
    </form>
  );
}
