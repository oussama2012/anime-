'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-luxury text-2xl font-bold text-gold-400 hover:text-gold-300 transition-colors">
            Smoughen
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${pathname === '/' ? 'text-gold-400' : 'text-white hover:text-gold-400'}`}
            >
              Home
            </Link>
            <Link 
              href="/#collections" 
              className="text-white hover:text-gold-400 transition-colors"
            >
              Collections
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors ${pathname === '/about' ? 'text-gold-400' : 'text-white hover:text-gold-400'}`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${pathname === '/contact' ? 'text-gold-400' : 'text-white hover:text-gold-400'}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gold-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
