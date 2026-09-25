"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/site.config";
import { NavLinks } from "./NavLinks";

/** Mobile header: name on the left, menu in the corner; the drawer slides in from the left. */
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between bg-paper/90 px-4 py-4 backdrop-blur md:hidden">
        <Link href="/" className="text-base font-medium tracking-tight">
          {site.name}
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-controls="mobile-drawer"
          aria-label="Open menu"
          className="-mr-2 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        >
          <span className="block h-px w-6 bg-ink" />
          <span className="block h-px w-6 bg-ink" />
          <span className="block h-px w-6 bg-ink" />
        </button>
      </header>

      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        id="mobile-drawer"
        aria-label="Main"
        inert={!isOpen}
        className={`fixed inset-y-0 left-0 z-50 flex w-4/5 max-w-xs flex-col bg-blood px-6 py-5 text-white transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" onClick={close} className="text-base font-medium tracking-tight">
            {site.name}
          </Link>
          <button type="button" onClick={close} aria-label="Close menu" className="-mr-2 h-10 w-10 text-2xl leading-none">
            ×
          </button>
        </div>
        <NavLinks
          className="mt-12 space-y-4 text-2xl"
          linkClassName="text-white/70 transition-colors hover:text-white"
          activeClassName="!text-white underline underline-offset-4"
          onNavigate={close}
        />
      </nav>
    </>
  );
}
