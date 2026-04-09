import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const sitemapLinks = [
  { label: "Visie & missie", href: "#visie-missie" },
  { label: "Advocacy", href: "#advocacy" },
  { label: "Onze leden", href: "#onze-leden" },
  { label: "Team", href: "#team" },
  { label: "Pers", href: "#pers" },
  { label: "Nieuwsbrief", href: "#nieuwsbrief" },
];

const legalLinks = [
  { label: "Privacy", href: "#privacy" },
  { label: "Algemene voorwaarden", href: "#terms" },
  { label: "Cookie policy", href: "#cookies" },
];

const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      toast.error("Vul alle velden in.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)) {
      toast.error("Ongeldig e-mailadres.");
      return;
    }
    toast.success("Bericht verzonden!");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClasses =
    "w-full bg-white/5 border border-white/15 rounded px-4 py-2.5 text-sm text-footer-fg placeholder:text-white/30 focus:outline-none focus:border-white/40 focus:bg-white/8 transition-all backdrop-blur-sm";

  return (
    <footer className="bg-footer text-footer-fg">
      <div className="max-w-[1400px] mx-auto px-6 py-14">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row gap-12 pb-10 border-b border-white/10">
          {/* Contact form — left/center */}
          <div className="flex-1 max-w-lg">
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-footer-fg">
              Contact
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Naam"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClasses}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div className="relative">
                <textarea
                  placeholder="Uw bericht..."
                  maxLength={1000}
                  rows={2}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClasses} resize-none pr-10`}
                />
                <button
                  type="submit"
                  className="absolute right-2.5 bottom-2.5 p-1.5 text-white/40 hover:text-white/80 transition-colors"
                  aria-label="Verstuur"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Over BAM links — right */}
          <div className="md:ml-auto">
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-footer-fg">
              Over BAM
            </h3>
            <ul className="space-y-2.5">
              {sitemapLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-footer-muted hover:text-footer-fg transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-sm text-footer-muted">
            © {new Date().getFullYear()} BAM — Belgian Association of Marketing.
            Alle rechten voorbehouden.
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-footer-muted hover:text-footer-fg transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
