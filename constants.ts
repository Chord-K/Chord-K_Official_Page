import { Release, UpcomingRelease, SocialLink } from './types';

export const ARTIST_NAME = "Chord K";
export const TAGLINE = "Designing sound that lives between melody and darkness.";

export const ABOUT_CONTENT = {
  title: "About Chord K",
  bio: `Chord K is the artistic project of Khalid F. Al Balushi, a Melodic Techno producer shaped by long-term exploration of sound, tension, and atmosphere. His musical foundation began in 1997 with classical guitar and flamenco, where discipline and emotional restraint defined his early approach to music.

In 2009, electronic music redirected that path. Starting with DJ controllers and small electronic setups, his focus shifted from mixing tracks to understanding how they are built. This led him into music production, exploring FL Studio alongside close collaborator Saied.

Years of experimentation followed, forming a sound driven by mood and movement rather than trends. With multiple releases signed to record labels, Chord K continues to develop music that lives between melody and darkness—designed for late-night systems and deep listening. His focus remains on progression, clarity, and establishing a distinct voice within the global Melodic Techno landscape.`,
  imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1920&auto=format&fit=crop"
};

export const UPCOMING_RELEASES: UpcomingRelease[] = [
  {
    id: 1,
    title: "Waves of Love",
    artist: "Chord K",
    label: "Sounds of Meow",
    releaseDate: "13th February 2026",
    status: 'Upcoming',
    beatportUrl: "#"
  },
  {
    id: 2,
    title: "No Lover",
    artist: "Chord K",
    label: "F.T.F.T. Records",
    releaseDate: "22nd May 2026",
    status: 'Upcoming',
    beatportUrl: "#"
  }
];

export const RELEASES: Release[] = [
  {
    id: 0,
    title: "Play (Original Mix)",
    artist: "Chord K",
    label: "Chord K",
    soundcloudEmbedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2255014478&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  {
    id: 1,
    title: "Hold Me Closer (Radio Edit)",
    artist: "Chord K",
    label: "Exx Boundless Records",
    soundcloudEmbedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2152931466&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  {
    id: 2,
    title: "Hold Me Closer (Extended Mix)",
    artist: "Chord K",
    label: "Exx Boundless Records",
    soundcloudEmbedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2152932231&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  {
    id: 3,
    title: "Una Noche Más (Radio Edit)",
    artist: "Chord K, Saied",
    label: "Interplay Unity Records",
    soundcloudEmbedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2136255969&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  {
    id: 4,
    title: "Una Noche Más (Extended Mix)",
    artist: "Chord K, Saied",
    label: "Interplay Unity Records",
    soundcloudEmbedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2136261081&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  {
    id: 5,
    title: "Move Your Body (Original Mix)",
    artist: "Chord K, Saied",
    label: "Stellar Waves Records",
    soundcloudEmbedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2035654312&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  }
];

export const LABEL_INFO = {
  name: "THE GRID Records",
  mission: "To establish THE GRID Records as the leading electronic music powerhouse from the Middle East, setting new global standards in melodic techno and progressive sound, and elevating regional artists onto the world stage through innovation, curation, and cultural identity.",
  details: [
    "Underground electronic record label",
    "Focus on Melodic Techno and forward-thinking electronic music",
    "Artist-driven and quality-focused"
  ]
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com/chordkofficial' },
  { platform: 'SoundCloud', url: 'https://soundcloud.com/chordk' },
  { platform: 'YouTube', url: 'https://youtube.com/@chordk' },
  { platform: 'Spotify', url: 'https://open.spotify.com/artist/chordk' }
];

export const CONTACT_EMAIL = "chordkofficial@gmail.com";
export const DEMO_EMAIL = "thegridofc@gmail.com";