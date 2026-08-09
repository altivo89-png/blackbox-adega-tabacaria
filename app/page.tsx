'use client';

import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { useSocialStore } from '@/store/socialStore';
import { useProductStore } from '@/store/productStore';
import { FaChartBar, FaUsers, FaThumbsUp, FaEye } from 'react-icons/fa';

export default function Dashboard() {
  const { posts, getPostsByStatus } = useSocialStore();
  const { products } = useProductStore();
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    totalEngagement: 0,
    followers: 0,
  });

  useEffect(() => {
    const published = getPostsByStatus('published');
    const totalEngagement = published.reduce((sum, post) => 
      sum + (post.metrics?.engagement || 0), 0
    );

    setStats({
      totalPosts: posts.length,
      publishedPosts: published.length,
      totalEngagement,
      followers: 1250,
    });
  }, [posts, getPostsByStatus]);

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-blackbox-900">Dashboard</h1>
          <p className="text-blackbox-600 mt-2">Bem-vindo à BLACKBOX - Adega & Tabacaria</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<FaChartBar />}
            label="Posts Totais"
            value={stats.totalPosts}
            color="bg-blue-500"
          />
          <StatCard
            icon={<FaThumbsUp />}
            label="Posts Publicados"
            value={stats.publishedPosts}
            color="bg-green-500"
          />
          <StatCard
            icon={<FaEye />}
            label="Engajamento Total"
            value={stats.totalEngagement}
            color="bg-purple-500"
          />
          <StatCard
            icon={<FaUsers />}
            label="Seguidores"
            value={stats.followers}
            color="bg-pink-500"
          />
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blackbox-900 mb-4">Posts Recentes</h2>
          {posts.length === 0 ? (
            <p className="text-blackbox-600 text-center py-8">Nenhum post ainda</p>
          ) : (
            <div className="space-y-4">
              {posts.slice(0, 5).map((post) => (
                <div key={post.id} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-blackbox-900 font-medium">{post.content.substring(0, 50)}...</p>
                    <p className="text-sm text-blackbox-500">{new Date(post.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    post.status === 'published' ? 'bg-green-100 text-green-700' :
                    post.status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {post.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Products */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blackbox-900 mb-4">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="border rounded-lg p-4">
                <p className="text-sm text-blackbox-500 uppercase">{product.category}</p>
                <h3 className="font-bold text-blackbox-900 mt-2">{product.name}</h3>
                <p className="text-blackbox-gold font-bold mt-2">R$ {product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, color }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className={`inline-block p-3 rounded-lg text-white mb-4 ${color}`}>
      {icon}
    </div>
    <p className="text-blackbox-600 text-sm">{label}</p>
    <p className="text-3xl font-bold text-blackbox-900 mt-2">{value}</p>
  </div>
);
