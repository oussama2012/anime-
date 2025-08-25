'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { perfumePacks, orderOnWhatsApp } from '../../data/perfumes';
import Navigation from '../../components/Navigation';
import CharacterVideoSection from '../../components/CharacterVideoSection';

export default function PackPage() {
  const params = useParams();
  const packId = params.id as string;
  
  const pack = perfumePacks.find(p => p.id === packId);

  if (!pack) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Pack Not Found</h1>
          <Link href="/" className="luxury-button">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-96 overflow-hidden mt-16">
        <Image
          src={pack.image}
          alt={pack.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="font-luxury text-5xl md:text-7xl font-bold mb-4 text-glow">
              {pack.name}
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              3 Premium Anime-Inspired Perfumes in One Luxury Pack
            </p>
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="text-center">
                <span className="text-3xl font-bold text-gold-400">{pack.price}</span>
                <p className="text-gray-300">Complete Pack</p>
              </div>
            </div>
            <button
              onClick={() => orderOnWhatsApp(pack.name, pack.price)}
              className="luxury-button text-xl px-12 py-4"
            >
              Order Now on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Character Video Stories */}
      <div className="relative">
        {pack.perfumes.map((perfume, index) => (
          <CharacterVideoSection 
            key={perfume.name} 
            perfume={perfume}
            index={index}
          />
        ))}
      </div>

      {/* Order Section */}
      <section className="relative py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 border border-gold-400/30 anime-glow">
            <h3 className="font-luxury text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
              Complete Your Journey
            </h3>
            <p className="text-gray-200 mb-8 text-xl leading-relaxed">
              Experience all three legendary fragrances in the <span className="text-gold-400 font-bold">{pack.name}</span>
              <br />
              <span className="text-2xl font-bold text-gold-400">{pack.price}</span> for the complete collection
            </p>
            <button
              onClick={() => orderOnWhatsApp(pack.name, pack.price)}
              className="luxury-button text-2xl px-16 py-6 mb-6 font-bold"
            >
              Order {pack.name}
            </button>
            <p className="text-gray-400">
              Message us instantly on WhatsApp for immediate ordering
            </p>
          </div>
        </div>
      </section>

      {/* Back to Collections */}
      <section className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <Link 
            href="/#collections" 
            className="inline-flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors text-lg font-semibold"
          >
            <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Explore Other Packs</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
