import Image from "next/image";
import Hero from "@/components/Hero"
import TitleCyan from "@/components/TitleCyan";
import Projects from "@/components/Projects";
import TitleWhite from "@/components/TitleWhite";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import { useRef } from "react";

export default function Home() {
  return (
    <html style={{ scrollBehavior: 'smooth' }}>
      <body>
        <div id="hero" className="bg-primary-content">
          <Hero />
          <div className="pt-20" id="projects">
            <TitleWhite text="Projects" />
            <Projects />
          </div>
          <div className="pt-20" id="experience">
            <TitleCyan text="Experience" />
            <Experience />
          </div>
          <div className="pt-20" id="education">
            <TitleWhite text="Education" />
            <Education />
          </div>
          <TitleCyan text="Further Interests" />
          <Interests />
          <div className="pt-20" id="contact">
            <TitleWhite text="Contact" />
            <Contact />
          </div>
        </div>
      </body>
    </html>
  );
}
