import React from 'react';

interface AudioVisualizerProps {
  analyserNode: AnalyserNode | null;
  isListening: boolean;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ analyserNode, isListening }) => {
  // Simgeye tam uyumlu: Ortadan iki yana simetrik 28 dikey çubuk
  // Mavi (#00F2FE) ve Mor (#7F00FF) renk geçişi
  const bars = Array.from({ length: 28 });

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="flex items-center justify-center gap-1.5 h-44 w-full px-6">
        {bars.map((_, i) => {
          // Ortaya yaklaştıkça daha uzun olan çubuk yapısı (Logodaki gibi)
          const distFromCenter = Math.abs(i - 13.5) / 14;
          const baseHeight = Math.max(12, Math.round((1 - distFromCenter * 0.75) * 110));
          
          return (
            <div
              key={i}
              className={`w-2 rounded-full transition-all duration-150 ${
                isListening
                  ? 'bg-gradient-to-t from-[#7F00FF] via-[#00A3FF] to-[#00F2FE] shadow-[0_0_12px_rgba(0,242,254,0.6)] animate-pulse'
                  : 'bg-gradient-to-t from-purple-900/40 to-cyan-500/30'
              }`}
              style={{
                height: isListening 
                  ? `${Math.max(16, baseHeight * (0.4 + Math.sin(i * 0.8 + Date.now() * 0.005) * 0.45))}px`
                  : `${baseHeight * 0.35}px`,
                animationDelay: `${i * 45}ms`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
