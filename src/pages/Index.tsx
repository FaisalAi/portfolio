import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Apply theme on mount
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <BackToTop />
    </div>
  );
};

export default Index;
