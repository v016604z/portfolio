import { useState } from "react";
import type { Project } from "../types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // 收集所有圖片（封面 + 額外圖片）
  const allImages = [
    ...(project.coverImage ? [project.coverImage] : []),
    ...(project.images || [])
  ];
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 max-w-6xl w-full rounded-3xl p-8 md:p-10 relative max-h-[90vh] overflow-y-auto animate-modal-appear">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition text-2xl z-10"
        >
          ×
        </button>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 左欄：媒體區 */}
          <div className="space-y-4">
            {/* 影片區域 */}
            {project.video && (
              <div className="rounded-2xl overflow-hidden">
                <video 
                  src={project.video}
                  controls
                  className="w-full"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* 圖片輪播區域 */}
            {allImages.length > 0 && (
              <div>
                {/* 主圖 */}
                <div className="mb-3 rounded-2xl overflow-hidden bg-slate-800 relative group h-[320px] flex items-center justify-center">
                  <img 
                    src={allImages[selectedImageIndex]}
                    alt={`${project.title} - ${selectedImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                  
                  {/* 左右箭頭 */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={() => setSelectedImageIndex((prev) => 
                          prev === 0 ? allImages.length - 1 : prev - 1
                        )}
                        className="absolute left-3 top-1/2 -translate-y-1/2 
                          bg-slate-950/80 hover:bg-cyan-500 text-white 
                          w-10 h-10 rounded-full flex items-center justify-center
                          opacity-0 group-hover:opacity-100 transition-all duration-300
                          hover:scale-110"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button
                        onClick={() => setSelectedImageIndex((prev) => 
                          prev === allImages.length - 1 ? 0 : prev + 1
                        )}
                        className="absolute right-3 top-1/2 -translate-y-1/2 
                          bg-slate-950/80 hover:bg-cyan-500 text-white 
                          w-10 h-10 rounded-full flex items-center justify-center
                          opacity-0 group-hover:opacity-100 transition-all duration-300
                          hover:scale-110"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      <div className="absolute bottom-3 right-3 bg-slate-950/80 text-white text-xs px-2 py-1 rounded-full">
                        {selectedImageIndex + 1} / {allImages.length}
                      </div>
                    </>
                  )}
                </div>
                
                {/* 縮圖列表 */}
                {allImages.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-slate-800">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`
                          flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden 
                          border-2 transition-all
                          ${selectedImageIndex === idx 
                            ? 'border-cyan-500 ring-2 ring-cyan-500/50 scale-105' 
                            : 'border-slate-700 hover:border-slate-600 hover:scale-105'
                          }
                        `}
                      >
                        <img 
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 右欄：內容區 */}
          <div className="flex flex-col justify-between space-y-5">
            <div className="space-y-5">
              {/* 痛點 */}
              <div>
                <h5 className="text-cyan-500 font-bold mb-2 text-sm uppercase">痛點解決</h5>
                <p className="text-slate-200 text-base leading-relaxed">{project.painPoint}</p>
              </div>

              {/* 解決方案 */}
              <div>
                <h5 className="text-slate-500 font-bold mb-2 text-sm uppercase">解決方案</h5>
                <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
              </div>

              {/* 成果 */}
              {project.impact && (
                <div>
                  <h5 className="text-slate-500 font-bold mb-2 text-sm uppercase">成果</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.impact}</p>
                </div>
              )}
            </div>

            <div className="space-y-5">
              {/* 技術標籤 */}
              <div>
                <h5 className="text-slate-500 font-bold mb-2 text-sm uppercase">技術棧</h5>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="border border-slate-700 px-2.5 py-1 rounded-lg text-slate-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 連結按鈕 */}
              <div className="flex gap-3 flex-wrap">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-slate-200 transition"
                  >
                    View on GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-white text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-white hover:text-black transition"
                  >
                    Live Demo
                  </a>
                )}
                {project.caseStudyUrl && (
                  <a 
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-slate-700 text-slate-300 px-5 py-2.5 rounded-full font-bold text-sm hover:border-cyan-500 hover:text-cyan-500 transition"
                  >
                    Case Study
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
