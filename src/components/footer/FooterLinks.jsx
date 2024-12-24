import * as React from "react";

const links = [
  { id: 1, text: "About", href: "/about" },
  { id: 4, text: "Customer Care", href: "/customer-care" },
  { id: 5, text: "Services", href: "/services" },
];

export function FooterLinks() {
  return (
    <nav
      className="flex overflow-hidden flex-wrap gap-10 items-start mt-10 max-md:max-w-full"
      aria-label="Footer navigation"
    >
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className="text-white hover:text-amber-400 focus:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded-sm transition-colors"
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
}
