// 시공 사례 목록. 새 프로젝트는 배열 맨 앞에 추가한다.
// image는 public/ 기준 경로. 사진이 아직 없으면 비워 두면 자리표시 카드로 보인다.

export const categories = [
  { slug: "residence", label: "Residence", ko: "주거" },
  { slug: "commercial", label: "Commercial", ko: "상업" },
  { slug: "medical", label: "Medical", ko: "의료" },
  { slug: "office", label: "Office", ko: "오피스" },
  { slug: "architecture", label: "Architecture", ko: "건축" },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export type Work = {
  id: string;
  title: string;
  category: CategorySlug;
  image?: string;
};

export const works: Work[] = [
  { id: "76", title: "성남시 분당구 우성 4단지 아파트", category: "residence" },
  { id: "75", title: "용인시 기흥구 하마비마을 동일하이빌 1차아파트", category: "residence" },
  { id: "74", title: "용인시 기흥구 삼성래미안 2차아파트", category: "residence" },
  { id: "73", title: "용인시 기흥구 삼성래미안 1차아파트", category: "residence" },
  { id: "71", title: "용인시 기흥구 하마비마을 동일하이빌", category: "residence" },
  { id: "70", title: "용인시 기흥구 하마비마을 동일하이빌 2차아파트", category: "residence" },
  { id: "68", title: "용인시 기흥구 하마비마을 동부아파트", category: "residence" },
  { id: "67", title: "수원시 영통구 오픽센터", category: "commercial" },
  { id: "66", title: "용인시 수지구 광교상떼빌파크뷰", category: "residence" },
  // 아래 3건은 기존 홈페이지 메인 사진. 정확한 프로젝트명은 확인 후 수정 필요
  { id: "8", title: "창조하우징 오피스", category: "office", image: "/images/works-1.png" },
  { id: "7", title: "상구다방 카페", category: "commercial", image: "/images/works-2.png" },
  { id: "5", title: "멜로우시티 카페", category: "commercial", image: "/images/works-3.jpg" },
];

export function findCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function worksIn(slug?: CategorySlug) {
  return slug ? works.filter((w) => w.category === slug) : works;
}
