import * as React from "react";

const legalLinks = [
  { id: 1, text: "Terms & Conditions", href: "/terms" },
  { id: 2, text: "Privacy Policy", href: "/privacy" },
  { id: 3, text: "Accessibility", href: "/accessibility" },
  { id: 4, text: "Legal", href: "/legal" },
];

export function LegalLinks() {
  return (
    <nav className="max-md:max-w-full" aria-label="Legal links">
      {legalLinks.map((link, index) => (
        <React.Fragment key={link.id}>
          <a
            className="text-neutral-400 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded-sm transition-colors"
          >
            {link.text}
          </a>
          {index < legalLinks.length - 1 && (
            <span className="text-neutral-400 mx-2">|</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
