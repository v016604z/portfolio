export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-xl tracking-tighter">PORTFOLIO</h1>
        <div className="space-x-8 text-gray-400 text-sm font-medium">
          <a href="#home" className="hover:text-white transition">首頁</a>
          <a href="#projects" className="hover:text-white transition">作品展示</a>
          <a href="#about" className="hover:text-white transition">關於我</a>
          <a href="#contact" className="hover:text-white transition">聯絡我</a>
        </div>
      </div>
    </nav>
  );
}