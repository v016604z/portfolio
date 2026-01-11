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
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import type { Project } from "./types";
import { projects } from "./data/projects";

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill(prev => prev === skillName ? null : skillName);
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <TechStack 
        selectedSkill={selectedSkill}
        onSkillClick={handleSkillClick}
      />

      {/* 專案展示區 */}
      <section 
        id="projects" 
        ref={projectsRef as React.RefObject<HTMLElement>}
        className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-800 ${
          projectsVisible ? 'scroll-visible' : 'scroll-hidden'
        }`}
      >
        <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.filter(p => p.featured).map(project => {
            const isRelevant = !selectedSkill || project.tags.includes(selectedSkill);
            return (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setActiveProject(project)}
                isRelevant={isRelevant}
              />
            );
          })}
        </div>
      </section>

      <AllProjects selectedSkill={selectedSkill} />
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