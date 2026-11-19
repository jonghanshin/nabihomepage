import type { Metadata } from "next";
import Link from "next/link";

import { PageTitle } from "../ui";

export const metadata: Metadata = { title: "Branding" };

const areas = [
  { title: "LOGO", ko: "로고 · CI/BI", desc: "공간과 사업의 성격을 담은 로고와 아이덴티티 시스템을 설계합니다." },
  { title: "WEB", ko: "웹 · 온라인", desc: "브랜드의 첫인상이 되는 홈페이지와 온라인 채널을 디자인합니다." },
  { title: "PRINT", ko: "인쇄 · 사인물", desc: "명함, 리플릿, 메뉴판, 사인물까지 공간과 어울리는 인쇄물을 만듭니다." },
];

export default function BrandingPage() {
  return (
    <>
      <PageTitle
        eyebrow="BRANDING"
        title="BRANDING"
        desc="보이는 인테리어부터 보이지 않는 브랜딩까지. 공간과 브랜드가 하나의 이야기를 하도록 함께 설계합니다."
      />
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <ul className="grid gap-px bg-line md:grid-cols-3">
          {areas.map((a, i) => (
            <li key={a.title} className="bg-background p-8 md:p-10">
              <p className="font-display text-sm text-muted">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-8 font-display text-3xl font-light tracking-wider">{a.title}</h2>
              <p className="mt-2 text-sm font-medium">{a.ko}</p>
              <p className="mt-5 text-sm leading-7 text-muted">{a.desc}</p>
            </li>
          ))}
        </ul>
        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-block border border-foreground px-10 py-4 font-display text-xs tracking-[0.25em] transition-colors hover:bg-foreground hover:text-white">
            브랜딩 문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
