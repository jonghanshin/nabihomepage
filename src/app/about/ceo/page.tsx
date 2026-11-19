import type { Metadata } from "next";
import Image from "next/image";

import { PageTitle, SubNav } from "../../ui";
import { aboutNav } from "../about-nav";

export const metadata: Metadata = { title: "CEO" };

const education = [{ period: "2001.03 – 2003.02", text: "전남대학교 대학원 건축공학과 석사 (건축설계 전공)" }];

const career = [
  { period: "2021.04 – 현재", text: "나비 아키텍쳐 대표 — 카페 · 오피스 인테리어 설계 및 시공, 화성 · 세종 단독주택 설계" },
  { period: "", text: "프리랜서 — 주거, 타운하우스, 기숙사, 리조트, 병원, 오피스 설계 및 현상설계 당선" },
  { period: "", text: "베네카운티 주택 이사" },
  { period: "", text: "이름 건축사사무소 이사" },
  { period: "", text: "모리아 건축디자인 팀장" },
  { period: "", text: "마노 건축사사무소" },
  { period: "", text: "정우 ENG 건축사사무소" },
];

export default function CeoPage() {
  return (
    <>
      <PageTitle eyebrow="ABOUT" title="NABI CEO" />
      <SubNav items={aboutNav} current="/about/ceo" />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-20 md:py-28">
        <div>
          <div className="relative aspect-[3/4] overflow-hidden bg-paper">
            <Image src="/images/ceo.jpg" alt="장희정 대표" fill sizes="(min-width: 768px) 352px, 100vw" className="object-cover" />
          </div>
          <p className="mt-6 font-display text-xs tracking-[0.3em] text-muted">CEO</p>
          <p className="mt-1 text-2xl font-medium">
            장희정 <span className="ml-2 font-display text-sm font-light tracking-widest text-muted">JANG HEEJUNG</span>
          </p>
        </div>

        <div className="space-y-14">
          <History title="EDUCATION" rows={education} />
          <History title="CAREER" rows={career} />
        </div>
      </section>
    </>
  );
}

function History({ title, rows }: { title: string; rows: { period: string; text: string }[] }) {
  return (
    <div>
      <h2 className="border-b border-foreground pb-3 font-display text-sm font-medium tracking-[0.25em]">{title}</h2>
      <ul>
        {rows.map((r) => (
          <li key={r.text} className="grid gap-1 border-b border-line py-4 text-sm sm:grid-cols-[10rem_1fr] sm:gap-6">
            <span className="font-display text-muted">{r.period}</span>
            <span className="leading-6">{r.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
