import type { Project } from "../types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 max-w-4xl w-full rounded-3xl p-10 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition text-2xl"
        >
          ×
        </button>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h2>

        {/* 媒體區域 */}
        {project.video ? (
          <div className="mb-8 rounded-2xl overflow-hidden">
            <video 
              src={project.video}
              controls
              className="w-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ) : project.coverImage ? (
          <div className="mb-8 rounded-2xl overflow-hidden">
            <img 
              src={project.coverImage}
              alt={project.title}
              className="w-full"
            />
          </div>
        ) : null}

        {/* 額外圖片 */}
        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-8">
            {project.images.map((img, idx) => (
              <img 
                key={idx}
                src={img}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="rounded-lg w-full"
              />
            ))}
          </div>
        )}

        {/* 痛點 */}
        <div className="mb-8">
          <h5 className="text-cyan-500 font-bold mb-2 text-sm uppercase">痛點解決</h5>
          <p className="text-slate-200 text-lg">{project.painPoint}</p>
        </div>

        {/* 解決方案 */}
        <div className="mb-8">
          <h5 className="text-slate-500 font-bold mb-2 text-sm uppercase">解決方案</h5>
          <p className="text-slate-400 leading-relaxed">{project.solution}</p>
        </div>

        {/* 成果 */}
        {project.impact && (
          <div className="mb-8">
            <h5 className="text-slate-500 font-bold mb-2 text-sm uppercase">成果</h5>
            <p className="text-slate-400 leading-relaxed">{project.impact}</p>
          </div>
        )}

        {/* 技術標籤 */}
        <div className="mb-8">
          <h5 className="text-slate-500 font-bold mb-2 text-sm uppercase">技術棧</h5>
          <div className="flex gap-2 flex-wrap">
            {project.tags.map(tag => (
              <span 
                key={tag}
                className="border border-slate-700 px-3 py-1.5 rounded-lg text-slate-300 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 連結按鈕 */}
        <div className="flex gap-4 flex-wrap">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-slate-200 transition"
            >
              View on GitHub
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition"
            >
              Live Demo
            </a>
          )}
          {project.caseStudyUrl && (
            <a 
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-slate-700 text-slate-300 px-6 py-3 rounded-full font-bold hover:border-cyan-500 hover:text-cyan-500 transition"
            >
              Case Study
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
