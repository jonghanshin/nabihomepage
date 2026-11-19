import type { Metadata } from "next";

import { WorksList, WorksTitle } from "./works-view";

export const metadata: Metadata = { title: "Works" };

export default function WorksPage() {
  return (
    <>
      <WorksTitle />
      <WorksList />
    </>
  );
}
