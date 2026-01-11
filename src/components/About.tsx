import { personalInfo } from "../data/personalInfo";
import { education } from "../data/education";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-800 ${
        isVisible ? 'scroll-visible' : 'scroll-hidden'
      }`}
    >
      <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">關於我</h3>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {personalInfo.title}
          </h4>
          <p className="text-slate-400 leading-relaxed text-lg mb-6">
            {personalInfo.bio}
          </p>
          {personalInfo.location && (
            <p className="text-slate-500 text-sm">
              <span className="text-cyan-500">位置</span> {personalInfo.location}
            </p>
          )}
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden aspect-square">
          <img 
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="bg-slate-800 rounded-full p-3">
            <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <h4 className="text-2xl font-bold text-white">EDUCATION</h4>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12">
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
              <div className="absolute top-2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 hidden md:block"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-4 h-4 rounded-full bg-cyan-500 mb-6 relative z-10 ring-4 ring-slate-900"></div>
                    
                    <div className="space-y-3">
                      <div className="text-4xl md:text-5xl font-bold text-white/90">
                        {edu.year}
                      </div>
                      <div className="text-lg md:text-xl font-semibold text-slate-300">
                        {edu.school}
                      </div>
                      <div className="text-base text-slate-400">
                        {edu.department}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
