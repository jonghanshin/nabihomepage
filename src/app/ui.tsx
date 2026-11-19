import Image from "next/image";
import Link from "next/link";

import { findCategory, type Work } from "@/lib/works";

// 하위 페이지 상단 제목 영역
export function PageTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="font-display text-xs tracking-[0.3em] text-muted">{eyebrow}</p>
        <h1 className="mt-3 font-display text-3xl font-light tracking-wider md:text-5xl">{title}</h1>
        {desc && <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base">{desc}</p>}
      </div>
    </section>
  );
}

// 하위 메뉴 탭 (About, Works 공용)
export function SubNav({ items, current }: { items: { label: string; href: string }[]; current: string }) {
  return (
    <nav className="border-b border-line" aria-label="하위 메뉴">
      <ul className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 font-display text-sm tracking-wider">
        {items.map((it) => (
          <li key={it.href} className="shrink-0">
            <Link
              href={it.href}
              aria-current={it.href === current ? "page" : undefined}
              className={`block border-b-2 py-4 ${it.href === current ? "border-foreground text-foreground" : "border-transparent text-muted hover:text-foreground"}`}
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function WorkCard({ work }: { work: Work }) {
  const cat = findCategory(work.category);
  return (
    <article className="group">
      <div className="relative aspect-[3/2] overflow-hidden bg-paper">
        {work.image ? (
          <Image
            src={work.image}
            alt={work.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Image src="/images/logo-black.png" alt="" width={600} height={401} className="h-10 w-auto opacity-15" />
          </div>
        )}
      </div>
      <p className="mt-4 font-display text-[11px] tracking-[0.25em] text-muted">{cat?.label.toUpperCase()}</p>
      <h3 className="mt-1 text-[15px] font-medium leading-6">{work.title}</h3>
    </article>
  );
}

export function MoreLink({ href, children = "more" }: { href: string; children?: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-3 font-display text-xs tracking-[0.25em]">
      {children}
      <span className="h-px w-8 bg-current transition-all group-hover:w-14" />
    </Link>
  );
}
