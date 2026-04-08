const footerLinks = [
  { label: "Privacy", href: "#privacy" },
  { label: "Algemene voorwaarden", href: "#terms" },
  { label: "Cookie policy", href: "#cookies" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-fg">
      <div className="max-w-[1400px] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-footer-muted">
            © {new Date().getFullYear()} BAM — Belgian Association of Marketing. Alle rechten voorbehouden.
          </p>
          <ul className="flex items-center gap-6">
            {footerLinks.map((link) => (
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
