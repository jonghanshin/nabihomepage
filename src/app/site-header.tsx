"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { nav } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20">
        <Link href="/" onClick={() => setOpen(false)} aria-label="홈으로">
          <Image src="/images/logo-black.png" alt="Nabi Architecture Interior" width={600} height={401} className="h-9 w-auto md:h-11" priority />
        </Link>

        <nav className="hidden md:block" aria-label="주 메뉴">
          <ul className="flex items-center gap-9 font-display text-sm tracking-wider">
            {nav.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`py-7 transition-colors hover:text-foreground ${isActive(item.href) ? "text-foreground font-medium" : "text-muted"}`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="invisible absolute left-1/2 top-full min-w-36 -translate-x-1/2 border border-line bg-background py-2 opacity-0 shadow-sm transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block px-5 py-2 text-xs text-muted hover:bg-paper hover:text-foreground">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-foreground transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-foreground transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-background md:hidden" aria-label="모바일 메뉴">
          <ul className="mx-auto max-w-6xl px-5 py-4 font-display">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 text-base tracking-wider">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 pb-3">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={() => setOpen(false)} className="text-xs text-muted">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
