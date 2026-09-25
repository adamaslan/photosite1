"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/site.config";

type NavLinksProps = {
  className?: string;
  linkClassName?: string;
  activeClassName?: string;
  onNavigate?: () => void;
};

export function NavLinks({ className, linkClassName, activeClassName, onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={className}>
      {site.nav.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={`${linkClassName ?? ""} ${isActive ? activeClassName ?? "" : ""}`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
