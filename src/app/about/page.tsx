import type { Metadata } from "next";
import Image from "next/image";

import { company } from "@/lib/site";
import { PageTitle, SubNav } from "../ui";
import { aboutNav } from "./about-nav";

export const metadata: Metadata = { title: "Brand" };

const meaning = [
  { char: "先", read: "먼저 선", desc: "고객의 필요를 먼저" },
  { char: "知", read: "알 지", desc: "깊이 이해하고" },
  { char: "孜", read: "힘쓸 자", desc: "부지런히 힘써 돕습니다" },
];

export default function BrandPage() {
  return (
    <>
      <PageTitle eyebrow="ABOUT" title="NABI BRAND" desc={company.tagline} />
      <SubNav items={aboutNav} current="/about" />

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="font-display text-xs tracking-[0.3em] text-muted">BRAND STORY</p>
            <h2 className="mt-4 text-2xl font-light leading-snug md:text-3xl">
              나비(Nabi)는
              <br />
              히브리어로 &lsquo;선지자&rsquo;를 뜻합니다.
            </h2>
            <p className="mt-6 leading-8 text-muted">
              라틴어로는 예언을 뜻하는 nabitum과 맞닿아 있는 이름입니다. 나비 아키텍쳐는 고객의 필요를 먼저 알고
              힘써 돕는다는 뜻을 담아, 눈에 보이는 인테리어부터 보이지 않는 브랜딩까지 고객이 바라는 공간이
              현실이 되도록 함께합니다.
            </p>
            <p className="mt-8 border-l-2 border-foreground pl-5 text-lg font-medium">{company.slogan}</p>
          </div>
          <ul className="grid grid-cols-3 gap-px self-start bg-line">
            {meaning.map((m) => (
              <li key={m.char} className="bg-background p-5 text-center md:p-8">
                <p className="text-4xl font-light md:text-6xl">{m.char}</p>
                <p className="mt-4 text-xs text-muted">{m.read}</p>
                <p className="mt-2 text-sm">{m.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-display text-xs tracking-[0.3em] text-muted">CORPORATE IDENTITY</p>
          <h2 className="mt-3 font-display text-3xl font-light tracking-wider">CI SYSTEM</h2>
          <div className="mt-10 grid items-start gap-6 md:grid-cols-3">
            <Image src="/images/ci-1.jpg" alt="나비 아키텍쳐 CI 기본 시스템" width={2000} height={1517} sizes="(min-width: 768px) 33vw, 100vw" className="w-full" />
            <Image src="/images/ci-2.jpg" alt="나비 아키텍쳐 로고 적용 색상" width={1200} height={1680} sizes="(min-width: 768px) 33vw, 100vw" className="w-full" />
            <Image src="/images/ci-3.jpg" alt="나비 아키텍쳐 CI 적용 예시" width={1500} height={2000} sizes="(min-width: 768px) 33vw, 100vw" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
}
