import React, { useState, useRef, useEffect } from 'react';
import { 
  Mic, Radio, Sparkles, AlertCircle, Volume2, Settings2, Play, Pause, 
  Search, Clock, ChevronRight
} from 'lucide-react';
import { AudioVisualizer } from './AudioVisualizer';
import { RecognitionService } from '../services/recognitionService';
import { TrackMetadata } from '../types/music';

interface ListeningViewProps {
  onTrackFound: (track: TrackMetadata) => void;
  apiKey?: string;
  onOpenSettings: () => void;
}

export const ListeningView: React.FC<ListeningViewProps> = ({ onTrackFound, apiKey, onOpenSettings }) => {
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState('Ortamdaki şarkıyı dinlemek için dokunun');
  const [countdown, setCountdown] = useState(10);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [availableDevices, setAvailableDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>(() => {
    return localStorage.getItem('sonus_saved_mic_id') || '';
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastAudioUrl, setLastAudioUrl] = useState<string | null>(null);
  const [isPlayingRecorded, setIsPlayingRecorded] = useState(false);
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);

  // Arama & Geçmiş Durumları
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<TrackMetadata[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('sonus_search_history') || '[]');
    } catch {
      return ['The Weeknd', 'Barış Manço', 'Queen', 'Antidepresan'];
    }
  });

  const isRecordingRef = useRef(false);
  const animFrameRef = useRef<number | null>(null);
  const recordedAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    navigator.mediaDevices?.enumerateDevices().then(devices => {
      const audioInputs = devices.filter(d => d.kind === 'audioinput');
      setAvailableDevices(audioInputs);
      const savedMic = localStorage.getItem('sonus_saved_mic_id');
      if (savedMic && audioInputs.some(d => d.deviceId === savedMic)) {
        setSelectedDeviceId(savedMic);
      } else if (audioInputs.length > 0 && !selectedDeviceId) {
        setSelectedDeviceId(audioInputs[0].deviceId);
      }
    }).catch(console.warn);
  }, []);

  const handleDeviceChange = (deviceId: string) => {
    setSelectedDeviceId(deviceId);
    localStorage.setItem('sonus_saved_mic_id', deviceId);
  };

  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (term: string) => {
    setSearchQuery(term);
    if (!term.trim()) {
      setSearchResults([]);
      return;
    }
    setIsSearching(true);
    try {
      const results = await RecognitionService.searchCatalog(term);
      setSearchResults(results);
    } catch {
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const term = searchQuery.trim();
    const updated = [term, ...searchHistory.filter(h => h.toLowerCase() !== term.toLowerCase())].slice(0, 8);
    setSearchHistory(updated);
    localStorage.setItem('sonus_search_history', JSON.stringify(updated));
    handleSearch(term);
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('sonus_search_history');
  };

  const startListening = async () => {
    setErrorMessage(null);
    setLastAudioUrl(null);

    if (!apiKey || apiKey.trim() === '') {
      setErrorMessage('Lütfen önce sağ üstteki "API Anahtarı Gir" butonundan AudD anahtarınızı kaydedin!');
      return;
    }

    if (apiKey.trim().toLowerCase() === 'test') {
      setErrorMessage('AudD "test" anahtarı canlı mikrofonu desteklemez! Lütfen audd.io sitesinden ücretsiz kendi anahtarınızı alın.');
      return;
    }

    setIsListening(true);
    isRecordingRef.current = true;
    setStatus('Akustik parmak izi kaydediliyor... (10 saniye)');
    setCountdown(10);

    try {
      const constraints: MediaStreamConstraints = {
        audio: {
          deviceId: selectedDeviceId ? { exact: selectedDeviceId } : undefined,
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: true
        }
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      if (audioCtx.state === 'suspended') await audioCtx.resume();

      const source = audioCtx.createMediaStreamSource(stream);

      // Sadece VU meter (görsel) için analyser - kayıt etkilenmesin
      const analyserNode = audioCtx.createAnalyser();
      analyserNode.fftSize = 256;
      analyserNode.smoothingTimeConstant = 0.4;
      source.connect(analyserNode);

      setAnalyser(analyserNode);

      const dataArray = new Uint8Array(analyserNode.frequencyBinCount);
      const updateVolume = () => {
        if (!isRecordingRef.current) return;
        analyserNode.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < dataArray.length; i++) sum += dataArray[i];
        const avg = sum / dataArray.length;
        setVolumeLevel(Math.min(100, Math.round((avg / 35) * 100)));
        animFrameRef.current = requestAnimationFrame(updateVolume);
      };
      updateVolume();

      // AudD için ham mikrofon stream'ini kayıt et (işlenmemiş ses = daha iyi parmak izi)
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : MediaRecorder.isTypeSupported('audio/webm')
          ? 'audio/webm'
          : MediaRecorder.isTypeSupported('audio/mp4')
            ? 'audio/mp4'
            : '';

      const recorderOptions = mimeType ? { mimeType } : {};
      const mediaRecorder = new MediaRecorder(stream, recorderOptions);
      const audioChunks: Blob[] = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) audioChunks.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        isRecordingRef.current = false;
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

        const actualMime = mimeType || 'audio/webm';
        const audioBlob = new Blob(audioChunks, { type: actualMime });
        const sizeKB = Math.round(audioBlob.size / 1024);

        if (audioBlob.size < 1000) {
          setLastAudioUrl(null);
          stream.getTracks().forEach(t => t.stop());
          audioCtx.close();
          setIsListening(false);
          setVolumeLevel(0);
          setErrorMessage(`Ses kaydı boş geldi (${sizeKB} KB). Mikrofon erişiminizi kontrol edin.`);
          setStatus('Tekrar denemek için butona basın.');
          return;
        }

        setLastAudioUrl(URL.createObjectURL(audioBlob));
        stream.getTracks().forEach(t => t.stop());
        audioCtx.close();

        setStatus(`Ses kaydı analiz ediliyor (${sizeKB} KB)...`);

        const res = await RecognitionService.identifyAudioBlob(audioBlob, apiKey);
        setIsListening(false);
        setVolumeLevel(0);

        if (res.success && res.track) {
          onTrackFound(res.track);
        } else {
          setErrorMessage(res.error || 'Şarkı tespit edilemedi.');
          setStatus('Tekrar denemek için butona basın.');
        }
      };

      // timeslice parametresi vermeden başlatıyoruz (böylece tek parça sağlam WebM başlığı üretir)
      mediaRecorder.start();

      let timer = 8;
      const interval = setInterval(() => {
        timer -= 1;
        setCountdown(timer);
        if (timer <= 0) {
          clearInterval(interval);
          if (mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
          }
        }
      }, 1000);

    } catch (err: any) {
      isRecordingRef.current = false;
      setIsListening(false);
      setErrorMessage(`Mikrofon Hatası: ${err.message || 'Erişim reddedildi'}`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      
      {/* 1. ÜST ARAMA VE GEÇMİŞ BÖLÜMÜ */}
      <section className="glass-panel p-6 rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_rgba(0,242,254,0.15)] relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-4">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <Search className="w-5 h-5 text-cyan-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Şarkı, sanatçı, albüm veya tür ara (Örn: The Weeknd, Barış Manço, Rock)..."
              className="w-full pl-12 pr-28 py-3.5 bg-black/60 border border-cyan-500/30 rounded-2xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSearchResults([]); }}
                className="absolute right-24 text-xs font-semibold text-gray-400 hover:text-white px-2 py-1"
              >
                Temizle
              </button>
            )}
            <button
              type="submit"
              className="absolute right-2 px-5 py-2.5 sonus-gradient hover:sonus-gradient-hover text-white text-xs font-black rounded-xl transition-all shadow-[0_0_15px_rgba(0,242,254,0.5)]"
            >
              Ara
            </button>
          </form>

          {/* Arama Geçmişi */}
          {searchHistory.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="flex items-center gap-1 text-cyan-300 font-bold">
                <Clock className="w-3.5 h-3.5 text-cyan-400" /> Geçmiş:
              </span>
              {searchHistory.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSearch(item)}
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-gray-200 hover:text-cyan-300 transition-all text-xs font-semibold shadow-sm"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={clearHistory}
                className="text-gray-400 hover:text-pink-400 text-[11px] underline ml-auto font-semibold"
              >
                Geçmişi Temizle
              </button>
            </div>
          )}

          {/* Arama Durumu ve Sonuçları */}
          {isSearching && (
            <div className="flex items-center justify-center gap-2 py-4 text-xs font-bold text-cyan-400 animate-pulse">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Dünya müzik kütüphanesinde aranıyor...</span>
            </div>
          )}

          {searchResults.length > 0 && (
            <div className="mt-4 p-4 rounded-2xl bg-[#0e0c1f] border border-cyan-400/50 shadow-2xl space-y-2 animate-fadeIn">
              <div className="text-xs font-black text-cyan-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Bulunan Eserler ({searchResults.length})</span>
                <span className="text-[10px] text-gray-400">Detay ve Notaları İncelemek İçin Tıklayın</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
                {searchResults.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => onTrackFound(t)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-400/40 cursor-pointer transition-all hover:scale-[1.02] shadow-sm"
                  >
                    <img src={t.coverArtUrl} alt={t.title} className="w-12 h-12 rounded-lg object-cover shadow-md" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-white truncate">{t.title}</p>
                      <p className="text-[11px] text-gray-300 truncate">{t.artist}</p>
                      <span className="inline-block mt-0.5 text-[10px] text-cyan-400 font-mono font-bold">{t.atmosphere.bpm} BPM • {t.atmosphere.genre}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. MERKEZ CANLI DİNLEME VE SES MOTORU */}
      <section className="flex flex-col items-center justify-center text-center max-w-xl mx-auto py-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full sonus-gradient text-white text-xs font-black mb-4 shadow-[0_0_20px_rgba(0,242,254,0.5)]">
          <Sparkles className="w-3.5 h-3.5 text-white animate-spin" />
          <span>UZAK SES GÜÇLENDİRİCİ & CANLI KÜNYE MOTORU</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black tracking-tight sonus-gradient-text">
          SonusID
        </h1>
        <p className="mt-2 text-xs md:text-sm text-cyan-100/80 max-w-md font-medium">
          Odadaki müziği uzaktan dinletin; tür, BPM, akorlar ve şarkı notalarına anında ulaşın.
        </p>

        {/* Mikrofon Seçimi */}
        {availableDevices.length > 1 && (
          <div className="flex items-center gap-2 mt-4 p-3 rounded-2xl glass-panel text-xs text-gray-200 max-w-md w-full border border-cyan-500/20 shadow-md">
            <Settings2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span className="text-[11px] text-cyan-300 font-bold">Giriş Kaynağı:</span>
            <select
              value={selectedDeviceId}
              onChange={(e) => handleDeviceChange(e.target.value)}
              className="flex-1 bg-transparent border-0 text-white text-xs focus:outline-none cursor-pointer font-medium"
            >
              {availableDevices.map(d => (
                <option key={d.deviceId} value={d.deviceId} className="bg-[#121028] text-white">
                  {d.label || `Mikrofon (${d.deviceId.slice(0, 5)}...)`}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Hata Bildirimi */}
        {errorMessage && (
          <div className="w-full mt-4 p-4 rounded-2xl bg-red-950/60 border border-red-500/40 text-left space-y-2 animate-fadeIn shadow-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div className="flex-1 text-xs text-red-200">
                <p className="font-bold mb-1">Durum Bilgisi:</p>
                <p className="leading-relaxed">{errorMessage}</p>
              </div>
            </div>
            {lastAudioUrl && (
              <div className="pt-2 border-t border-red-500/30 flex items-center justify-between text-xs">
                <span className="text-gray-300">Kaydedilen sesi dinle:</span>
                <button
                  onClick={() => {
                    if (!recordedAudioRef.current) return;
                    if (isPlayingRecorded) {
                      recordedAudioRef.current.pause();
                      setIsPlayingRecorded(false);
                    } else {
                      recordedAudioRef.current.play();
                      setIsPlayingRecorded(true);
                    }
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-cyan-300 flex items-center gap-1.5 transition-colors font-bold"
                >
                  {isPlayingRecorded ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isPlayingRecorded ? 'Durdur' : 'Kaydı Oynat'}</span>
                </button>
                <audio ref={recordedAudioRef} src={lastAudioUrl} onEnded={() => setIsPlayingRecorded(false)} className="hidden" />
              </div>
            )}
          </div>
        )}

        {/* Merkez Dinleme Butonu & Visualizer */}
        <div className="relative flex items-center justify-center w-80 h-80 my-4">
          <AudioVisualizer analyserNode={analyser} isListening={isListening} />
          
          <button
            onClick={startListening}
            disabled={isListening}
            className={`relative z-20 flex flex-col items-center justify-center w-40 h-40 rounded-full transition-all duration-500 shadow-2xl ${
              isListening
                ? 'sonus-gradient scale-110 shadow-[0_0_70px_rgba(0,242,254,0.8),0_0_120px_rgba(225,0,255,0.6)] animate-pulse'
                : 'bg-gradient-to-br from-[#1a1438] via-[#0d0924] to-[#04040d] border-2 border-cyan-400/50 hover:border-cyan-300 hover:scale-105 shadow-[0_0_40px_rgba(0,242,254,0.3),0_0_80px_rgba(127,0,255,0.3)]'
            }`}
          >
            {isListening ? (
              <div className="flex flex-col items-center">
                <Radio className="w-12 h-12 text-white animate-pulse" />
                <span className="text-base font-black text-white mt-1">{countdown}s</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <Mic className="w-14 h-14 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,242,254,0.8)]" />
              </div>
            )}
            <span className="mt-1.5 text-xs font-black uppercase tracking-wider text-white">
              {isListening ? 'Dinleniyor...' : 'Dinle'}
            </span>
          </button>
        </div>

        {/* Giriş Sinyal Seviyesi (VU Meter) */}
        {isListening && (
          <div className="w-72 mt-2 space-y-2 animate-fadeIn">
            <div className="flex justify-between text-xs">
              <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" /> Mikrofon Kazancı (x6.5):
              </span>
              <span className="font-mono font-black text-cyan-300">%{volumeLevel}</span>
            </div>
            <div className="w-full bg-black/60 h-3 rounded-full overflow-hidden p-0.5 border border-cyan-500/40 shadow-inner">
              <div
                className="h-full sonus-gradient transition-all duration-75 rounded-full shadow-[0_0_15px_rgba(0,242,254,0.8)]"
                style={{ width: `${Math.max(6, volumeLevel)}%` }}
              />
            </div>
          </div>
        )}

        <p className="mt-3 text-sm font-bold text-gray-200 flex items-center gap-2">
          {isListening && <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />}
          {status}
        </p>
      </section>

    </div>
  );
};
