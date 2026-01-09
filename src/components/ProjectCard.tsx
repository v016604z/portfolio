import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all"
    >
      {project.coverImage ? (
        <img 
          src={project.coverImage} 
          alt={project.title}
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div className="aspect-video bg-slate-800 flex items-center justify-center">
          <span className="text-slate-600">專案封面</span>
        </div>
      )}
      <div className="p-8">
        <p className="text-cyan-500 text-xs font-mono mb-2">
          Solved: {project.painPoint.substring(0, 40)}...
        </p>
        <h4 className="text-2xl font-bold mb-4 group-hover:text-cyan-500 transition">
          {project.title}
        </h4>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="text-[10px] border border-slate-700 px-2 py-1 rounded text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
