import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AllProjects from "./components/AllProjects";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import BackgroundAnimation from "./components/BackgroundAnimation";
import type { Project } from "./types";
import { projects } from "./data/projects";

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <TechStack />

      {/* 專案展示區 */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.filter(p => p.featured).map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      </section>

      <AllProjects />
      <About />
      <Contact />

      {/* 詳情彈窗 (Modal) */}
      {activeProject && (
        <ProjectModal 
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      <Footer />
    </div>
  );
}