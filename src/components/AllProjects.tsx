import { useState } from "react";
import type { Project } from "../types";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function AllProjects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const nonFeaturedProjects = projects.filter(p => !p.featured);

  if (nonFeaturedProjects.length === 0) {
    return null;
  }

  return (
    <>
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">
          所有專案
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nonFeaturedProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
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
