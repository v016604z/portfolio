export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* 不規則圖形 1 */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-blob"
        style={{
          background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
          top: '10%',
          left: '10%',
          animationDelay: '0s'
        }}
      />
      
      {/* 不規則圖形 2 */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-blob"
        style={{
          background: 'linear-gradient(to right, #8b5cf6, #06b6d4)',
          top: '50%',
          right: '10%',
          animationDelay: '2s'
        }}
      />
      
      {/* 不規則圖形 3 */}
      <div 
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-blob"
        style={{
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          bottom: '10%',
          left: '30%',
          animationDelay: '4s'
        }}
      />

      {/* 網格背景 (可選) */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
}
