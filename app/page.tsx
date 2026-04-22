import Hero from "@/components/Hero";
import Struggle from "@/components/Struggle";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/layouts/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Struggle />
      <Solution />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
