import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import bamLogo from "@/assets/bam-logo.png";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Academy",
    href: "/agenda",
    children: [
      { label: "Agenda", href: "/agenda" },
      { label: "Dagopleidingen", href: "/dagopleiding" },
      { label: "Meerdaagse trainingen", href: "/event" },
      { label: "Op maat (van uw bedrijf)", href: "/agenda?type=opleidingen&subtype=op-maat" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Overzicht", href: "/events" },
      { label: "Activiteiten", href: "/events?type=events&subtype=activiteit" },
      { label: "Awards", href: "/events?type=events&subtype=award" },
      { label: "Congress", href: "/events?type=events&subtype=congres" },
    ],
  },
  {
    label: "Community",
    children: [
      { label: "Think tanks", href: "#think-tanks" },
      { label: "Future Marketeers", href: "#future-marketeers" },
      { label: "BAM Leden", href: "/leden" },
      { label: "Onze Sponsors", href: "/sponsors" },
      { label: "Affiliates", href: "/affiliations" },
    ],
  },
  {
    label: "Expert Views",
    children: [
      { label: "Artikels", href: "#artikels" },
      { label: "BAM magazine", href: "#bam-magazine" },
      { label: "Looking at 2030", href: "#looking-at-2030" },
    ],
  },
];

const MainNavigation = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-nav border-b border-nav-dropdown-border relative z-50">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/mobile" className="shrink-0">
          <img src={bamLogo} alt="BAM - Belgian Association of Marketing" className="h-12 w-auto" />
        </a>

        {/* Main nav items */}
        <ul className="flex items-center gap-0.5 ml-8">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href || "#"}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-nav-fg uppercase tracking-wide hover:text-nav-hover transition-colors"
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
              </a>

              {/* Dropdown */}
              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 pt-1 min-w-[220px]">
                  <div className="bg-nav-dropdown border border-nav-dropdown-border rounded shadow-lg py-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-nav-fg hover:text-nav-hover hover:bg-white/10 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right side: Word lid, Login, Search, Language */}
        <div className="flex items-center gap-3 ml-auto shrink-0">
          <a
            href="/word-lid"
            className="px-4 py-1.5 text-sm font-semibold bg-card text-foreground rounded hover:bg-nav-hover transition-colors"
          >
            Word lid
          </a>
          <a
            href="/login"
            className="text-sm font-medium text-nav-fg hover:text-nav-hover transition-colors"
          >
            Login
          </a>
          <button
            className="p-2 text-nav-fg hover:text-nav-hover transition-colors"
            aria-label="Zoeken"
          >
            <Search className="w-4 h-4" />
          </button>
          <div className="flex items-center border-l border-white/30 pl-3 text-sm font-semibold">
            <button className="px-1 py-1 text-nav-fg hover:text-nav-hover transition-colors">
              NL
            </button>
            <span className="text-white/30 mx-0.5">|</span>
            <button className="px-1 py-1 text-nav-fg/60 hover:text-nav-hover transition-colors">
              FR
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;