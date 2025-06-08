'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Mock data for news cards
const newsItems = [
  {
    id: 1,
    title: 'Résultats des concours 2024',
    date: '15 juillet 2024',
    excerpt: 'Découvrez les résultats exceptionnels de nos étudiants aux concours des grandes écoles.',
    image: '/images/real/news-1.jpg',
  },
  {
    id: 2,
    title: 'Conférence scientifique',
    date: '22 juin 2024',
    excerpt: 'Une conférence sur les dernières avancées en physique quantique par le Pr. Martin.',
    image: '/images/real/news-2.jpg',
  },
  {
    id: 3,
    title: 'Journée portes ouvertes',
    date: '10 mai 2024',
    excerpt: 'Venez découvrir notre établissement lors de notre journée portes ouvertes annuelle.',
    image: '/images/real/news-3.jpg',
  },
  {
    id: 4,
    title: 'Nouveau partenariat',
    date: '5 avril 2024',
    excerpt: 'Notre CPGE signe un partenariat avec l\'École Polytechnique pour faciliter l\'intégration.',
    image: '/images/real/engineering-students.jpg',
  },
  {
    id: 5,
    title: 'Concours de mathématiques',
    date: '15 mars 2024',
    excerpt: 'Nos étudiants brillent au concours international de mathématiques.',
    image: '/images/real/classroom.jpg',
  },
];

const NewsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setScrollPosition(scrollContainerRef.current.scrollLeft - 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setScrollPosition(scrollContainerRef.current.scrollLeft + 300);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">NEWS</h2>
            <div className="h-1 w-16 bg-red-500 mt-2"></div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              aria-label="Scroll left"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              aria-label="Scroll right"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="min-w-[300px] max-w-[300px] bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow snap-start"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-gray-500 mb-2">{item.date}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.excerpt}</p>
                  <button className="mt-4 text-red-600 font-medium hover:text-red-700 transition-colors flex items-center">
                    Lire plus
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default NewsSection; 