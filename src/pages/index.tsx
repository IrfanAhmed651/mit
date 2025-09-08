import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/sections/About";
import { Services } from "@/sections/Services";
import { Portfolio } from "@/sections/Portfolio";
import { Contact } from "@/sections/Contact";
import BackToTop from "@/components/ui/backToTop";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <BackToTop />
    </Layout>
  );
}
