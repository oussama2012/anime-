'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { perfumePacks, orderOnWhatsApp } from '../data/perfumes';

export default function CollectionsGrid() {
  return (
    <section id="collections" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-luxury text-5xl md:text-6xl font-bold mb-6 text-glow">
            Our Collections
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover luxury fragrances inspired by your favorite anime characters. 
            Each collection captures the essence and spirit of legendary heroes and villains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {perfumePacks.map((pack, index) => (
            <div
              key={pack.id}
              className="group block"
            >
              <div 
                className="anime-border character-card rounded-3xl overflow-hidden anime-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={pack.image}
                    alt={pack.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  {/* Anime-style corner decoration */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-gold-400 opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-gold-400 opacity-60"></div>
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-6 border border-gold-400/30">
                      <h3 className="font-luxury text-3xl font-bold text-white mb-3 text-glow">
                        {pack.name}
                      </h3>
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-gray-300 text-lg">
                          3 Legendary Fragrances
                        </p>
                        <p className="text-gold-400 text-2xl font-bold animate-pulse">
                          {pack.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-gradient-to-b from-gray-900 to-black">
                  <div className="space-y-4 mb-6">
                    <h4 className="text-gold-400 font-semibold text-lg mb-3">Heroes & Legends:</h4>
                    {pack.perfumes.map((perfume, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                        <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                        <span className="text-white font-semibold flex-1">{perfume.name}</span>
                        <span className="text-gold-400 font-medium">{perfume.fragrance}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Link
                      href={`/pack/${pack.id}`}
                      className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 text-white text-center py-4 rounded-2xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 font-semibold text-lg border border-gray-600 hover:border-gold-400"
                    >
                      Discover Stories
                    </Link>
                    <button
                      onClick={() => orderOnWhatsApp(pack.name, pack.price)}
                      className="flex-1 luxury-button text-center text-lg py-4 rounded-2xl font-bold"
                    >
                      Order Pack
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
