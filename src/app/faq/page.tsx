import type { Metadata } from "next";

import { company } from "@/lib/site";
import { PageTitle } from "../ui";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  {
    q: "공사는 어떤 순서로 진행되나요?",
    a: "상담 예약 → 사무실 미팅 → 가계약 → 현장 실측 → 레이아웃 미팅 → 디자인 → 본 계약 → 착공 → 마감재 미팅 → 준공 → 사후관리 순서로 진행됩니다.",
  },
  {
    q: "사무실 상담 때는 무엇을 준비하면 되나요?",
    a: "현장 정보, 공사 목적과 범위, 선호하는 디자인 취향, 예산을 알려주시면 됩니다. 참고하고 싶은 사진을 가져오시면 상담에 큰 도움이 됩니다.",
  },
  {
    q: "개략 견적과 상세 견적은 어떻게 다른가요?",
    a: "개략 견적은 계획을 세우기 위한 예산 범위입니다. 상세 견적은 디자인 미팅 후 확정된 디자인을 반영해 산출합니다.",
  },
  {
    q: "가계약금은 무엇인가요?",
    a: "프로젝트 일정을 확보하기 위한 계약금입니다. 3D 콘셉트 전달 이후 계약을 취소하시면 가계약금은 반환되지 않으며, 디자인 권리는 나비 아키텍쳐에 있습니다.",
  },
  {
    q: "레이아웃 미팅과 디자인 미팅은 무엇인가요?",
    a: "레이아웃 미팅(약 1주)에서는 실제 치수로 공간 구성과 가구 배치를 계획하고, 디자인 미팅(1~2주)에서는 3D 렌더링과 마감재를 검토합니다.",
  },
  {
    q: "공사 기간은 얼마나 걸리나요?",
    a: "디자인은 최소 1주, 보통 2~3주가 걸립니다. 30평대 아파트 전체 리모델링은 보통 3~4주, 이후 점검과 베이크아웃에 약 1주가 더 필요합니다. 최소 한 달 정도 여유를 두시길 권하며, 공사 범위에 따라 달라질 수 있습니다.",
  },
  {
    q: "어느 지역까지 공사가 가능한가요?",
    a: `${company.serviceArea}에서 진행합니다.`,
  },
  {
    q: "A/S는 어떻게 되나요?",
    a: "준공일로부터 1년간 시공팀이 하자 보수를 책임집니다. 고객 과실로 인한 파손이나 자연 마모로 인한 교체는 별도 비용이 발생합니다.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageTitle eyebrow="CUSTOMER" title="FAQ" desc="나비 아키텍쳐에 자주 묻는 질문을 모았습니다." />
      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <div className="border-t border-foreground">
          {faqs.map((f, i) => (
            <details key={f.q} className="group border-b border-line" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center gap-4 py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-sm text-muted">Q{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 font-medium">{f.q}</span>
                <span className="text-xl font-light text-muted transition group-open:rotate-45">+</span>
              </summary>
              <p className="pb-7 pl-12 pr-8 text-sm leading-7 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted">
          더 궁금하신 점은 <a href={`tel:${company.phone}`} className="font-medium text-foreground underline underline-offset-4">{company.phone}</a> 으로 편하게 문의해 주세요.
        </p>
      </section>
    </>
  );
}
