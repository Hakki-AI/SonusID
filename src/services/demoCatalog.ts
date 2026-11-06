import { TrackMetadata, CuratedPlaylist } from '../types/music';

export const COMPREHENSIVE_CATALOG: TrackMetadata[] = [
  {
    id: 'blinding-lights-the-weeknd',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    releaseDate: '2019-11-29',
    coverArtUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop',
    atmosphere: {
      genre: '⚡ Synthwave / Electropop',
      subGenres: ['80s Revival', 'New Wave', 'Synth-pop'],
      bpm: 171,
      key: 'F Minor (Fa Minör)',
      scale: 'Minor',
      vocalPitch: 'F3 – C5 (Lirik Tenor / Parlak Baş & Göğüs Miks Tonu)',
      chordsProgression: ['Fm', 'Cm', 'Eb', 'Bb'],
      musicalNotes: 'Giriş Synth & Vokal Melodisi: Fa - Sol - Ab - Sol - Fa - Mib - Do | Fa - Sol - Lab - Sib - Do',
      energy: 88,
      danceability: 74,
      valence: 68,
      moodDescription: 'Retro fütüristik, neon ışıklı, yüksek tempolu gece sürüşü enerjisi. Sürükleyici 80\'ler synth yürüyüşleri.',
      tags: ['Neon', 'Hızlı', 'Enerjik', 'Gece Sürüşü', 'Synthwave']
    },
    credits: {
      composers: ['Abel Tesfaye', 'Max Martin', 'Oscar Holter'],
      lyricists: ['Abel Tesfaye', 'Max Martin'],
      producers: ['Max Martin', 'Oscar Holter', 'The Weeknd'],
      recordLabel: 'XO / Republic Records',
      isrcCode: 'US-UG1-19-04142',
      artistBio: "The Weeknd (Abel Makkonen Tesfaye), R&B ve pop müziği karanlık sinematik dokularla dönüştüren çağımızın en büyük küresel ikonlarındandır.",
      wikipediaUrl: 'https://tr.wikipedia.org/wiki/The_Weeknd',
      originalInfo: {
        isCover: false,
        adaptationType: 'Orijinal İcra',
        originalStory: "Spotify tarihinin tüm zamanların en çok dinlenen şarkısı unvanına sahip küresel bir fenomendir."
      }
    },
    stats: {
      spotify: { streams: 4320000000, popularityScore: 98, playlistReach: 210000000, url: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b' },
      appleMusic: { topChartPosition: 1, spatialAudio: true, url: 'https://music.apple.com/us/album/blinding-lights/1499378108?i=1499378607' },
      youtubeMusic: { views: 1120000000, likes: 12000000, url: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ' },
      soundCloud: { plays: 45000000, reposts: 380000, url: 'https://soundcloud.com/theweeknd/blinding-lights' }
    },
    lyrics: {
      plain: "Yeah\n\nI've been tryna call\nI've been on my own for long enough\nMaybe you can show me how to love, maybe\n\nI'm going through withdrawals\nYou don't even have to do too much\nYou can turn me on with just a touch, baby\n\nI look around and Sin City's cold and empty\nNo one's around to judge me\nI can't see clearly when you're gone\n\nI said, ooh, I'm blinded by the lights\nNo, I can't sleep until I feel your touch\nI said, ooh, I'm drowning in the night\nOh, when I'm like this, you're the one I trust",
      translation: "Evet\n\nAramaya çalışıyorum\nYeterince uzun süredir tek başımayım\nBelki bana nasıl seveceğimi gösterebilirsin, belki\n\nYoksunluk krizleri yaşıyorum\nÇok fazla bir şey yapmana bile gerek yok\nSadece bir dokunuşunla beni canlandırabilirsin, bebeğim\n\nEtrafa bakıyorum da Günah Şehri soğuk ve bomboş\nYargılayacak hiç kimse yok etrafta\nSen yokken net göremiyorum\n\nDedim ki, ooh, ışıklar gözlerimi kör etti\nHayır, dokunuşunu hissedene kadar uyuyamıyorum\nDedim ki, ooh, gecenin içinde boğuluyorum\nOh, böyle olduğumda tek güvendiğim sensin",
      synced: [
        { time: 0, text: "I've been tryna call", translation: "Aramaya çalışıyorum" },
        { time: 5, text: "I've been on my own for long enough", translation: "Yeterince uzun süredir tek başımayım" },
        { time: 10, text: "Maybe you can show me how to love, maybe", translation: "Belki bana sevmeyi gösterebilirsin" },
        { time: 26, text: "I said, ooh, I'm blinded by the lights", translation: "Dedim ki, ışıklar gözümü kör etti" },
        { time: 33, text: "No, I can't sleep until I feel your touch", translation: "Dokunuşunu hissedene kadar uyuyamam" }
      ]
    }
  },
  {
    id: 'hurt-johnny-cash',
    title: 'Hurt',
    artist: 'Johnny Cash',
    album: 'American IV: The Man Comes Around',
    releaseDate: '2002-11-05',
    coverArtUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    atmosphere: {
      genre: '🪕 Akustik / Dark Country Folk',
      subGenres: ['Americana', 'Alternative Country', 'Dark Folk'],
      bpm: 80,
      key: 'A Minor (La Minör)',
      scale: 'Minor',
      vocalPitch: 'E2 – C4 (Dramatik Bas-Bariton / Derin Göğüs Rezonansı)',
      chordsProgression: ['Am', 'C', 'D', 'Am'],
      musicalNotes: 'Giriş Akor ve Melodisi: La - Do - Re - La | Nakarat: Sol - La - Fa - Do',
      energy: 32,
      danceability: 25,
      valence: 12,
      moodDescription: 'Derin, melankolik ve varoluşsal bir iç hesaplaşma. Akustik gitar ve piyano üzerine titreyen kırılgan bir bariton vokal.',
      tags: ['Melankolik', 'Akustik', 'Düşünceli', 'Kederli']
    },
    credits: {
      composers: ['Trent Reznor'],
      lyricists: ['Trent Reznor'],
      producers: ['Rick Rubin'],
      recordLabel: 'American Recordings / Lost Highway',
      isrcCode: 'US-PR3-02-00501',
      artistBio: "Johnny Cash (1932–2003), Amerikan country ve rock müziğinin 'Man in Black' lakaplı efsanevi ozanıdır.",
      wikipediaUrl: 'https://tr.wikipedia.org/wiki/Johnny_Cash',
      originalInfo: {
        isCover: true,
        adaptationType: 'Cover',
        originalArtist: 'Nine Inch Nails',
        originalTrackName: 'Hurt',
        originalReleaseYear: 1994,
        originalStory: "Parça aslen endüstriyel rock grubu Nine Inch Nails'in 1994 tarihli 'The Downward Spiral' albümünde yer alır. Şarkıyı yazan Trent Reznor, Cash'in yorumunu dinledikten sonra 'Bu şarkı artık ona ait' demiştir."
      }
    },
    stats: {
      spotify: { streams: 498230100, popularityScore: 82, playlistReach: 42100000, url: 'https://open.spotify.com/track/28cnXtME493VX9NOw9cTvN' },
      appleMusic: { topChartPosition: 14, spatialAudio: true, url: 'https://music.apple.com/us/album/hurt/1440811207?i=1440811210' },
      youtubeMusic: { views: 215400900, likes: 1800000, url: 'https://www.youtube.com/watch?v=8AHCfZTRGiI' },
      soundCloud: { plays: 12400000, reposts: 84000, url: 'https://soundcloud.com/johnnycash/hurt' }
    },
    lyrics: {
      plain: "I hurt myself today\nTo see if I still feel\nI focus on the pain\nThe only thing that's real\n\nThe needle tears a hole\nThe old familiar sting\nTry to kill it all away\nBut I remember everything\n\nWhat have I become?\nMy sweetest friend\nEveryone I know goes away\nIn the end",
      translation: "Bugün canımı yaktım yine\nHala hissedebiliyor muyum görmek için\nSadece acıya odaklanıyorum\nÇünkü gerçek olan tek şey bu\n\nİğne bir delik açıyor tenimde\nO eski, tanıdık sızı\nHepsini yok etmeye çalışıyorum\nAma her şeyi hatırlıyorum\n\nBen neye dönüştüm böyle?\nEn tatlı dostum benim\nTanıdığım herkes çekip gidiyor\nEninde sonunda",
      synced: [
        { time: 0, text: "I hurt myself today", translation: "Bugün canımı yaktım yine" },
        { time: 7, text: "To see if I still feel", translation: "Hala hissedebiliyor muyum diye" },
        { time: 14, text: "I focus on the pain", translation: "Acıya odaklanıyorum" },
        { time: 21, text: "The only thing that's real", translation: "Gerçek olan tek şey o" }
      ]
    }
  },
  {
    id: 'donence-baris-manco',
    title: 'Dönence',
    artist: 'Barış Manço & Kurtalan Ekspres',
    album: 'Sözüm Meclisten Dışarı',
    releaseDate: '1981-12-01',
    coverArtUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop',
    atmosphere: {
      genre: '🎸 Anadolu Rock / Progresif',
      subGenres: ['Psychedelic Rock', 'Synth-Rock', 'Anadolu Senfonisi'],
      bpm: 114,
      key: 'D Minor (Re Minör)',
      scale: 'Minor',
      vocalPitch: 'A2 – F4 (Lirik Bariton / Tok & Felsefi Anlatı Tonu)',
      chordsProgression: ['Dm', 'Gm', 'C', 'Bb', 'A7'],
      musicalNotes: 'Giriş Moog Synthesizer Teması: Re - Fa - Sol - La - Sol - Fa - Mi - Re | Do# - Re - Mi - Re',
      energy: 82,
      danceability: 64,
      valence: 48,
      moodDescription: 'Mistik ve kozmik bir atmosfer. Analog synthesizer yürüyüşleri ve felsefi bir Anadolu senfonisi.',
      tags: ['Kozmik', 'Progresif', 'Mistik', 'Analog Synth']
    },
    credits: {
      composers: ['Barış Manço', 'Celal Güven', 'Nejat Tekdal', 'Ahmet Güvenç'],
      lyricists: ['Barış Manço'],
      producers: ['Barış Manço'],
      recordLabel: 'Türküola / Emre Plak',
      artistBio: "Barış Manço (1943–1999), Anadolu melodilerini Batı senfonik rock tınılarıyla harmanlamış Türk müzik dehasıdır.",
      wikipediaUrl: 'https://tr.wikipedia.org/wiki/Bar%C4%B1%C5%9F_Man%C3%A7o',
      originalInfo: {
        isCover: false,
        adaptationType: 'Orijinal İcra',
        originalStory: "Türk rock tarihinin en kusursuz başyapıtlarından biridir."
      }
    },
    stats: {
      spotify: { streams: 88400000, popularityScore: 76, playlistReach: 14500000, url: 'https://open.spotify.com/track/6PqI17tP1dKjEw4N' },
      appleMusic: { topChartPosition: 3, spatialAudio: true, url: 'https://music.apple.com/tr/album/d%C3%B6nence/12345678' },
      youtubeMusic: { views: 64200000, likes: 720000, url: 'https://www.youtube.com/watch?v=F0f188zU3hU' },
      soundCloud: { plays: 4300000, reposts: 42000, url: 'https://soundcloud.com/baris-manco/donence' }
    },
    lyrics: {
      plain: "Simsiyah gecenin koynundayım yapayalnız\nUzaklarda bir yerlerde türküler söyleniyor\nBu gecenin ardı gündüz, bu gecenin ardı gün\n\nDönence... Gün dönende başlar\nDönence... Döner durur başım\nBir gün güneş batacak, bir gün yine doğacak",
      translation: "(Türkçe Orijinal Eser)"
    }
  },
  {
    id: 'bohemian-rhapsody-queen',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    releaseDate: '1975-10-31',
    coverArtUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
    atmosphere: {
      genre: '🎻 Progresif Rock / Senfonik Opera',
      subGenres: ['Classic Rock', 'Hard Rock', 'Glam Rock'],
      bpm: 72,
      key: 'Bb Major (Si Bemol Majör)',
      scale: 'Major',
      vocalPitch: 'F2 – Eb5 (Dramatik Tenor / 4 Oktavlık Efsanevi Vokal)',
      chordsProgression: ['Bb', 'Gm', 'Cm7', 'F7', 'Eb'],
      musicalNotes: 'Ballad Piyano Girişi: Sib - Re - Fa | Nakarat: Sol - Fa - Mib - Re - Do - Sib | Opera: Fa# - Sol# - La',
      energy: 78,
      danceability: 38,
      valence: 42,
      moodDescription: 'A capella, ballad, opera ve hard rock bölümlerinden oluşan epik bir başyapıt.',
      tags: ['Epik', 'Opera', 'Progresif', 'Kült']
    },
    credits: {
      composers: ['Freddie Mercury'],
      lyricists: ['Freddie Mercury'],
      producers: ['Roy Thomas Baker', 'Queen'],
      recordLabel: 'EMI / Elektra',
      artistBio: "Freddie Mercury önderliğindeki Queen, müzik tarihinin en ikonik ve tiyatral rock grubudur.",
      wikipediaUrl: 'https://tr.wikipedia.org/wiki/Queen_(m%C3%BCzik_grubu)',
      originalInfo: { isCover: false, adaptationType: 'Orijinal İcra' }
    },
    stats: {
      spotify: { streams: 2890000000, popularityScore: 92, playlistReach: 140000000, url: 'https://open.spotify.com/track/7tFiyTwD0nx5a1GKNWwZPP' },
      appleMusic: { topChartPosition: 1, spatialAudio: true, url: 'https://music.apple.com/us/album/bohemian-rhapsody/1440650428?i=1440650852' },
      youtubeMusic: { views: 1750000000, likes: 16000000, url: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ' },
      soundCloud: { plays: 32000000, reposts: 290000, url: 'https://soundcloud.com/queen-official/bohemian-rhapsody' }
    },
    lyrics: {
      plain: "Is this the real life? Is this just fantasy?\nCaught in a landslide, no escape from reality\nOpen your eyes, look up to the skies and see\n\nI'm just a poor boy, I need no sympathy\nBecause I'm easy come, easy go, little high, little low\nAny way the wind blows doesn't really matter to me, to me\n\nMama, just killed a man\nPut a gun against his head, pulled my trigger, now he's dead",
      translation: "Bu gerçek hayat mı? Yoksa sadece bir hayal mi?\nBir heyelana kapılmışım, gerçeklikten kaçış yok\nAç gözlerini, gökyüzüne bak ve gör\n\nBen sadece yoksul bir çocuğum, acınmaya ihtiyacım yok\nÇünkü gelişim kolay, gidişim kolay, biraz neşeli, biraz kederli\nRüzgar nereden eserse essin, benim için gerçekten hiç fark etmez\n\nAnne, az önce bir adam öldürdüm\nSilahı başına dayadım, tetiği çektim ve öldü",
      synced: [
        { time: 0, text: "Is this the real life? Is this just fantasy?", translation: "Bu gerçek hayat mı? Yoksa bir hayal mi?" },
        { time: 7, text: "Caught in a landslide, no escape from reality", translation: "Bir heyelana kapılmışım, gerçeklikten kaçış yok" },
        { time: 14, text: "Mama, just killed a man", translation: "Anne, az önce bir adam öldürdüm" }
      ]
    }
  },
  {
    id: 'isyan-halil-sezai',
    title: 'İsyan',
    artist: 'Halil Sezai',
    album: 'Seni Beklerken',
    releaseDate: '2011-11-23',
    coverArtUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop',
    atmosphere: {
      genre: '🌙 Akustik / Slow Rock',
      subGenres: ['Türkçe Rock', 'Melankoli', 'Duygusal Balad'],
      bpm: 74,
      key: 'E Minor (Mi Minör)',
      scale: 'Minor',
      vocalPitch: 'B2 – G4 (Duygusal Boğuk Bariton / Yırtıcı Falsetto Geçişleri)',
      chordsProgression: ['Em', 'Am', 'D', 'G', 'C', 'B7'],
      musicalNotes: 'Gitar Arpeji ve Nakarat Melodisi: Mi - Fa# - Sol - La - Si | Mi5 - Re - Do - Si (İçim Yanar)',
      energy: 60,
      danceability: 35,
      valence: 15,
      moodDescription: 'Yırtıcı vokal geçişleri, derin bir hüzün ve içsel çığlık barındıran akustik balad.',
      tags: ['Hüzün', 'İsyan', 'Akustik', 'Dramatik']
    },
    credits: {
      composers: ['Halil Sezai'],
      lyricists: ['Halil Sezai'],
      producers: ['Dokuz Sekiz Müzik'],
      recordLabel: 'Dokuz Sekiz Müzik',
      artistBio: "Halil Sezai, kendine has buğulu, içten ve yırtıcı vokal tekniğiyle tanınan Türk şarkıcı ve aktördür.",
      wikipediaUrl: 'https://tr.wikipedia.org/wiki/Halil_Sezai',
      originalInfo: { isCover: false, adaptationType: 'Orijinal İcra' }
    },
    stats: {
      spotify: { streams: 72000000, popularityScore: 74, playlistReach: 8500000, url: 'https://open.spotify.com/track/4jH12isyan' },
      appleMusic: { topChartPosition: 2, spatialAudio: true, url: 'https://music.apple.com/tr/album/isyan/11122233' },
      youtubeMusic: { views: 98000000, likes: 620000, url: 'https://www.youtube.com/watch?v=isyan123' },
      soundCloud: { plays: 3100000, reposts: 18000, url: 'https://soundcloud.com/halil-sezai/isyan' }
    },
    lyrics: {
      plain: "Yok bile bile bir şeyleri kaybettim\nİçim yanar, içim kanar da\nİsyaaan!\nGeriye bir avuç kül kalır\nSavrulur gider rüzgarda",
      translation: "(Türkçe Orijinal Eser)"
    }
  },
  {
    id: 'shape-of-you-ed-sheeran',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    album: '÷ (Divide)',
    releaseDate: '2017-01-06',
    coverArtUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    atmosphere: {
      genre: '✨ Pop / Dancehall Tropikal Pop',
      subGenres: ['Contemporary Pop', 'Acoustic Loop'],
      bpm: 96,
      key: 'C# Minor (Do Diyez Minör)',
      scale: 'Minor',
      vocalPitch: 'C#3 – G#4 (Lirik Tenor / Ritmik Akıcı Göğüs Sesi)',
      chordsProgression: ['C#m', 'F#m', 'A', 'B'],
      musicalNotes: 'Marimba Riff Melodisi: Do# - Mi - Sol# - Do# | Fa# - La - Do# | La - Do# - Mi',
      energy: 82,
      danceability: 84,
      valence: 93,
      moodDescription: 'Son derece akılda kalıcı marimba perküsyon ritmi ve pozitif, dans ettiren modern pop havası.',
      tags: ['Dans', 'Pozitif', 'Ritmik', 'Radyo Hiti']
    },
    credits: {
      composers: ['Ed Sheeran', 'Steve Mac', 'Johnny McDaid', 'Kandi Burruss'],
      lyricists: ['Ed Sheeran'],
      producers: ['Ed Sheeran', 'Steve Mac'],
      recordLabel: 'Asylum / Atlantic Records',
      artistBio: "Ed Sheeran, gitar döngü pedalı ve samimi şarkı yazarlığıyla stadyumları dolduran dünya yıldızıdır.",
      wikipediaUrl: 'https://tr.wikipedia.org/wiki/Ed_Sheeran',
      originalInfo: { isCover: false, adaptationType: 'Orijinal İcra' }
    },
    stats: {
      spotify: { streams: 4100000000, popularityScore: 94, playlistReach: 195000000, url: 'https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3' },
      appleMusic: { topChartPosition: 1, spatialAudio: true, url: 'https://music.apple.com/us/album/shape-of-you/1192170389?i=1192170784' },
      youtubeMusic: { views: 6300000000, likes: 34000000, url: 'https://www.youtube.com/watch?v=JGwWNGJdvx8' },
      soundCloud: { plays: 54000000, reposts: 410000, url: 'https://soundcloud.com/edsheeran/shape-of-you' }
    },
    lyrics: {
      plain: "The club isn't the best place to find a lover\nSo the bar is where I go\nMe and my friends at the table doing shots\nDrinking fast and then we talk slow\n\nGirl, you know I want your love\nYour love was handmade for somebody like me\nCome on now, follow my lead\nI may be crazy, don't mind me\n\nI'm in love with the shape of you\nWe push and pull like a magnet do\nAlthough my heart is falling too\nI'm in love with your body",
      translation: "Kulüp bir sevgili bulmak için en iyi yer değil\nBu yüzden ben de bara giderim\nArkadaşlarım ve ben masada tekila shotları atıyoruz\nHızlı içiyoruz ve ardından yavaş konuşuyoruz\n\nKızım, senin aşkını istediğimi biliyorsun\nSenin sevgin benim gibi biri için özel yapılmış\nHadi şimdi, adımlarımı takip et\nBelki deliyimdir, bana aldırma\n\nVücudunun hatlarına aşığım\nMıknatıslar gibi birbirimizi itip çekiyoruz\nKalbim de sana kapılıyor olsa da\nBedenine vurulmuş durumdayım",
      synced: [
        { time: 0, text: "The club isn't the best place to find a lover", translation: "Kulüp sevgili bulmak için en iyi yer değil" },
        { time: 8, text: "Girl, you know I want your love", translation: "Kızım sevgini istediğimi biliyorsun" },
        { time: 17, text: "I'm in love with the shape of you", translation: "Vücudunun hatlarına aşığım" }
      ]
    }
  },
  {
    id: 'antidepresan-mert-demir-mabel-matiz',
    title: 'Antidepresan',
    artist: 'Mert Demir ft. Mabel Matiz',
    album: 'Antidepresan - Single',
    releaseDate: '2022-11-04',
    coverArtUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop',
    atmosphere: {
      genre: '🌙 Alternatif Pop / Synth-Pop',
      subGenres: ['Retro Türk Pop', 'Indie Pop', 'Melankolik Beat'],
      bpm: 110,
      key: 'G# Minor (Sol Diyez Minör)',
      scale: 'Minor',
      vocalPitch: 'D#3 – G#4 (Mabel: Karakteristik Parlak Tenor / Mert: Sıcak Bariton)',
      chordsProgression: ['G#m', 'E', 'B', 'F#'],
      musicalNotes: 'Giriş Synth Bas ve Vokal Notası: Sol# - Si - Re# - Do# - Si - La# | Mi - Sol# - Si - La#',
      energy: 72,
      danceability: 78,
      valence: 45,
      moodDescription: 'Melankolik sözlerle dans ettiren synth ritminin kusursuz harmanı. Modern Türk popunun zirve ortaklığı.',
      tags: ['Popüler', 'Dans', 'Melankoli', 'Retro']
    },
    credits: {
      composers: ['Mert Demir', 'Mabel Matiz'],
      lyricists: ['Mert Demir', 'Mabel Matiz'],
      producers: ['Mert Demir'],
      recordLabel: 'Pale Records',
      artistBio: "Mert Demir ve Mabel Matiz, modern Türk popuna retro ve alternatif yeni bir soluk getiren öncü müzisyenlerdir.",
      wikipediaUrl: 'https://tr.wikipedia.org/wiki/Mabel_Matiz',
      originalInfo: { isCover: false, adaptationType: 'Orijinal İcra' }
    },
    stats: {
      spotify: { streams: 260000000, popularityScore: 88, playlistReach: 28000000, url: 'https://open.spotify.com/track/antidepresan' },
      appleMusic: { topChartPosition: 1, spatialAudio: true, url: 'https://music.apple.com/tr/album/antidepresan/1652423' },
      youtubeMusic: { views: 190000000, likes: 1100000, url: 'https://www.youtube.com/watch?v=mert-mabel-antidepresan' },
      soundCloud: { plays: 7800000, reposts: 52000, url: 'https://soundcloud.com/mert-demir/antidepresan' }
    },
    lyrics: {
      plain: "Kafamda bir sürü soru, bir türlü bitmiyor\nBana bir antidepresan lazım, bu acı geçmiyor\nGitsem nereye kadar, kalsam neye yarar?\nBeni bu karanlıktan çekip alacak biri var mı?",
      translation: "(Türkçe Orijinal Eser)"
    }
  },
  {
    id: 'as-it-was-harry-styles',
    title: 'As It Was',
    artist: 'Harry Styles',
    album: "Harry's House",
    releaseDate: '2022-04-01',
    coverArtUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    atmosphere: {
      genre: '⚡ Indie Pop / Synth-Pop',
      subGenres: ['New Wave', 'Bedroom Pop', 'Upbeat Nostalgia'],
      bpm: 174,
      key: 'A Major (La Majör)',
      scale: 'Major',
      vocalPitch: 'E3 – F#4 (Hafif ve Havalı Lirik Bariton / Nefesli Miks Ton)',
      chordsProgression: ['A', 'F#m', 'Bm', 'E'],
      musicalNotes: 'Giriş Çan & Synth Melodisi: La - Do# - Mi - Fa# - Mi - Do# - La | Si - Re - Fa#',
      energy: 85,
      danceability: 77,
      valence: 78,
      moodDescription: 'Tempolu, neşeli zil tınıları eşliğinde nostaljik ve yalnızlık hissini anlatan enerjik bir modern klasik.',
      tags: ['Nostalji', 'Hızlı', 'Yaz Enerjisi', 'Radyo Hiti']
    },
    credits: {
      composers: ['Harry Styles', 'Kid Harpoon', 'Tyler Johnson'],
      lyricists: ['Harry Styles'],
      producers: ['Kid Harpoon', 'Tyler Johnson'],
      recordLabel: 'Erskine / Columbia',
      artistBio: "Harry Styles, İngiliz şarkıcı ve küresel stil ikonu. Solo kariyerinde 70'ler ve 80'ler tınılarını modern popla buluşturmuştur.",
      wikipediaUrl: 'https://tr.wikipedia.org/wiki/Harry_Styles',
      originalInfo: { isCover: false, adaptationType: 'Orijinal İcra' }
    },
    stats: {
      spotify: { streams: 3600000000, popularityScore: 95, playlistReach: 180000000, url: 'https://open.spotify.com/track/4Dvkj6JhhA12EX05QE9OKu' },
      appleMusic: { topChartPosition: 1, spatialAudio: true, url: 'https://music.apple.com/us/album/as-it-was/1615584999?i=1615585008' },
      youtubeMusic: { views: 820000000, likes: 8900000, url: 'https://www.youtube.com/watch?v=H5v3kku4y6Q' },
      soundCloud: { plays: 36000000, reposts: 310000, url: 'https://soundcloud.com/harrystyles/as-it-was' }
    },
    lyrics: {
      plain: "Hold on, ring-a-ring-a-roses\n\nCome on, Harry, we wanna say goodnight to you\n\nHoldin' me back\nGravity's holdin' me back\nI want you to hold out the palm of your hand\nWhy don't we leave it at that?\n\nYou know it's not the same as it was\nIn this world, it's just us\nYou know it's not the same as it was",
      translation: "Bekle, halka halka güller\n\nHadi Harry, sana iyi geceler demek istiyoruz\n\nBeni geri tutuyor\nYerçekimi beni geride tutuyor\nAvucunun içini bana uzatmanı istiyorum\nNeden meseleyi burada bırakmıyoruz?\n\nBiliyorsun eskisi gibi değil hiçbir şey\nBu dünyada sadece ikimiz varız\nBiliyorsun eskisi gibi değil",
      synced: [
        { time: 0, text: "Come on, Harry, we wanna say goodnight to you", translation: "Hadi Harry, iyi geceler demek istiyoruz" },
        { time: 8, text: "Gravity's holdin' me back", translation: "Yerçekimi beni geri tutuyor" },
        { time: 20, text: "You know it's not the same as it was", translation: "Biliyorsun hiçbir şey eskisi gibi değil" }
      ]
    }
  }
];

export const CURATED_PLAYLISTS: CuratedPlaylist[] = [
  // 1. Ruh Haline Göre Yerli
  {
    id: 'mood-local-melancholy',
    title: 'Gece ve Efkar (Yerli)',
    subtitle: 'Derin duygular, iç hesaplaşmalar ve melankolik Türk melodileri',
    category: 'mood-local',
    categoryLabel: 'Ruh Hali: Hüzün & Efkar (Yerli)',
    mood: 'Melankolik',
    coverUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600',
    trackCount: 2,
    tracks: [
      COMPREHENSIVE_CATALOG.find(t => t.id === 'donence-baris-manco')!,
      COMPREHENSIVE_CATALOG.find(t => t.id === 'isyan-halil-sezai')!
    ]
  },
  {
    id: 'mood-local-energy',
    title: 'Yüksek Enerji & Dans (Yerli)',
    subtitle: 'Gününü neşelendirecek ritmik ve kıpır kıpır Türkçe parçalar',
    category: 'mood-local',
    categoryLabel: 'Ruh Hali: Neşeli & Enerjik (Yerli)',
    mood: 'Enerjik',
    coverUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=600',
    trackCount: 1,
    tracks: [
      COMPREHENSIVE_CATALOG.find(t => t.id === 'antidepresan-mert-demir-mabel-matiz')!
    ]
  },

  // 2. Ruh Haline Göre Yabancı
  {
    id: 'mood-global-nightdrive',
    title: 'Midnight Highway (Yabancı)',
    subtitle: 'Gece sürüşleri, neon ışıklar ve synthwave atmosferi',
    category: 'mood-global',
    categoryLabel: 'Ruh Hali: Gece Sürüşü (Yabancı)',
    mood: 'Gece Sürüşü',
    coverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600',
    trackCount: 2,
    tracks: [
      COMPREHENSIVE_CATALOG.find(t => t.id === 'blinding-lights-the-weeknd')!,
      COMPREHENSIVE_CATALOG.find(t => t.id === 'as-it-was-harry-styles')!
    ]
  },
  {
    id: 'mood-global-deep-soul',
    title: 'Deep Soul & Reflection (Yabancı)',
    subtitle: 'Akustik, kederli ve ruha dokunan küresel başyapıtlar',
    category: 'mood-global',
    categoryLabel: 'Ruh Hali: Duygusal & Akustik (Yabancı)',
    mood: 'Derin',
    coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600',
    trackCount: 2,
    tracks: [
      COMPREHENSIVE_CATALOG.find(t => t.id === 'hurt-johnny-cash')!,
      COMPREHENSIVE_CATALOG.find(t => t.id === 'bohemian-rhapsody-queen')!
    ]
  },

  // 3. Yerel Trendler (Türkiye)
  {
    id: 'trends-local-top50',
    title: 'Türkiye Top 50 Trendler',
    subtitle: 'Şu an Türkiye genelinde radyolarda ve kulaklıklarda en çok çalanlar',
    category: 'trends-local',
    categoryLabel: 'Yerel Trendler (Türkiye)',
    coverUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600',
    trackCount: 3,
    tracks: [
      COMPREHENSIVE_CATALOG.find(t => t.id === 'antidepresan-mert-demir-mabel-matiz')!,
      COMPREHENSIVE_CATALOG.find(t => t.id === 'isyan-halil-sezai')!,
      COMPREHENSIVE_CATALOG.find(t => t.id === 'donence-baris-manco')!
    ]
  },

  // 4. Global Trendler (Dünya)
  {
    id: 'trends-global-top50',
    title: 'Global Top 50 Hits',
    subtitle: 'Dünya listelerinin bir numarası, milyarlarca kez dinlenen dev hitler',
    category: 'trends-global',
    categoryLabel: 'Global Trendler (Dünya)',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=600',
    trackCount: 4,
    tracks: [
      COMPREHENSIVE_CATALOG.find(t => t.id === 'blinding-lights-the-weeknd')!,
      COMPREHENSIVE_CATALOG.find(t => t.id === 'as-it-was-harry-styles')!,
      COMPREHENSIVE_CATALOG.find(t => t.id === 'shape-of-you-ed-sheeran')!,
      COMPREHENSIVE_CATALOG.find(t => t.id === 'bohemian-rhapsody-queen')!
    ]
  },

  // 5. Dinleyiciye Özel Yerli
  {
    id: 'for-you-local-mix',
    title: 'Sana Özel Yerli Karışım',
    subtitle: 'Beğenilerine ve müzik zevkine göre derlenmiş özel Türkçe seçki',
    category: 'for-you-local',
    categoryLabel: 'Sana Özel: Yerli Karışım',
    coverUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=600',
    trackCount: 3,
    tracks: [
      COMPREHENSIVE_CATALOG.find(t => t.id === 'donence-baris-manco')!,
      COMPREHENSIVE_CATALOG.find(t => t.id === 'antidepresan-mert-demir-mabel-matiz')!,
      COMPREHENSIVE_CATALOG.find(t => t.id === 'isyan-halil-sezai')!
    ]
  },

  // 6. Dinleyiciye Özel Yabancı
  {
    id: 'for-you-global-mix',
    title: 'Sana Özel Yabancı Keşif',
    subtitle: 'Senin ritmine ve dinleme alışkanlıklarına göre hazırlanmış dünya müziği',
    category: 'for-you-global',
    categoryLabel: 'Sana Özel: Yabancı Keşif',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600',
    trackCount: 4,
    tracks: [
      COMPREHENSIVE_CATALOG.find(t => t.id === 'as-it-was-harry-styles')!,
      COMPREHENSIVE_CATALOG.find(t => t.id === 'blinding-lights-the-weeknd')!,
      COMPREHENSIVE_CATALOG.find(t => t.id === 'hurt-johnny-cash')!,
      COMPREHENSIVE_CATALOG.find(t => t.id === 'shape-of-you-ed-sheeran')!
    ]
  }
];

export const DEMO_TRACKS = COMPREHENSIVE_CATALOG;
