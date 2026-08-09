import { create } from 'zustand';
import { SocialPost, SocialAccount, SocialPlatform } from '@/types';

interface SocialStoreState {
  posts: SocialPost[];
  accounts: SocialAccount[];
  selectedPlatforms: SocialPlatform[];
  loading: boolean;
  error: string | null;
  
  // Posts
  addPost: (post: SocialPost) => void;
  updatePost: (id: string, post: Partial<SocialPost>) => void;
  deletePost: (id: string) => void;
  getPostsByStatus: (status: SocialPost['status']) => SocialPost[];
  publishPost: (id: string) => Promise<void>;
  
  // Accounts
  addAccount: (account: SocialAccount) => void;
  removeAccount: (id: string) => void;
  updateAccount: (id: string, account: Partial<SocialAccount>) => void;
  getConnectedAccounts: () => SocialAccount[];
  
  // Filters
  togglePlatform: (platform: SocialPlatform) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useSocialStore = create<SocialStoreState>((set, get) => ({
  posts: [],
  accounts: [],
  selectedPlatforms: [],
  loading: false,
  error: null,

  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  
  updatePost: (id, updates) => set((state) => ({
    posts: state.posts.map((p) => p.id === id ? { ...p, ...updates } : p),
  })),
  
  deletePost: (id) => set((state) => ({
    posts: state.posts.filter((p) => p.id !== id),
  })),
  
  getPostsByStatus: (status) => {
    const state = get();
    return state.posts.filter((p) => p.status === status);
  },
  
  publishPost: async (id) => {
    set({ loading: true, error: null });
    try {
      const state = get();
      const post = state.posts.find((p) => p.id === id);
      if (!post) throw new Error('Post not found');
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      set((state) => ({
        posts: state.posts.map((p) =>
          p.id === id ? { ...p, status: 'published' as const } : p
        ),
        loading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  
  addAccount: (account) => set((state) => ({ accounts: [...state.accounts, account] })),
  
  removeAccount: (id) => set((state) => ({
    accounts: state.accounts.filter((a) => a.id !== id),
  })),
  
  updateAccount: (id, updates) => set((state) => ({
    accounts: state.accounts.map((a) => a.id === id ? { ...a, ...updates } : a),
  })),
  
  getConnectedAccounts: () => {
    const state = get();
    return state.accounts.filter((a) => a.connected);
  },
  
  togglePlatform: (platform) => set((state) => {
    const isSelected = state.selectedPlatforms.includes(platform);
    return {
      selectedPlatforms: isSelected
        ? state.selectedPlatforms.filter((p) => p !== platform)
        : [...state.selectedPlatforms, platform],
    };
  }),
  
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
