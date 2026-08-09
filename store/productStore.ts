import { create } from 'zustand';
import { Product } from '@/types';

interface ProductStoreState {
  products: Product[];
  selectedCategory: string | null;
  searchQuery: string;
  loading: boolean;
  
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  setSelectedCategory: (category: string | null) => void;
  setSearchQuery: (query: string) => void;
  getFilteredProducts: () => Product[];
  getFeaturedProducts: () => Product[];
}

export const useProductStore = create<ProductStoreState>((set, get) => ({
  products: [
    {
      id: '1',
      name: 'Vinho Tinto Premium',
      description: 'Vinho tinto de excelente qualidade',
      price: 150.00,
      image: '/placeholder-wine.jpg',
      category: 'vinho',
      featured: true,
    },
    {
      id: '2',
      name: 'Tabaco Premium',
      description: 'Tabaco de alta qualidade',
      price: 80.00,
      image: '/placeholder-tabaco.jpg',
      category: 'tabaco',
      featured: true,
    },
  ],
  selectedCategory: null,
  searchQuery: '',
  loading: false,
  
  addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
  
  updateProduct: (id, updates) => set((state) => ({
    products: state.products.map((p) => p.id === id ? { ...p, ...updates } : p),
  })),
  
  deleteProduct: (id) => set((state) => ({
    products: state.products.filter((p) => p.id !== id),
  })),
  
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  getFilteredProducts: () => {
    const state = get();
    return state.products.filter((product) => {
      const matchesCategory = !state.selectedCategory || product.category === state.selectedCategory;
      const matchesSearch = !state.searchQuery || 
        product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(state.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  },
  
  getFeaturedProducts: () => {
    const state = get();
    return state.products.filter((p) => p.featured);
  },
}));
