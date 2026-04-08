const sitemapColumns = [
  {
    title: "Over BAM",
    links: [
      { label: "Visie & missie", href: "#visie-missie" },
      { label: "Advocacy", href: "#advocacy" },
      { label: "Onze leden", href: "#onze-leden" },
      { label: "Team (incl RvB)", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy", href: "#privacy" },
  { label: "Algemene voorwaarden", href: "#terms" },
  { label: "Cookie policy", href: "#cookies" },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-fg">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        {/* Sitemap section */}
        <div className="flex justify-end pb-10 border-b border-white/10">
          {sitemapColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
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
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-sm text-footer-muted">
            © {new Date().getFullYear()} BAM — Belgian Association of Marketing. Alle rechten voorbehouden.
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
