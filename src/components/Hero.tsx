import { personalInfo } from "../data/personalInfo";

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 text-center">
      <h2 className="text-cyan-500 font-mono text-sm tracking-widest mb-4 uppercase">
        {personalInfo.availability ? "Available for new opportunities" : "Currently unavailable"}
      </h2>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        你好，我是 <span className="text-slate-400">{personalInfo.name}</span>
      </h1>
      <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
        {personalInfo.tagline}
      </p>
    </section>
  );
}