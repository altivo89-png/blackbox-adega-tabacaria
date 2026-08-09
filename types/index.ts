export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'vinho' | 'tabaco' | 'acessorios';
  featured: boolean;
}

export interface SocialPost {
  id: string;
  content: string;
  image?: string;
  scheduledDate?: Date;
  platforms: SocialPlatform[];
  status: 'draft' | 'scheduled' | 'published';
  createdAt: Date;
  metrics?: PostMetrics;
}

export type SocialPlatform = 'instagram' | 'facebook' | 'tiktok' | 'twitter';

export interface PostMetrics {
  likes: number;
  comments: number;
  shares: number;
  views: number;
  engagement: number;
}

export interface SocialAccount {
  id: string;
  platform: SocialPlatform;
  username: string;
  accessToken: string;
  followers: number;
  connected: boolean;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  platform: SocialPlatform;
  layout: string;
  colors: string[];
  fonts: string[];
}
