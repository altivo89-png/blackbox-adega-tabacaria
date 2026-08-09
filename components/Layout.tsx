'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome, FaImage, FaCalendar, FaChartBar, FaCog } from 'react-icons/fa';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-blackbox-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blackbox-900 text-white shadow-lg">
        <div className="p-6 border-b border-blackbox-800">
          <h1 className="text-2xl font-bold text-blackbox-gold">BLACKBOX</h1>
          <p className="text-sm text-blackbox-400">Adega & Tabacaria</p>
        </div>
        
        <nav className="p-6 space-y-2">
          <NavLink href="/" icon={<FaHome />} label="Dashboard" />
          <NavLink href="/products" icon={<FaImage />} label="Produtos" />
          <NavLink href="/posts" icon={<FaCalendar />} label="Posts" />
          <NavLink href="/analytics" icon={<FaChartBar />} label="Análiticas" />
          <NavLink href="/settings" icon={<FaCog />} label="Configurações" />
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, label }) => (
  <Link
    href={href}
    className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blackbox-800 transition-colors duration-200"
  >
    <span className="text-lg">{icon}</span>
    <span>{label}</span>
  </Link>
);
