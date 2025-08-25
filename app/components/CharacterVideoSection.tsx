'use client';

import React, { useEffect, useRef } from 'react';
import { Perfume } from '../data/perfumes';

interface CharacterVideoSectionProps {
  perfume: Perfume;
  index: number;
}

export default function CharacterVideoSection({ perfume, index }: CharacterVideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Fullscreen Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={perfume.videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div 
          className="max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          {/* Character Card */}
          <div className="bg-black/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gold-400/30 anime-glow">
            {/* Character Header */}
            <div className="text-center mb-8">
              <div className="inline-block p-6 bg-gradient-to-r from-gold-400/20 to-gold-600/20 rounded-2xl mb-6">
                <h2 className="font-luxury text-4xl md:text-5xl font-bold text-white mb-3 text-glow">
                  {perfume.name}
                </h2>
                <p className="text-gold-400 font-semibold text-2xl md:text-3xl">
                  {perfume.fragrance}
                </p>
              </div>
            </div>

            {/* Story Section */}
            <div className="story-text">
              <p className="text-gray-100 leading-relaxed text-lg md:text-xl font-light">
                {perfume.description}
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-gold-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-gold-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {index === 0 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
}
