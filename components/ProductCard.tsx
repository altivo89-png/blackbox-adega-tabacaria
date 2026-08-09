'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
  onShare?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onShare }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full bg-blackbox-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        {product.featured && (
          <div className="absolute top-4 right-4 bg-blackbox-gold text-blackbox-900 px-3 py-1 rounded-full text-sm font-bold">
            Destaque
          </div>
        )}
      </div>
      
      <div className="p-4">
        <p className="text-xs text-blackbox-500 uppercase tracking-wide">{product.category}</p>
        <h3 className="text-lg font-bold text-blackbox-900 mt-2">{product.name}</h3>
        <p className="text-sm text-blackbox-600 mt-2 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-blackbox-gold">R$ {product.price.toFixed(2)}</span>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-blackbox-100 text-blackbox-600">
              <FaHeart />
            </button>
            <button onClick={() => onShare?.(product)} className="p-2 rounded-full hover:bg-blackbox-100 text-blackbox-600">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
