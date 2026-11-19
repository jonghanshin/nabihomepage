import Image from "next/image";
import Link from "next/link";

import { company } from "@/lib/site";
import { categories, works } from "@/lib/works";
import { MoreLink, WorkCard } from "./ui";

const featured = works.filter((w) => w.image).slice(0, 3);

const services = [
  { title: "Interior", desc: "주거 · 상업 · 의료 · 오피스 공간의 설계부터 시공, 사후관리까지" },
  { title: "Architecture", desc: "단독주택 · 타운하우스 등 건축 설계" },
  { title: "Branding", desc: "로고 · 웹 · 인쇄물까지, 공간과 어울리는 브랜드 아이덴티티" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[78vh] min-h-[480px] items-end overflow-hidden bg-foreground">
        <Image src="/images/works-3.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 text-white md:pb-24">
          <p className="font-display text-xs tracking-[0.4em] text-white/80 md:text-sm">{company.nameEn}</p>
          <h1 className="mt-4 text-3xl font-light leading-tight md:text-6xl">{company.tagline}</h1>
          <div className="mt-8 text-white">
            <MoreLink href="/about">about us</MoreLink>
          </div>
        </div>
      </section>

      {/* 소개 */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
          <div>
            <p className="font-display text-xs tracking-[0.3em] text-muted">NABI = PROPHET</p>
            <p className="mt-4 text-2xl font-light leading-snug md:text-3xl">{company.slogan}</p>
          </div>
          <ul className="grid gap-8 sm:grid-cols-3 md:gap-6">
            {services.map((s) => (
              <li key={s.title} className="border-t border-foreground pt-5">
                <h2 className="font-display text-sm font-medium tracking-[0.2em]">{s.title.toUpperCase()}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Works */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-xs tracking-[0.25em] text-muted">
                {categories.map((c) => c.label).join(" / ")}
              </p>
              <h2 className="mt-3 font-display text-4xl font-light tracking-wider md:text-5xl">WORKS</h2>
            </div>
            <MoreLink href="/works" />
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
            {featured.map((w) => (
              <WorkCard key={w.id} work={w} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Contact */}
      <section className="mx-auto grid max-w-6xl gap-px bg-line md:grid-cols-2">
        <CtaBox href="/faq" title="FAQ" desc="나비 아키텍쳐에 대해 궁금하신 내용이 있나요?" />
        <CtaBox href="/contact" title="CONTACT" desc="나비 아키텍쳐의 위치와 연락처가 궁금하신가요?" />
      </section>
    </>
  );
}

function CtaBox({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href} className="group block bg-background px-5 py-16 transition-colors hover:bg-foreground hover:text-white md:px-12 md:py-20">
      <h2 className="font-display text-3xl font-light tracking-wider">{title}</h2>
      <p className="mt-4 text-sm text-muted group-hover:text-white/70">{desc}</p>
      <p className="mt-8 font-display text-xs tracking-[0.25em]">바로가기 →</p>
    </Link>
  );
}
