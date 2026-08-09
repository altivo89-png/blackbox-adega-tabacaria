'use client';

import React from 'react';
import Image from 'next/image';
import { SocialPost } from '@/types';
import { FaInstagram, FaFacebook, FaTiktok, FaTwitter, FaShare, FaEdit, FaTrash } from 'react-icons/fa';

interface SocialPostCardProps {
  post: SocialPost;
  onEdit?: (post: SocialPost) => void;
  onDelete?: (id: string) => void;
  onPublish?: (id: string) => void;
}

const platformIcons: Record<string, React.ReactNode> = {
  instagram: <FaInstagram className="text-pink-500" />,
  facebook: <FaFacebook className="text-blue-600" />,
  tiktok: <FaTiktok className="text-black" />,
  twitter: <FaTwitter className="text-blue-400" />,
};

export const SocialPostCard: React.FC<SocialPostCardProps> = ({
  post,
  onEdit,
  onDelete,
  onPublish,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {post.image && (
        <div className="relative h-48 w-full bg-blackbox-100">
          <Image src={post.image} alt="Post" fill className="object-cover" />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex gap-2 mb-3">
          {post.platforms.map((platform) => (
            <span key={platform} className="text-xl">
              {platformIcons[platform]}
            </span>
          ))}
        </div>
        
        <p className="text-blackbox-900 mb-3">{post.content}</p>
        
        <div className="flex items-center justify-between text-sm mb-4">
          <span className={`px-3 py-1 rounded-full font-medium ${
            post.status === 'published' ? 'bg-green-100 text-green-700' :
            post.status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
            'bg-yellow-100 text-yellow-700'
          }`}>
            {post.status}
          </span>
          
          {post.metrics && (
            <div className="flex gap-4 text-blackbox-600">
              <span>❤️ {post.metrics.likes}</span>
              <span>💬 {post.metrics.comments}</span>
              <span>👁️ {post.metrics.views}</span>
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          {post.status === 'draft' && (
            <button
              onClick={() => onPublish?.(post.id)}
              className="flex-1 flex items-center justify-center gap-2 bg-blackbox-gold text-blackbox-900 px-3 py-2 rounded hover:bg-opacity-90 font-medium"
            >
              <FaShare /> Publicar
            </button>
          )}
          <button
            onClick={() => onEdit?.(post)}
            className="flex items-center justify-center gap-2 bg-blackbox-100 text-blackbox-900 px-3 py-2 rounded hover:bg-blackbox-200"
          >
            <FaEdit /> Editar
          </button>
          <button
            onClick={() => onDelete?.(post.id)}
            className="flex items-center justify-center gap-2 bg-red-100 text-red-600 px-3 py-2 rounded hover:bg-red-200"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};
