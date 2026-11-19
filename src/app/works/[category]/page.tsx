import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { categories, findCategory } from "@/lib/works";
import { SubNav } from "../../ui";
import { WorksList, WorksTitle, worksNav } from "../works-view";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/works/[category]">): Promise<Metadata> {
  const cat = findCategory((await params).category);
  return { title: cat ? `${cat.label} Works` : "Works" };
}

export default function WorksCategoryPage({ params }: PageProps<"/works/[category]">) {
  return (
    <>
      <WorksTitle />
      <Suspense fallback={<SubNav items={worksNav} current="" />}>
        <CategoryList params={params} />
      </Suspense>
    </>
  );
}

async function CategoryList({ params }: Pick<PageProps<"/works/[category]">, "params">) {
  const cat = findCategory((await params).category);
  if (!cat) notFound();
  return <WorksList category={cat.slug} />;
}
