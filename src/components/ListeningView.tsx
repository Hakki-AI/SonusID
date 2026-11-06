      {/* 3. ÖZEL VE KÜRESEL ÇALMA LİSTELERİ BÖLÜMÜ */}
      <section className="glass-panel p-6 rounded-3xl border border-cyan-500/25 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <Disc3 className="w-6 h-6 text-cyan-400 animate-spin" />
              Keşfet: Ruh Hali, Trendler ve Kişisel Listeler
            </h2>
            <p className="text-xs text-cyan-200/80 mt-0.5">
              Ruh halinize ve zevkinize uygun yerli & yabancı listeleri inceleyin, şarkılara tıklayarak detaylı analizine ulaşın.
            </p>
          </div>

          {/* Kategori Seçim Hapları */}
          <div className="flex flex-wrap gap-1.5 bg-black/60 p-1.5 rounded-2xl border border-cyan-500/20">
            <button
              onClick={() => setSelectedCategory('trends-local')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                selectedCategory === 'trends-local' ? 'sonus-gradient text-white shadow-[0_0_15px_rgba(0,242,254,0.4)]' : 'text-gray-300 hover:text-white'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400" /> Yerel Trendler
            </button>
            <button
              onClick={() => setSelectedCategory('trends-global')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                selectedCategory === 'trends-global' ? 'sonus-gradient text-white shadow-[0_0_15px_rgba(0,242,254,0.4)]' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-pink-400" /> Global Trendler
            </button>
            <button
              onClick={() => setSelectedCategory('mood-local')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                selectedCategory === 'mood-local' ? 'sonus-gradient text-white shadow-[0_0_15px_rgba(0,242,254,0.4)]' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-red-400" /> Ruh Hali (Yerli)
            </button>
            <button
              onClick={() => setSelectedCategory('mood-global')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                selectedCategory === 'mood-global' ? 'sonus-gradient text-white shadow-[0_0_15px_rgba(0,242,254,0.4)]' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" /> Ruh Hali (Yabancı)
            </button>
            <button
              onClick={() => setSelectedCategory('for-you-local')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                selectedCategory === 'for-you-local' ? 'sonus-gradient text-white shadow-[0_0_15px_rgba(0,242,254,0.4)]' : 'text-gray-300 hover:text-white'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Sana Özel (Yerli)
            </button>
            <button
              onClick={() => setSelectedCategory('for-you-global')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                selectedCategory === 'for-you-global' ? 'sonus-gradient text-white shadow-[0_0_15px_rgba(0,242,254,0.4)]' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Sana Özel (Yabancı)
            </button>
          </div>
        </div>

        {/* Çalma Listeleri Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPlaylists.map((pl) => (
            <div
              key={pl.id}
              className="p-5 rounded-3xl bg-white/[0.04] border border-cyan-500/20 hover:border-cyan-400/50 transition-all space-y-4 hover:shadow-[0_0_30px_rgba(0,242,254,0.2)]"
            >
              <div className="flex items-center gap-4">
                <img src={pl.coverUrl} alt={pl.title} className="w-20 h-20 rounded-2xl object-cover shadow-lg border border-white/20" />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-black tracking-wider text-cyan-400">{pl.categoryLabel}</span>
                  <h3 className="text-base font-extrabold text-white truncate">{pl.title}</h3>
                  <p className="text-xs text-gray-300 line-clamp-2 mt-1">{pl.subtitle}</p>
                  <span className="text-[11px] text-purple-300 font-bold mt-1 inline-block">{pl.trackCount} Seçkin Eser</span>
                </div>
              </div>

              {/* Listedeki Şarkılar */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                {pl.tracks.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => onTrackFound(t)}
                    className="flex items-center justify-between p-3 rounded-2xl bg-black/40 hover:bg-cyan-500/15 border border-white/5 hover:border-cyan-400/40 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Music2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <div className="truncate">
                        <p className="text-xs font-extrabold text-white group-hover:text-cyan-300 truncate">{t.title}</p>
                        <p className="text-[11px] text-gray-300 truncate">{t.artist}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-[11px] font-mono text-cyan-300 font-bold bg-cyan-500/20 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                        {t.atmosphere.bpm} BPM
                      </span>
                      <span className="text-[11px] text-gray-300 hidden sm:inline font-semibold">
                        {t.atmosphere.key.split(' ')[0]}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
