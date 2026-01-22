export type MediaType = "image" | "video";

export interface MediaItem {
  id: string;
  type: MediaType;
  src: string;
  caption?: string;
}

export interface StoryData {
  name: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  media: MediaItem[];
  accentColor: string;
}

export interface Stories {
  dn: StoryData;
  tito: StoryData;
}
