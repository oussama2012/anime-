'use client';

import React from 'react';
import Image from 'next/image';
import { Perfume, orderOnWhatsApp } from '../data/perfumes';

interface PerfumeCardProps {
  perfume: Perfume;
  packName: string;
  packPrice: string;
  index: number;
}

export default function PerfumeCard({ perfume, packName, packPrice, index }: PerfumeCardProps) {
  return (
    <div 
      className="character-card rounded-3xl overflow-hidden anime-glow animate-slide-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="p-8">
        <div className="text-center mb-6">
          <div className="inline-block p-4 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-2xl mb-4">
            <h3 className="font-luxury text-2xl font-bold text-white mb-2 text-glow">
              {perfume.name}
            </h3>
            <p className="text-gold-400 font-semibold text-xl">
              {perfume.fragrance}
            </p>
          </div>
        </div>
        
        <div className="story-text mb-6">
          <p className="text-gray-200 leading-relaxed text-lg">
            {perfume.description}
          </p>
        </div>
      </div>
    </div>
  );
}
