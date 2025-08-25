'use client';

import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  const scrollToCollections = () => {
    const collectionsSection = document.getElementById('collections');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video/Big 3 Edit But It Took Me 10 Hours To Make.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 video-overlay"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-luxury text-6xl md:text-8xl font-bold mb-6 text-glow">
            Smoughen Perfume
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light tracking-wide">
            Where Anime Meets Fragrance
          </p>
          <button
            onClick={scrollToCollections}
            className="luxury-button text-lg animate-float"
          >
            Explore Collections
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
