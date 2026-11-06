export interface OriginalArtistInfo {
  isCover: boolean;
  originalArtist?: string;
  originalTrackName?: string;
  originalReleaseYear?: number;
  originalStory?: string;
  adaptationType?: 'Cover' | 'Sample' | 'Remix' | 'Orijinal İcra' | 'Tribute';
}

export interface SongCredits {
  composers: string[];
  lyricists: string[];
  producers: string[];
  recordLabel: string;
  isrcCode?: string;
  artistBio: string;
  wikipediaUrl?: string;
  originalInfo: OriginalArtistInfo;
}

export interface MusicalAtmosphere {
  genre: string;
  subGenres: string[];
  bpm: number;
  key: string;
  scale: 'Major' | 'Minor';
  vocalPitch?: string; // Sanatçının okuduğu nota & ses tonu (örn: "G4 - D5 (Tenor / Parlak Göğüs Tonu)")
  chordsProgression?: string[]; // Şarkı akor dizisi (örn: ["Am", "F", "C", "G"])
  musicalNotes?: string; // Melodi notaları veya şarkının nota bilgisi (örn: "La - Do - Si - Sol - La | Mi - Fa - Sol - Fa - Mi")
  energy: number;
  danceability: number;
  valence: number;
  moodDescription: string;
  tags: string[];
}

export interface PlatformMetrics {
  spotify: { streams: number; popularityScore: number; playlistReach: number; url?: string; };
  appleMusic: { topChartPosition?: number; spatialAudio: boolean; url?: string; };
  youtubeMusic: { views: number; likes: number; url?: string; };
  soundCloud: { plays: number; reposts: number; url?: string; };
}

export interface LyricsInfo {
  plain: string;
  translation?: string; // Türkçe çeviri
  synced?: { time: number; text: string; translation?: string }[];
}

export interface TrackMetadata {
  id: string;
  title: string;
  artist: string;
  album: string;
  releaseDate: string;
  coverArtUrl: string;
  previewAudioUrl?: string;
  atmosphere: MusicalAtmosphere;
  credits: SongCredits;
  stats: PlatformMetrics;
  lyrics: LyricsInfo;
}

export type PlaylistCategory = 
  | 'mood-local' 
  | 'mood-global' 
  | 'trends-local' 
  | 'trends-global' 
  | 'for-you-local' 
  | 'for-you-global';

export interface CuratedPlaylist {
  id: string;
  title: string;
  subtitle: string;
  category: PlaylistCategory;
  categoryLabel: string;
  mood?: string;
  coverUrl: string;
  trackCount: number;
  tracks: TrackMetadata[];
}
