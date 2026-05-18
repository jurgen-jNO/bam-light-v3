import { Linkedin, Facebook, Twitter, Mail, Link2, Share2 } from "lucide-react";
import { useState } from "react";

interface ArtikelShareProps {
  title?: string;
  className?: string;
}

export default function ArtikelShare({ title = "", className = "" }: ArtikelShareProps) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const enc = encodeURIComponent;

  const items: { Icon: typeof Linkedin; href?: string; onClick?: () => void; label: string }[] = [
    {
      Icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
      label: "Deel op LinkedIn",
    },
    {
      Icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
      label: "Deel op Facebook",
    },
    {
      Icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`,
      label: "Deel op Twitter",
    },
    {
      Icon: Mail,
      href: `mailto:?subject=${enc(title)}&body=${enc(url)}`,
      label: "Deel via e-mail",
    },
    {
      Icon: Link2,
      onClick: () => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
          navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }
      },
      label: copied ? "Link gekopieerd" : "Kopieer link",
    },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="mr-1 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-foreground/50">
        <Share2 className="h-3 w-3" /> Delen
      </span>
      {items.map(({ Icon, href, onClick, label }, i) =>
        href ? (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="flex h-8 w-8 items-center justify-center border-2 border-dashed border-foreground/30 text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        ) : (
          <button
            key={i}
            type="button"
            onClick={onClick}
            aria-label={label}
            title={label}
            className="flex h-8 w-8 items-center justify-center border-2 border-dashed border-foreground/30 text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
          >
            <Icon className="h-3.5 w-3.5" />
          </button>
        )
      )}
    </div>
  );
}
