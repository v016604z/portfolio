import { skills } from "../data/skills";

export default function TechStack() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">Technical Stack</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map(skill => (
          <div key={skill.name} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex items-center justify-center hover:border-slate-600 transition-colors">
            <span className="text-slate-300 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}