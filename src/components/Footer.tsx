import { personalInfo } from "../data/personalInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            {personalInfo.social.github && (
              <a 
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-500 transition text-sm"
              >
                GitHub
              </a>
            )}
            {personalInfo.social.linkedin && (
              <a 
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-500 transition text-sm"
              >
                LinkedIn
              </a>
            )}
            {personalInfo.social.twitter && (
              <a 
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-500 transition text-sm"
              >
                Twitter
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
