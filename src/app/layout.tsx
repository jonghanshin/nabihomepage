import type { Metadata } from "next";
import { Montserrat, Noto_Sans_KR } from "next/font/google";

import { company } from "@/lib/site";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.nameEn} | ${company.tagline}`,
    template: `%s | ${company.nameEn}`,
  },
  description: `${company.name} — 주거·상업·의료·오피스 인테리어와 건축 설계, 브랜딩까지. ${company.slogan}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
