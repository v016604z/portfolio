import { personalInfo } from "../data/personalInfo";

export default function About() {
  return (
    <section 
      id="about" 
      className="py-20 px-6 max-w-6xl mx-auto opacity-0 animate-fade-in"
      style={{ animationDelay: '0.2s' }}
    >
      <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">關於我</h3>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {personalInfo.title}
          </h4>
          <p className="text-slate-400 leading-relaxed text-lg mb-6">
            {personalInfo.bio}
          </p>
          {personalInfo.location && (
            <p className="text-slate-500 text-sm">
              <span className="text-cyan-500">📍</span> {personalInfo.location}
            </p>
          )}
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 aspect-square flex items-center justify-center">
          <p className="text-slate-600 text-center">個人照片區域</p>
        </div>
      </div>
    </section>
  );
}
