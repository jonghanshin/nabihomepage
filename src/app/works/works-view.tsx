import { nav } from "@/lib/site";
import { worksIn, type CategorySlug } from "@/lib/works";
import { PageTitle, SubNav, WorkCard } from "../ui";

export const worksNav = nav.find((n) => n.href === "/works")!.children!;

export function WorksTitle() {
  return <PageTitle eyebrow="PORTFOLIO" title="WORKS" desc="디자인을 완성하는 인테리어 & 스타일링" />;
}

export function WorksList({ category }: { category?: CategorySlug }) {
  const list = worksIn(category);
  return (
    <>
      <SubNav items={worksNav} current={category ? `/works/${category}` : "/works"} />
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        {list.length > 0 ? (
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((w) => (
              <WorkCard key={w.id} work={w} />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-muted">등록된 프로젝트가 아직 없습니다.</p>
        )}
      </section>
    </>
  );
}
