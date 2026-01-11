export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl tracking-tighter flex items-center gap-2">
          <span className="text-cyan-500">＜</span>
          李柏達
          <span className="text-cyan-500">／＞</span>
        </h1>
        <div className="space-x-8 text-gray-400 text-sm font-medium">
          <button onClick={() => scrollToSection('home')} className="hover:text-white transition">首頁</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-white transition">作品展示</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-white transition">關於我</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-white transition">聯絡我</button>
        </div>
      </div>
    </nav>
  );
}