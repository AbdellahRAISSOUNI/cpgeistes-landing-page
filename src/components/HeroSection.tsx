'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const forumImages = [
  '/images/real/forum-event.jpg',
  '/images/real/classroom.jpg',
  '/images/real/engineering-students.jpg',
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === forumImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side - Forum Images */}
          <div className="w-full md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            {forumImages.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={src}
                  alt={`Forum image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="text-white text-2xl font-semibold">Forums des Grandes Écoles</h2>
              <p className="text-white/90 mt-2">
                Rencontrez les représentants des écoles et découvrez votre futur parcours
              </p>
            </div>
          </div>

          {/* Right side - Login Box */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">LOGIN BOX</h2>
              <div className="h-1 w-16 bg-red-500 mx-auto mt-2"></div>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="prenom.nom@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="••••••••"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Se souvenir de moi
                  </label>
                </div>
                
                <a href="#" className="text-sm font-medium text-red-600 hover:text-red-500">
                  Mot de passe oublié?
                </a>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 