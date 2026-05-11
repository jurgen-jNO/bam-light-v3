import { useState } from "react";
import { Search, ChevronDown, ChevronUp, Send, Menu, X, UserPlus, User } from "lucide-react";
import bamLogo from "@/assets/bam-logo.png";
import { toast } from "sonner";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Academy",
    children: [
      { label: "Dagopleidingen", href: "#dagopleidingen" },
      { label: "Meerdaagse trainingen", href: "#meerdaagse-trainingen" },
      { label: "Op maat (van uw bedrijf)", href: "#op-maat" },
    ],
  },
  {
    label: "Events",
    children: [
      { label: "Activiteiten", href: "#activiteiten" },
      { label: "Awards", href: "#awards" },
      { label: "Congress", href: "#congress" },
    ],
  },
  {
    label: "Community",
    children: [
      { label: "Think tanks", href: "#think-tanks" },
      { label: "Future Marketeers", href: "#future-marketeers" },
      { label: "BAM Leden", href: "#bam-leden" },
      { label: "Onze Sponsors", href: "/sponsors" },
      { label: "Affiliates", href: "/affiliations" },
    ],
  },
  {
    label: "Expert Views",
    children: [
      { label: "Artikels", href: "/artikel" },
      { label: "BAM magazine", href: "#bam-magazine" },
      { label: "Looking at 2030", href: "#looking-at-2030" },
    ],
  },
];

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
  { label: "Voorwaarden", href: "#terms" },
  { label: "Cookies", href: "#cookies" },
];

const Mobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const toggleItem = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const t = { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() };
    if (!t.name || !t.email || !t.message) { toast.error("Vul alle velden in."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)) { toast.error("Ongeldig e-mailadres."); return; }
    toast.success("Bericht verzonden!");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClasses =
    "w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-sm text-footer-fg placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-all";

  return (
    <div className="min-h-screen bg-[hsl(0,0%,95%)] flex justify-center">
    <div className="w-full max-w-[390px] bg-background flex flex-col min-h-screen shadow-2xl">
      {/* Mobile Header */}
      <nav className="bg-nav sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 h-16">
          <a href="/" className="shrink-0">
            <img src={bamLogo} alt="BAM" className="h-9 w-auto" />
          </a>
          <div className="flex items-center gap-1">
            <a href="#word-lid" className="flex items-center justify-center w-8 h-8 rounded-full bg-white" aria-label="Word lid">
              <UserPlus className="w-4 h-4 text-[hsl(45,90%,40%)]" />
            </a>
            <a href="#login" className="p-2 text-nav-fg" aria-label="Login">
              <User className="w-5 h-5" />
            </a>
            <button className="p-2 text-nav-fg" aria-label="Zoeken">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-nav-fg"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-nav border-t border-white/10 max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-white/10">
                <button
                  onClick={() => item.children && toggleItem(item.label)}
                  className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-nav-fg uppercase tracking-wide"
                >
                  {item.label}
                  {item.children && (
                    expandedItem === item.label
                      ? <ChevronUp className="w-4 h-4 opacity-60" />
                      : <ChevronDown className="w-4 h-4 opacity-60" />
                  )}
                </button>
                {item.children && expandedItem === item.label && (
                  <div className="bg-nav-dropdown pb-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-8 py-2.5 text-sm text-nav-fg/80 hover:text-nav-fg transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="flex-1 px-4 py-8 space-y-4">
        <div className="border-2 border-dashed border-border rounded-lg p-10 text-center">
          <h1 className="text-xl font-semibold text-foreground mb-2">marketing.be</h1>
          <p className="text-sm text-muted-foreground">
            Mobile wireframe — tap het hamburger menu voor navigatie
          </p>
        </div>
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
          <h2 className="text-lg font-semibold text-foreground mb-2">Job Board</h2>
          <p className="text-sm text-muted-foreground">Bekijk de laatste marketing vacatures</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-footer text-footer-fg">
        <div className="px-4 py-10 space-y-8">
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Contact</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" placeholder="Naam" maxLength={100} value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClasses} />
              <input type="email" placeholder="E-mail" maxLength={255} value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClasses} />
              <div className="relative">
                <textarea placeholder="Uw bericht..." maxLength={1000} rows={2} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClasses} resize-none pr-10`} />
                <button type="submit" className="absolute right-2.5 bottom-2.5 p-1.5 text-white/40 hover:text-white/80 transition-colors" aria-label="Verstuur">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Over BAM */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Over BAM</h3>
            <ul className="space-y-2">
              {sitemapLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-footer-muted hover:text-footer-fg transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-5 space-y-3">
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((l) => (
                <a key={l.label} href={l.href} className="text-xs text-footer-muted hover:text-footer-fg transition-colors">{l.label}</a>
              ))}
            </div>
            <p className="text-xs text-footer-muted">© {new Date().getFullYear()} BAM — Belgian Association of Marketing.</p>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Mobile;
