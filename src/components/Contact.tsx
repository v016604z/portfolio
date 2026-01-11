import { personalInfo } from "../data/personalInfo";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="contact" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-6 max-w-4xl mx-auto text-center transition-all duration-800 ${
        isVisible ? 'scroll-visible' : 'scroll-hidden'
      }`}
    >
      <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">聯絡我</h3>
      <h4 className="text-4xl md:text-5xl font-bold text-white mb-6">
        讓我們一起合作
      </h4>
      <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
        對我的作品有興趣？歡迎透過 Email 聯繫，或在社群平台上找到我。
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
        <a 
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center justify-center min-w-[160px] min-h-[44px] bg-cyan-500 text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-cyan-400 transition"
        >
          發送郵件
        </a>
        {personalInfo.resumeUrl && (
          <a 
            href={`${import.meta.env.BASE_URL}${personalInfo.resumeUrl}`}
            download
            className="inline-flex items-center justify-center min-w-[160px] min-h-[44px] border border-slate-700 text-slate-300 px-8 py-3 rounded-full font-bold hover:border-cyan-500 hover:text-cyan-500 transition"
          >
            下載履歷
          </a>
        )}
      </div>

      <div className="flex gap-6 justify-center">
        {personalInfo.social.github && (
          <a 
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-500 transition"
          >
            GitHub
          </a>
        )}
        {personalInfo.social.linkedin && (
          <a 
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-500 transition"
          >
            LinkedIn
          </a>
        )}
        {personalInfo.social.twitter && (
          <a 
            href={personalInfo.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-500 transition"
          >
            Twitter
          </a>
        )}
      </div>
    </section>
  );
}
