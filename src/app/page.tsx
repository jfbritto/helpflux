import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import CommonGround from "@/components/CommonGround";
import CustomProjects from "@/components/CustomProjects";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <CommonGround />
        <CustomProjects />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
