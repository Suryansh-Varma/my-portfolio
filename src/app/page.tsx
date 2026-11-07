import Header from "@/components/Header";
import ParticleBackground from "@/components/ParticleBackground";
import CinematicCursor from "@/components/CinematicCursor";
import CinematicScrollProvider from "@/components/CinematicScrollProvider";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import WaveDivider from "@/components/WaveDivider";
import LogPoseButton from "@/components/LogPoseButton";
import ZoroSlashEffect from "@/components/ZoroSlashEffect";

export default function Home() {
  return (
    <>
      <CinematicCursor />
      <Header />
      <ParticleBackground />
      <ZoroSlashEffect />

      <CinematicScrollProvider>
        <main className="relative min-h-screen bg-[var(--background)]">
          {/* Hero Section */}
          <div className="relative">
            <Hero />
            <WaveDivider position="bottom" waveColor="var(--background-secondary)" />
          </div>

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <div className="relative">
            <WaveDivider position="top" waveColor="var(--background-secondary)" />
            <Projects />
          </div>

          {/* Education Section */}
          <div className="relative">
            <Education />
            <WaveDivider position="bottom" waveColor="var(--background-secondary)" />
          </div>

          {/* Certifications Section */}
          <Certifications />

          {/* Contact Section */}
          <Contact />
        </main>
      </CinematicScrollProvider>

      <LogPoseButton />
    </>
  );
}
