import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollReveal from "./ScrollReveal";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="appShell">
      <Header />
      <main className="shellMain">{children}</main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
