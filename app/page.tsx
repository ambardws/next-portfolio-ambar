import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "Ambar Dwi Saputra",
  description: "Learn and example project next js",
};

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <Footer />
      </main>
    </>
  );
}
