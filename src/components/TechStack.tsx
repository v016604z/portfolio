import { skills } from "../data/skills";
import { projects } from "../data/projects";

interface TechStackProps {
  selectedSkill: string | null;
  onSkillClick: (skillName: string) => void;
}

export default function TechStack({ selectedSkill, onSkillClick }: TechStackProps) {
  // 計算每個技能使用的專案數量
  const getProjectCount = (skillName: string) => {
    return projects.filter(project => project.tags.includes(skillName)).length;
  };

  // 按分類分組技能
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryColors = {
    "Frontend": "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 hover:border-cyan-500",
    "Backend": "from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-500",
    "AI & Tools": "from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-500"
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">Technical Stack</h3>
      <p className="text-slate-400 text-base mb-8">點擊技能查看相關專案</p>
      
      <div className="space-y-8">
        {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
          <div 
            key={category}
            className="opacity-0 animate-slide-left"
            style={{ animationDelay: `${0.6 + index * 0.15}s` }}
          >
            <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">
              {category}
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {categorySkills.map(skill => {
                const projectCount = getProjectCount(skill.name);
                const isSelected = selectedSkill === skill.name;
                const colorClass = categoryColors[category as keyof typeof categoryColors] || categoryColors["AI & Tools"];
                
                return (
                  <button
                    key={skill.name}
                    onClick={() => onSkillClick(skill.name)}
                    disabled={projectCount === 0}
                    className={`
                      relative group bg-gradient-to-br border rounded-2xl p-4 
                      transition-all duration-300 text-left
                      ${projectCount > 0 ? 'cursor-pointer hover:scale-105 hover:shadow-lg' : 'cursor-not-allowed opacity-50'}
                      ${isSelected 
                        ? 'ring-2 ring-cyan-500 shadow-lg shadow-cyan-500/20 scale-105' 
                        : colorClass
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${
                        isSelected ? 'text-cyan-400' : 'text-slate-300'
                      }`}>
                        {skill.name}
                      </span>
                      {projectCount > 0 && (
                        <span className={`
                          text-[10px] px-1.5 py-0.5 rounded-full font-bold
                          ${isSelected 
                            ? 'bg-cyan-500 text-slate-950' 
                            : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
                          }
                        `}>
                          {projectCount}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}