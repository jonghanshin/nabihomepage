// 회사 기본 정보와 메뉴 구성. 연락처나 메뉴가 바뀌면 여기만 고치면 된다.

export const company = {
  name: "나비 아키텍쳐",
  nameEn: "NABI ARCHITECTURE",
  tagline: "가치를 디자인하는 공간설계",
  slogan: "당신의 필요를 먼저 알고 힘써 돕겠습니다.",
  address: "경기도 용인시 기흥구 구성로 173 1층 나비아키텍쳐",
  phone: "070-7809-5797",
  email: "nabi001@nabiarchi.com",
  serviceArea: "성남 · 용인 · 수원 등 경기 남부권 (그 외 지역은 협의)",
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Brand", href: "/about" },
      { label: "Process", href: "/about/process" },
      { label: "CEO", href: "/about/ceo" },
    ],
  },
  {
    label: "Works",
    href: "/works",
    children: [
      { label: "All", href: "/works" },
      { label: "Residence", href: "/works/residence" },
      { label: "Commercial", href: "/works/commercial" },
      { label: "Medical", href: "/works/medical" },
      { label: "Office", href: "/works/office" },
      { label: "Architecture", href: "/works/architecture" },
    ],
  },
  { label: "Branding", href: "/branding" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
