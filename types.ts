export type Mood = 'chill' | 'hype' | 'sad' | 'night' | 'urban' | 'elegant';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'urban' | 'y2k' | 'elegant' | 'street';
  type: 'top' | 'bottom' | 'shoes' | 'accessory';
  hiddenFromShop?: boolean;
  mood: Mood;
  playlistUrl: string;
  description: string;
  imagePosition?: string;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  genre: string;
  bio: string;
  featuredTrack: string;
  spotifyUrl: string;
  trackUrl: string;
}

export interface OutfitCombination {
  top?: Product;
  bottom?: Product;
  shoes?: Product;
  accessory?: Product;
}

export interface MoodData {
  id: Mood;
  label: string;
  color: string;
  music: string;
  image: string;
}
