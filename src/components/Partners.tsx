import { partners } from "../data/partners";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Partners() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="partners" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-20 px-6 max-w-6xl mx-auto transition-all duration-800 ${
        isVisible ? 'scroll-visible' : 'scroll-hidden'
      }`}
    >
      <div className="text-center mb-12">
        <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">合作夥伴</h3>
        <p className="text-slate-400 text-lg">信任我的專業團隊與機構</p>
      </div>
      
      {/* 跑馬燈容器 */}
      <div className="relative overflow-hidden">
        {/* 左側漸變遮罩 */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        {/* 右側漸變遮罩 */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />
        
        {/* 跑馬燈軌道 - 使用三組確保無縫 */}
        <div className="flex gap-0">
          <div className="flex animate-marquee gap-0">
            {/* 第一組 */}
            {partners.concat(partners).concat(partners).map((partner, idx) => (
              <div
                key={`partner-${idx}`}
                className="group flex-shrink-0 mx-6 w-[300px]"
              >
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800
                  border border-slate-800 rounded-3xl p-8 h-[250px]
                  hover:border-cyan-500/50 transition-all duration-500
                  hover:shadow-2xl hover:shadow-cyan-500/20
                  hover:-translate-y-2 hover:scale-105"
                >
                  {/* 發光效果背景 */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 
                    group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
                  
                  {/* 內容 */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    {partner.logo && (
                      <div className="mb-6 h-24 flex items-center justify-center 
                        transition-all duration-500 group-hover:scale-110">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-h-full max-w-full object-contain filter brightness-90 
                            group-hover:brightness-110 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]
                            transition-all duration-500"
                        />
                      </div>
                    )}
                    <h4 className="text-xl font-bold text-white mb-2 text-center
                      group-hover:text-cyan-400 transition-colors duration-300">
                      {partner.name}
                    </h4>
                    {partner.description && (
                      <p className="text-slate-400 text-sm text-center
                        group-hover:text-slate-300 transition-colors duration-300">
                        {partner.description}
                      </p>
                    )}
                  </div>

                  {/* 裝飾性光點 */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-cyan-500/0 
                    group-hover:bg-cyan-500 transition-all duration-500 
                    group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
