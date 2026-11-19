import type { Metadata } from "next";

import { company } from "@/lib/site";
import { PageTitle } from "../ui";

export const metadata: Metadata = { title: "Contact" };

const mapQuery = encodeURIComponent("경기도 용인시 기흥구 구성로 173");

export default function ContactPage() {
  const rows = [
    { label: "ADDRESS", value: company.address },
    { label: "TEL", value: company.phone, href: `tel:${company.phone}` },
    { label: "EMAIL", value: company.email, href: `mailto:${company.email}` },
    { label: "AREA", value: company.serviceArea },
  ];

  return (
    <>
      <PageTitle eyebrow="CONTACT" title="CONTACT" desc="상담은 전화나 이메일로 예약해 주시면 사무실 미팅 일정을 안내해 드립니다." />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.3fr] md:py-24">
        <dl className="border-t border-foreground">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-5 text-sm">
              <dt className="font-display text-xs tracking-[0.2em] text-muted">{r.label}</dt>
              <dd className="leading-6">
                {r.href ? <a href={r.href} className="hover:underline">{r.value}</a> : r.value}
              </dd>
            </div>
          ))}
          <div className="flex flex-wrap gap-3 pt-8">
            <a href={`tel:${company.phone}`} className="bg-foreground px-6 py-3 text-sm text-white hover:opacity-85">전화 상담</a>
            <a href={`mailto:${company.email}`} className="border border-foreground px-6 py-3 text-sm hover:bg-paper">이메일 문의</a>
            <a href={`https://map.naver.com/p/search/${mapQuery}`} target="_blank" rel="noopener noreferrer" className="border border-line px-6 py-3 text-sm text-muted hover:text-foreground">
              네이버 지도 ↗
            </a>
          </div>
        </dl>
        <div className="aspect-[4/3] w-full overflow-hidden bg-paper">
          <iframe
            title="나비 아키텍쳐 위치"
            src={`https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
