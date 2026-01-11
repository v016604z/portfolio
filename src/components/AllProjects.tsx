import { useState } from "react";
import type { Project } from "../types";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface AllProjectsProps {
  selectedSkill: string | null;
}

export default function AllProjects({ selectedSkill }: AllProjectsProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { ref, isVisible } = useScrollAnimation();
  const nonFeaturedProjects = projects.filter(p => !p.featured);

  if (nonFeaturedProjects.length === 0) {
    return null;
  }

  return (
    <>
      <section 
        ref={ref as React.RefObject<HTMLElement>}
        className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-800 ${
          isVisible ? 'scroll-visible' : 'scroll-hidden'
        }`}
      >
        <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">
          所有專案
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nonFeaturedProjects.map(project => {
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

      {activeProject && (
        <ProjectModal 
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
