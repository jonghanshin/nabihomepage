import type { Metadata } from "next";
import Image from "next/image";

import { PageTitle, SubNav } from "../../ui";
import { aboutNav } from "../about-nav";

export const metadata: Metadata = { title: "Process" };

const steps = [
  { en: "Inquiry", ko: "상담 문의", desc: "홈페이지, 전화, 이메일로 문의해 주시면 간단한 상담 후 사무실 미팅 일정을 잡습니다." },
  { en: "Meeting", ko: "사무실 미팅", desc: "진행 방식과 일정을 안내드리고, 희망 일정과 예산에 맞는지 함께 검토해 개략 예산을 알려드립니다." },
  { en: "Pre-contract", ko: "가계약 · 설계 계약", desc: "현장 실측과 3D 디자인 진행을 위한 가계약을 체결합니다." },
  { en: "Survey", ko: "현장 실측", desc: "현장을 방문해 실측하고 기본 도면을 작성합니다." },
  { en: "Design", ko: "디자인", desc: "예산, 현장 여건, 요구사항을 바탕으로 평면도와 3D 디자인을 제안하고, 확정된 디자인으로 상세 견적을 산출합니다." },
  { en: "Contract", ko: "본 계약", desc: "최종 디자인과 견적을 기준으로 본 계약을 체결합니다." },
  { en: "Construction", ko: "시공", desc: "확정된 디자인대로 공사를 진행하며, 공사 중 샘플을 보며 마감재 미팅을 합니다." },
  { en: "Completion", ko: "준공", desc: "모든 공정이 끝나면 현장 전체를 꼼꼼히 점검합니다." },
  { en: "After Service", ko: "사후관리", desc: "준공일로부터 1년간 하자 보수와 유지관리를 책임지며, 이후에는 유상으로 진행합니다." },
];

const photos: Record<number, string> = { 2: "/images/process-1.jpg", 4: "/images/process-2.jpg", 6: "/images/process-3.jpg" };

export default function ProcessPage() {
  return (
    <>
      <PageTitle eyebrow="ABOUT" title="PROCESS" desc="첫 상담부터 사후관리까지, 나비 아키텍쳐의 9단계 진행 과정입니다." />
      <SubNav items={aboutNav} current="/about/process" />

      <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
        <ol className="space-y-0">
          {steps.map((s, i) => (
            <li key={s.en}>
              <div className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-line py-8 md:grid-cols-[6rem_12rem_1fr] md:gap-8">
                <p className="font-display text-3xl font-light text-muted md:text-4xl">{String(i + 1).padStart(2, "0")}</p>
                <div>
                  <p className="font-display text-[11px] tracking-[0.25em] text-muted">{s.en.toUpperCase()}</p>
                  <h2 className="mt-1 text-lg font-medium">{s.ko}</h2>
                </div>
                <p className="col-start-2 leading-7 text-muted md:col-start-auto">{s.desc}</p>
              </div>
              {photos[i] && (
                <div className="relative mb-8 aspect-[16/9] overflow-hidden bg-paper">
                  <Image src={photos[i]} alt="" fill sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
