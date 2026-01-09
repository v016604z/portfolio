import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-blue-500/30">
      <Navbar />
      
      {/* 英雄區 (Hero Section) */}
      <section id="home" className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        {/* 背景裝飾光暈 */}
        <div className="absolute top-0 -z-10 h-full w-full bg-black">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-blue-500/10 opacity-50 blur-[80px]"></div>
        </div>

        <h2 className="text-blue-400 font-mono text-sm mb-4 tracking-widest uppercase">
          Welcome to my digital space
        </h2>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          你好，我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">你的名字</span>
        </h1>
        
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
          我是一名熱愛網頁開發的工程師。這裡記錄了我的學習歷程與技術作品，
          致力於使用最新的技術打造流暢且美觀的使用者體驗。
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
            看我的作品集
          </button>
          <button className="border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/5 transition-all">
            下載 CV
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;