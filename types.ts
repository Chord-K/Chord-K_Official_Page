
export interface Release {
  id: number;
  title: string;
  artist: string;
  label: string;
  soundcloudEmbedUrl: string;
}

export interface UpcomingRelease {
  id: number;
  title: string;
  artist: string;
  label: string;
  releaseDate: string;
  status: 'Upcoming' | 'In Progress';
  beatportUrl?: string;
}

export interface DemoSubmission {
  artistName: string;
  email: string;
  demoLink: string;
  message: string;
}

export interface SocialLink {
  platform: 'Instagram' | 'SoundCloud' | 'YouTube' | 'Spotify';
  url: string;
}
