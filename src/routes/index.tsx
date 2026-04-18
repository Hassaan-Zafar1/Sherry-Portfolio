import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { MatrixRain } from "@/components/MatrixRain";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Muhammad Abdullah — SOC Analyst & Cybersecurity Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Abdullah — Cybersecurity & SOC Analyst. CEH-certified. Wazuh SIEM, threat detection, FIM, incident response. CS @ NED University.",
      },
      { property: "og:title", content: "Muhammad Abdullah — SOC Analyst" },
      {
        property: "og:description",
        content:
          "CEH-certified cybersecurity student specializing in SOC operations, Wazuh SIEM, threat detection and incident response.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <MatrixRain />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
