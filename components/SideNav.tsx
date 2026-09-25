import Link from "next/link";
import { site } from "@/site.config";
import { NavLinks } from "./NavLinks";

/** Fixed desktop sidebar — never scrolls with the page. */
export function SideNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-56 flex-col px-8 py-10 md:flex">
      <Link href="/" className="text-lg font-medium tracking-tight hover:text-crosshair">
        {site.name}
      </Link>
      <nav aria-label="Main" className="mt-12">
        <NavLinks
          className="space-y-2 text-sm"
          linkClassName="text-muted transition-colors hover:text-ink"
          activeClassName="!text-ink underline underline-offset-4"
        />
      </nav>
    </aside>
  );
}
