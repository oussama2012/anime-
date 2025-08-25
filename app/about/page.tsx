'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-luxury text-6xl md:text-8xl font-bold mb-8 text-glow">
              Smoughen Perfume
            </h1>
            <p className="text-2xl md:text-3xl text-gold-400 mb-12 font-light">
              Where Anime Legends Meet Luxury Fragrance
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-8 text-white">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                <p>
                  Born from a passion for anime culture and luxury fragrances, <span className="text-gold-400 font-semibold">Smoughen Perfume</span> represents the perfect fusion of storytelling and scent. Each fragrance in our collection is meticulously crafted to capture the essence, personality, and legendary spirit of iconic anime characters.
                </p>
                <p>
                  We believe that fragrance is more than just scent—it's an emotional journey, a way to connect with the stories and characters that have shaped our lives. Our master perfumers work tirelessly to translate the complex personalities and epic tales of anime heroes into olfactory masterpieces.
                </p>
                <p>
                  From the determined spirit of Naruto to the strategic brilliance of L, every bottle tells a story worth experiencing.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gold-400/30 anime-glow">
                <h3 className="font-luxury text-3xl font-bold mb-6 text-gold-400">
                  Our Mission
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  To create premium fragrances that bridge the gap between anime culture and luxury perfumery, allowing fans to carry their favorite characters' essence with them wherever they go.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-xl">✨</span>
                  </div>
                  <span className="text-gold-400 font-semibold text-xl">Premium Quality Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-12 text-white">
              Try Before You Buy
            </h2>
            
            <div className="bg-black/80 backdrop-blur-lg rounded-3xl p-12 border border-gold-400/30 anime-glow max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-black font-bold text-3xl">🏪</span>
                </div>
                <h3 className="font-luxury text-3xl font-bold mb-6 text-gold-400">
                  Visit Us at Lefrure
                </h3>
              </div>
              
              <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                <p>
                  We understand that choosing the perfect fragrance is a personal journey. That's why we invite you to experience our anime-inspired perfumes firsthand at our exclusive testing location in <span className="text-gold-400 font-semibold">Lefrure</span>.
                </p>
                <p>
                  Our knowledgeable fragrance consultants will guide you through each scent profile, helping you discover which anime character's essence resonates most with your personality and style.
                </p>
                <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                  <h4 className="text-gold-400 font-semibold text-xl mb-4">What to Expect:</h4>
                  <ul className="space-y-3 text-left max-w-2xl mx-auto">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                      <span>Professional fragrance consultation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                      <span>Test all perfumes in our collection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                      <span>Learn about each character's inspiration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                      <span>Personalized fragrance recommendations</span>
                    </li>
                  </ul>
                </div>
                <p className="text-gold-400 font-semibold text-xl">
                  Because we believe in our quality, we want you to be completely confident in your choice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-luxury text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-black font-bold text-2xl">⚡</span>
              </div>
              <h3 className="font-luxury text-2xl font-bold mb-4 text-gold-400">Authenticity</h3>
              <p className="text-gray-300 leading-relaxed">
                Every fragrance is carefully crafted to authentically represent the character's essence and story.
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-black font-bold text-2xl">💎</span>
              </div>
              <h3 className="font-luxury text-2xl font-bold mb-4 text-gold-400">Luxury</h3>
              <p className="text-gray-300 leading-relaxed">
                Premium ingredients and masterful craftsmanship ensure each bottle meets the highest standards.
              </p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-black font-bold text-2xl">🎌</span>
              </div>
              <h3 className="font-luxury text-2xl font-bold mb-4 text-gold-400">Passion</h3>
              <p className="text-gray-300 leading-relaxed">
                Created by anime fans for anime fans, with deep respect for the source material.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <h2 className="font-luxury text-4xl md:text-5xl font-bold mb-8 text-white">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Discover which anime legend's essence matches your spirit. Explore our collections and find your signature scent.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/#collections" 
                className="luxury-button text-xl px-12 py-4 font-bold"
              >
                Explore Collections
              </Link>
              <Link 
                href="/" 
                className="bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black transition-all duration-300 text-xl px-12 py-4 rounded-full font-bold"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
