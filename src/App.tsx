import React, { useState } from 'react';
import { Key, CheckCircle2, ExternalLink, X, AlertCircle, Sparkles, Download } from 'lucide-react';
import { ListeningView } from './components/ListeningView';
import { TrackDetailView } from './components/TrackDetailView';
import { RecognitionService } from './services/recognitionService';
import { TrackMetadata } from './types/music';

export default function App() {
  const [currentTrack, setCurrentTrack] = useState<TrackMetadata | null>(null);
  const [apiKey, setApiKey] = useState<string>(() => localStorage.getItem('sonus_audd_key') || '');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempKey, setTempKey] = useState(apiKey);
  const [testResult, setTestResult] = useState<{ status: 'idle' | 'testing' | 'success' | 'error'; message: string }>({ status: 'idle', message: '' });

  const handleTestKey = async () => {
    setTestResult({ status: 'testing', message: 'Doğrulanıyor...' });
    const res = await RecognitionService.validateApiKey(tempKey);
    if (res.valid) {
      setTestResult({ status: 'success', message: res.message });
    } else {
      setTestResult({ status: 'error', message: res.message });
    }
  };

  const handleSaveKey = () => {
    setApiKey(tempKey.trim());
    localStorage.setItem('sonus_audd_key', tempKey.trim());
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen text-white flex flex-col font-sans selection:bg-purple-600 selection:text-white relative">
      {/* Arka Plan Canlı Neon Işımaları */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-10 left-1/3 w-80 h-80 bg-pink-500/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Üst Navigasyon Çubuğu */}
      <header className="border-b border-cyan-500/20 glass-panel sticky top-0 z-50 px-6 py-3.5 flex items-center justify-between shadow-2xl backdrop-blur-2xl">
        <div 
          className="flex items-center gap-3.5 cursor-pointer group" 
          onClick={() => setCurrentTrack(null)}
        >
          <div className="relative">
            <img 
              src="/icon-192.png" 
              alt="SonusID Logo" 
              className="w-11 h-11 object-contain drop-shadow-[0_0_12px_rgba(0,242,254,0.6)] group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-wider text-white">
                Sonus<span className="sonus-gradient-text font-black">ID</span>
              </span>
                           <a 
                href="https://github.com/Hakki-AI" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-cyan-200 transition-colors shadow-sm"
                title="Kurucu: Hakki-AI"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Hakki-AI</span>
              </a>
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold text-cyan-200/80">
              Müziğin Kimliğini, Notalarını ve Genetiğini Keşfet
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {apiKey ? (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-bold shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>AudD Canlı Bağlı</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/15 border border-yellow-500/40 text-yellow-300 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
              <span>API Bekleniyor</span>
            </div>
          )}

          <button
            onClick={() => { setTempKey(apiKey); setTestResult({ status: 'idle', message: '' }); setIsModalOpen(true); }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold sonus-gradient hover:sonus-gradient-hover text-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(127,0,255,0.4)]"
          >
            <Key className="w-3.5 h-3.5 text-white" />
            <span>{apiKey ? 'API Ayarları' : 'API Anahtarı Gir'}</span>
          </button>
        </div>
      </header>

      {/* Ana Gövde */}
      <main className="flex-1 relative z-10">
        {currentTrack ? (
          <TrackDetailView track={currentTrack} onBack={() => setCurrentTrack(null)} />
        ) : (
          <ListeningView 
            onTrackFound={(track) => setCurrentTrack(track)} 
            apiKey={apiKey}
            onOpenSettings={() => { setTempKey(apiKey); setIsModalOpen(true); }}
          />
        )}
      </main>

      {/* API Key Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="w-full max-w-md p-7 rounded-3xl glass-panel border border-cyan-500/30 space-y-5 relative shadow-[0_0_50px_rgba(0,242,254,0.3)]">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl sonus-gradient text-white shadow-[0_0_20px_rgba(0,242,254,0.5)]">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">AudD Müzik Tanıma Motoru</h3>
                <p className="text-xs text-gray-300">100 Milyon Şarkıyı Anında Eşleştirme Sistemi</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                AudD API Token
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tempKey}
                  onChange={(e) => setTempKey(e.target.value)}
                  placeholder="Örn: 9a8b7c6d5e4f..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-black/70 border border-cyan-500/30 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 font-mono shadow-inner"
                />
                <button
                  type="button"
                  onClick={handleTestKey}
                  className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-xs font-bold text-cyan-300 transition-colors shadow-sm"
                >
                  Test Et
                </button>
              </div>
            </div>

            {testResult.status !== 'idle' && (
              <div className={`p-3.5 rounded-xl text-xs flex items-center gap-2.5 ${
                testResult.status === 'testing' ? 'bg-blue-950/60 text-blue-300 border border-blue-500/30' :
                testResult.status === 'success' ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]' :
                'bg-red-950/60 text-red-300 border border-red-500/30'
              }`}>
                {testResult.status === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />}
                <span className="font-semibold">{testResult.message}</span>
              </div>
            )}

            <div className="text-xs text-gray-400 flex items-center justify-between pt-1">
              <span>Anahtarınız yok mu?</span>
              <a href="https://audd.io" target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 underline flex items-center gap-1 font-bold">
                audd.io'dan Ücretsiz Al <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={handleSaveKey}
                className="w-full py-3 rounded-xl sonus-gradient hover:sonus-gradient-hover text-sm font-black text-white shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all hover:scale-[1.02]"
              >
                Kaydet ve Uygulamayı Başlat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alt Bilgi */}
      <footer className="py-4 border-t border-cyan-500/15 glass-panel text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-2 relative z-10">
        <span className="font-bold text-white">SonusID PRO © 2026</span>
        <span className="hidden sm:inline">•</span>
        <span className="sonus-gradient-text font-bold">Müziğin Kimliğini, Notalarını ve Genetiğini Keşfet</span>
      </footer>
    </div>
  );
}
