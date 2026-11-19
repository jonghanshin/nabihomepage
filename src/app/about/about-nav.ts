import { nav } from "@/lib/site";

export const aboutNav = nav.find((n) => n.href === "/about")!.children!;
