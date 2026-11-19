import Link from "next/link";

import { company } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 text-sm md:grid-cols-[1fr_auto]">
        <div className="space-y-2">
          <p className="font-display text-lg font-medium tracking-[0.2em] text-white">{company.nameEn}</p>
          <p>{company.address}</p>
          <p>
            Tel. <a href={`tel:${company.phone}`} className="hover:text-white">{company.phone}</a>
            <span className="mx-3 text-white/30">|</span>
            Email. <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
          </p>
        </div>
        <nav className="flex gap-6 font-display text-xs tracking-wider md:items-end" aria-label="하단 메뉴">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/works" className="hover:text-white">Works</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/40">
          Copyright © 2026 nabiarchi.com. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
