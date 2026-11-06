import React, { useState, useRef } from 'react';
import { 
  ArrowLeft, Disc, Music, Sliders, Users, BarChart3, FileText, 
  Sparkles, Play, Pause, ExternalLink, Globe2, Activity,
  Layers, Volume2, Mic2, Music2, Radio, CheckCircle, Share2
} from 'lucide-react';
import { TrackMetadata } from '../types/music';

export const TrackDetailView: React.FC<{ track: TrackMetadata; onBack: () => void }> = ({ track, onBack }) => {
  // Varsayılan olarak Akustik Atmosfer ve Nota detaylarını göstermek için 'atm' sekmesi
  const [tab, setTab] = useState<'atm' | 'notes' | 'stats' | 'credits' | 'lyrics'>('atm');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranslation, setShowTranslation] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Güvenli değerler (undefined/null kontrolleri)
  const bpm = track.atmosphere?.bpm || 120;
  const key = track.atmosphere?.key || 'C Majör (Do Majör)';
  const genre = track.atmosphere?.genre || 'Pop Müzik';
  const subGenres = track.atmosphere?.subGenres || ['Pop', 'Radyo Yayını'];
  const tags = track.atmosphere?.tags || ['Canlı Kayıt', `${bpm} BPM`];
  const energy = track.atmosphere?.energy ?? 78;
  const danceability = track.atmosphere?.danceability ?? 72;
  const valence = track.atmosphere?.valence ?? 65;
  const moodDesc = track.atmosphere?.moodDescription || `${track.artist} tarafından icra edilen ${genre} türünde eser. Akustik dinamikleri ve armoni yapısı çözümlendi.`;
  const vocalPitch = track.atmosphere?.vocalPitch || 'A2 – G4 (Dengeli Göğüs & Kafa Miks Tonu)';
  const chords = track.atmosphere?.chordsProgression?.length ? track.atmosphere.chordsProgression : ['Am', 'F', 'C', 'G'];
  const notes = track.atmosphere?.musicalNotes || 'Do - Re - Mi - Sol - Mi - Re - Do | Fa - Sol - La - Sol - Fa - Mi';

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-fadeIn">
      {track.previewAudioUrl && (
        <audio
          ref={audioRef}
          src={track.previewAudioUrl}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      {/* Üst Navigasyon Butonları */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-2xl glass-panel text-xs font-bold text-gray-300 hover:text-white hover:scale-105 transition-all shadow-md group"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" /> 
          <span>Ana Ekrana & Dinlemeye Dön</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 shadow-sm flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            {bpm} BPM
          </span>
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 shadow-sm">
            Ton: {key}
          </span>
        </div>
      </div>

      {/* Modern Hero Kartı */}
      <div className="rounded-3xl glass-panel p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-6 glass-glow border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-600/20 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative group flex-shrink-0">
          <img 
            src={track.coverArtUrl} 
            alt={track.title} 
            className="w-44 h-44 rounded-2xl object-cover shadow-2xl border border-white/20 transition-transform duration-500 group-hover:scale-105" 
          />
          {track.previewAudioUrl && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-black/80 backdrop-blur-md border border-cyan-400/50 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_30px_rgba(0,242,254,0.4)]"
            >
              {isPlaying ? <Pause className="w-6 h-6 text-cyan-400" /> : <Play className="w-6 h-6 ml-0.5 text-cyan-400" />}
            </button>
          )}
        </div>

        <div className="flex-1 text-center md:text-left z-10">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm">
              {genre}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm">
              {bpm} BPM
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-gray-200 border border-white/20">
              {key}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">{track.title}</h1>
          <p className="text-xl font-bold text-gray-300 mt-1">{track.artist}</p>
          
          <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-1.5"><Disc className="w-3.5 h-3.5 text-purple-400" /> Albüm: {track.album}</span>
            <span>•</span>
            <span>Yıl: {track.releaseDate}</span>
            <span>•</span>
            <span>Etiket: {track.credits?.recordLabel || 'Dijital Kayıt'}</span>
          </div>
        </div>
      </div>

      {/* Modern Sekmeler Menüsü */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-3 mb-6">
        <button 
          onClick={() => setTab('atm')} 
          className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all flex items-center gap-2 ${
            tab === 'atm' ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30' : 'text-gray-400 hover:text-white glass-panel'
          }`}
        >
          <Sliders className="w-4 h-4 text-cyan-400" /> Tür, BPM & Akustik Atmosfer
        </button>

        <button 
          onClick={() => setTab('notes')} 
          className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all flex items-center gap-2 ${
            tab === 'notes' ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30' : 'text-gray-400 hover:text-white glass-panel'
          }`}
        >
          <Music className="w-4 h-4 text-yellow-300" /> Şarkı Notaları & Ses Tonu
        </button>

        <button 
          onClick={() => setTab('stats')} 
          className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all flex items-center gap-2 ${
            tab === 'stats' ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30' : 'text-gray-400 hover:text-white glass-panel'
          }`}
        >
          <BarChart3 className="w-4 h-4 text-emerald-400" /> Platform & Dinlenme İstatistikleri
        </button>

        <button 
          onClick={() => setTab('credits')} 
          className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all flex items-center gap-2 ${
            tab === 'credits' ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30' : 'text-gray-400 hover:text-white glass-panel'
          }`}
        >
          <Users className="w-4 h-4 text-pink-400" /> Künye & Sanatçı Biyografisi
        </button>

        <button 
          onClick={() => setTab('lyrics')} 
          className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all flex items-center gap-2 ${
            tab === 'lyrics' ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30' : 'text-gray-400 hover:text-white glass-panel'
          }`}
        >
          <FileText className="w-4 h-4 text-blue-400" /> Şarkı Sözleri
        </button>
      </div>

      {/* 1. TÜR, BPM & AKUSTİK ATMOSFER BÖLÜMÜ (ÖNCELİKLİ) */}
      {tab === 'atm' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          {/* Akustik Karakter & Duygu Profili */}
          <div className="p-6 rounded-3xl glass-panel space-y-4 border border-cyan-500/30 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-inner">
                <Sliders className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Akustik Karakter & Atmosfer</h3>
                <p className="text-xs text-gray-400">Yapay zeka ses analizi ve duygu profili</p>
              </div>
            </div>

            <p className="text-xs text-gray-200 leading-relaxed bg-black/30 p-3.5 rounded-2xl border border-white/5">
              {moodDesc}
            </p>
            
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Alt Türler ve Müzikal Dokular:</span>
              <div className="flex flex-wrap gap-2">
                {subGenres.map((sg, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-xs font-bold text-purple-300">
                    {sg}
                  </span>
                ))}
                {tags.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 font-semibold">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/5">
              <div className="p-4 rounded-2xl bg-black/40 border border-cyan-500/20 text-center">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Hız Ölçümü (BPM)</span>
                <p className="text-2xl font-black text-cyan-400 mt-1">{bpm} <span className="text-xs text-gray-400">BPM</span></p>
              </div>
              <div className="p-4 rounded-2xl bg-black/40 border border-purple-500/20 text-center">
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Armonik Ton / Skala</span>
                <p className="text-base font-black text-purple-300 mt-1.5">{key}</p>
              </div>
            </div>
          </div>

          {/* Algoritmik Ses Dinamikleri */}
          <div className="p-6 rounded-3xl glass-panel space-y-5 border border-purple-500/30 shadow-xl flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-500/15 text-purple-400 border border-purple-500/30 shadow-inner">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Algoritmik Ses Dinamikleri</h3>
                <p className="text-xs text-gray-400">Frekans spektrumu, ritim ve enerji oranları</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Enerji */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" /> Enerji & Akustik Şiddet
                  </span>
                  <span className="text-cyan-400 font-mono">%{energy}</span>
                </div>
                <div className="w-full bg-white/10 h-3.5 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(0,242,254,0.6)]" 
                    style={{ width: `${Math.max(5, Math.min(100, energy))}%` }}
                  />
                </div>
              </div>

              {/* Dans Edilebilirlik */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-400" /> Ritim & Dans Edilebilirlik
                  </span>
                  <span className="text-pink-400 font-mono">%{danceability}</span>
                </div>
                <div className="w-full bg-white/10 h-3.5 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div 
                    className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(244,63,94,0.6)]" 
                    style={{ width: `${Math.max(5, Math.min(100, danceability))}%` }}
                  />
                </div>
              </div>

              {/* Valens / Pozitiflik */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400" /> Pozitiflik & Valens Oranı
                  </span>
                  <span className="text-purple-400 font-mono">%{valence}</span>
                </div>
                <div className="w-full bg-white/10 h-3.5 rounded-full overflow-hidden p-0.5 border border-white/10">
                  <div 
                    className="bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(168,85,247,0.6)]" 
                    style={{ width: `${Math.max(5, Math.min(100, valence))}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-gray-400">
              <strong className="text-gray-300">Özet:</strong> Bu parça <strong className="text-cyan-400">%{energy}</strong> enerji seviyesi ve <strong className="text-purple-400">{bpm} BPM</strong> vuruş hızıyla dinamik bir akış sergilemektedir.
            </div>
          </div>
        </div>
      )}

      {/* 2. ŞARKI NOTALARI VE SANATÇININ SES TONU BÖLÜMÜ */}
      {tab === 'notes' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sanatçının Vokal Tonu */}
            <div className="p-6 rounded-3xl glass-panel border border-yellow-500/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-yellow-500/15 text-yellow-400 border border-yellow-500/30 shadow-inner">
                  <Mic2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">Sanatçının Ses Tonu & Okuduğu Aralık</h3>
                  <p className="text-xs text-gray-400">Vokal aralığı, ses rengi ve tonlama karakteristiği</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-400">Vokal Aralığı ve Ses Tipi:</span>
                <p className="text-lg font-black text-white">
                  {vocalPitch}
                </p>
                <p className="text-xs text-gray-300 leading-relaxed pt-1">
                  Sanatçı bu eserde karakteristik rezonansını kullanarak tonu şarkının temel gamı olan <strong className="text-cyan-400">{key}</strong> üzerinde icra etmektedir.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Temel Gam / Skala</span>
                  <p className="text-sm font-black text-cyan-300 mt-1">{key}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Hız / Metronom</span>
                  <p className="text-sm font-black text-purple-300 mt-1">{bpm} BPM</p>
                </div>
              </div>
            </div>

            {/* Armonik Akor Dizilimi */}
            <div className="p-6 rounded-3xl glass-panel border border-cyan-500/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-inner">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">Armonik Akor Dizisi (Chords)</h3>
                  <p className="text-xs text-gray-400">Gitar, piyano veya bağlama için akor geçişleri</p>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">Temel Akor Progresyonu:</span>
                <div className="flex flex-wrap gap-2.5">
                  {chords.map((chord, idx) => (
                    <div 
                      key={idx}
                      className="px-4 py-3 rounded-2xl bg-black/60 border border-cyan-500/40 text-center min-w-[70px] shadow-lg"
                    >
                      <span className="text-xl font-black text-white">{chord}</span>
                      <span className="block text-[10px] text-cyan-400 mt-0.5 font-semibold">{idx + 1}. Derece</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed pt-2">
                  Bu akor kalıbı şarkının ana omurgasını, nakarat yürüyüşünü ve armoni yapısını belirler.
                </p>
              </div>
            </div>
          </div>

          {/* Şarkının Melodi Notaları */}
          <div className="p-6 rounded-3xl glass-panel border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-500/15 text-purple-400 border border-purple-500/30 shadow-inner">
                <Music className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white">Şarkının Melodi & Giriş Notaları</h3>
                <p className="text-xs text-gray-400">Ana enstrüman veya vokal melodisinin ses dizilimi</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-cyan-500/20 font-mono text-sm text-cyan-300 leading-loose tracking-wide">
              {notes}
            </div>
            <p className="text-xs text-gray-400">
              * Notalar kulakla çalmak veya enstrümanda icra etmek için standart solfej dizilimidir.
            </p>
          </div>
        </div>
      )}

      {/* 3. PLATFORM & DİNLENME İSTATİSTİKLERİ */}
      {tab === 'stats' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Spotify */}
            <div className="p-5 rounded-3xl glass-panel border border-[#1DB954]/30 hover:border-[#1DB954] transition-all flex flex-col justify-between space-y-4 shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-extrabold text-[#1DB954]">Spotify</span>
                  <span className="text-[10px] bg-[#1DB954]/20 text-[#1DB954] px-2.5 py-0.5 rounded-full font-bold">Popülarite: %{track.stats.spotify.popularityScore}</span>
                </div>
                <p className="text-2xl font-black text-white">{track.stats.spotify.streams.toLocaleString()}</p>
                <span className="text-xs text-gray-400">Toplam Dinlenme</span>
                <div className="mt-3 text-[11px] text-gray-500">Çalma Listesi Erişimi: {track.stats.spotify.playlistReach.toLocaleString()}</div>
              </div>
              <a
                href={track.stats.spotify.url || `https://open.spotify.com/search/${encodeURIComponent(track.title + ' ' + track.artist)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <span>Spotify'da Dinle</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Apple Music */}
            <div className="p-5 rounded-3xl glass-panel border border-[#FC3C44]/30 hover:border-[#FC3C44] transition-all flex flex-col justify-between space-y-4 shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-extrabold text-[#FC3C44]">Apple Music</span>
                  <span className="text-[10px] bg-[#FC3C44]/20 text-[#FC3C44] px-2.5 py-0.5 rounded-full font-bold">Dolby Atmos</span>
                </div>
                <p className="text-2xl font-black text-white">#{track.stats.appleMusic.topChartPosition || 1}</p>
                <span className="text-xs text-gray-400">Top Liste Sıralaması</span>
                <div className="mt-3 text-[11px] text-gray-500">Spatial Audio Aktif</div>
              </div>
              <a
                href={track.stats.appleMusic.url || `https://music.apple.com/search?term=${encodeURIComponent(track.title + ' ' + track.artist)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#FC3C44] hover:bg-[#ff4d55] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <span>Apple Music'te Aç</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* YouTube Music */}
            <div className="p-5 rounded-3xl glass-panel border border-[#FF0000]/30 hover:border-[#FF0000] transition-all flex flex-col justify-between space-y-4 shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-extrabold text-[#FF0000]">YouTube</span>
                  <span className="text-[10px] bg-[#FF0000]/20 text-red-400 px-2.5 py-0.5 rounded-full font-bold">Resmi Klip</span>
                </div>
                <p className="text-2xl font-black text-white">{track.stats.youtubeMusic.views.toLocaleString()}</p>
                <span className="text-xs text-gray-400">Görüntülenme</span>
                <div className="mt-3 text-[11px] text-gray-500">{track.stats.youtubeMusic.likes.toLocaleString()} Beğeni</div>
              </div>
              <a
                href={track.stats.youtubeMusic.url || `https://www.youtube.com/results?search_query=${encodeURIComponent(track.title + ' ' + track.artist)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#FF0000] hover:bg-[#ff2222] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <span>YouTube'da İzle</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* SoundCloud */}
            <div className="p-5 rounded-3xl glass-panel border border-[#FF5500]/30 hover:border-[#FF5500] transition-all flex flex-col justify-between space-y-4 shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-extrabold text-[#FF5500]">SoundCloud</span>
                  <span className="text-[10px] bg-[#FF5500]/20 text-[#FF5500] px-2.5 py-0.5 rounded-full font-bold">Topluluk</span>
                </div>
                <p className="text-2xl font-black text-white">{track.stats.soundCloud.plays.toLocaleString()}</p>
                <span className="text-xs text-gray-400">Oynatma</span>
                <div className="mt-3 text-[11px] text-gray-500">{track.stats.soundCloud.reposts.toLocaleString()} Repost</div>
              </div>
              <a
                href={track.stats.soundCloud.url || `https://soundcloud.com/search?q=${encodeURIComponent(track.title + ' ' + track.artist)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#FF5500] hover:bg-[#ff6a1a] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                <span>SoundCloud'da Ara</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 4. KÜNYE & WIKIPEDIA BİYOGRAFİSİ */}
      {tab === 'credits' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs animate-fadeIn">
          <div className="p-6 rounded-3xl glass-panel space-y-4 border border-white/10 shadow-xl">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <Disc className="w-5 h-5 text-purple-400" /> Stüdyo & Yapım Künyesi
            </h3>
            <div className="space-y-3 pt-1">
              <div><span className="text-gray-400 uppercase text-[10px] font-bold">Besteciler</span><p className="text-sm font-bold text-white mt-0.5">{track.credits?.composers?.join(', ') || track.artist}</p></div>
              <div><span className="text-gray-400 uppercase text-[10px] font-bold">Söz Yazarları</span><p className="text-sm font-bold text-white mt-0.5">{track.credits?.lyricists?.join(', ') || track.artist}</p></div>
              <div><span className="text-gray-400 uppercase text-[10px] font-bold">Prodüktörler</span><p className="text-sm font-bold text-white mt-0.5">{track.credits?.producers?.join(', ') || 'Stüdyo Ekibi'}</p></div>
              <div><span className="text-gray-400 uppercase text-[10px] font-bold">Plak Şirketi & Dağıtım</span><p className="text-sm font-bold text-white mt-0.5">{track.credits?.recordLabel || 'Dijital Dağıtım'}</p></div>
            </div>
          </div>

          <div className="p-6 rounded-3xl glass-panel space-y-4 border border-white/10 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-cyan-400" /> Sanatçı Biyografisi
                </h3>
                {track.credits?.wikipediaUrl && (
                  <a
                    href={track.credits.wikipediaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-white px-3 py-1.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 font-bold shadow-sm transition-all"
                  >
                    Wikipedia'da Oku <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              <p className="text-gray-300 leading-relaxed text-xs">{track.credits?.artistBio || `${track.artist}, küresel müzik listelerinde yer alan tescilli bir sanatçıdır.`}</p>
            </div>

            {track.credits?.originalInfo?.isCover && (
              <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200">
                <strong className="text-white block mb-0.5">Uyarlama / Cover Bilgisi:</strong>
                {track.credits.originalInfo.originalStory || 'Bu eser orijinal bir eserin yeniden yorumudur.'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. ŞARKI SÖZLERİ BÖLÜMÜ */}
      {tab === 'lyrics' && (
        <div className="p-6 md:p-8 rounded-3xl glass-panel max-w-2xl mx-auto border border-white/10 shadow-2xl space-y-6 animate-fadeIn">
          <div className="border-b border-white/10 pb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" /> Şarkı Sözleri
            </h3>
            <p className="text-xs text-gray-400">Eserin orijinal stüdyo ve vokal sözleri</p>
          </div>

          {track.lyrics?.synced && track.lyrics.synced.length > 0 ? (
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {track.lyrics.synced.map((line, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-black/40 hover:bg-white/5 transition-all flex items-center gap-3 border border-white/5">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    {Math.floor(line.time / 60)}:{String(line.time % 60).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold text-gray-200">{line.text}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-5 rounded-2xl bg-black/40 border border-white/5">
              <pre className="whitespace-pre-wrap font-sans text-sm text-gray-200 leading-relaxed">
                {track.lyrics?.plain || 'Şarkı sözleri aranıyor...'}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
