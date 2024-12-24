import * as React from "react";
import { FooterLinks } from "./FooterLinks";
import { LegalLinks } from "./LegalLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="flex flex-col px-36 py-20 bg-slate-800 max-md:px-5"
      role="contentinfo"
    >
      <div className="flex flex-wrap gap-10 justify-between items-end w-full text-base tracking-wide max-md:max-w-full">
        <div className="flex flex-col text-white  max-md:max-w-full">
          <a href="/" aria-label="Return to homepage">
            <img
              loading="lazy"
              src="/MDS LOGO AK.jpg"
              alt="Solidarity Solar Ltd logo"
              className="object-contain bg-blend-luminosity w-20 rounded"
            />
          </a>
          <FooterLinks />
        </div>
      </div>
      <div
        role="separator"
        aria-hidden="true"
        className="mt-14 w-full max-md:mt-10 max-md:max-w-full"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/343425ddec2cc31d09a6c95f96447b62037e2d39b35aa7d14484cc3d1638452b?placeholderIfAbsent=true&apiKey=a1f00ace3e604292bc54ee1d347eb33d"
          alt=""
          className="object-contain w-full aspect-[500]"
        />
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-start mt-14 w-full text-xs tracking-wide leading-none text-neutral-400 max-md:mt-10 max-md:max-w-full">
        <LegalLinks />
        <div className="text-right">
          Copyright {currentYear} - Solidarity Solar Ltd
        </div>
      </div>
    </footer>
  );
}
