'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <Link href="/" className="flex items-center">
              <div className="relative h-16 w-16 mr-2">
                <Image
                  src="/images/cpge-harvard-logo.svg"
                  alt="CPGE Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-gray-800">CPGEISTES</span>
                <span className="text-xs text-gray-500">Classes Préparatoires aux Grandes Écoles</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
              Accueil
            </Link>
            <Link href="/ecole" className="text-gray-700 hover:text-red-600 transition-colors">
              École
            </Link>
            <Link href="/bibliotheque" className="text-gray-700 hover:text-red-600 transition-colors">
              Bibliothèque
            </Link>
            <Link href="/cours" className="text-gray-700 hover:text-red-600 transition-colors">
              Cours
            </Link>
            <Link href="/orientation" className="text-gray-700 hover:text-red-600 transition-colors">
              Orientation
            </Link>
            <Link href="/forums" className="text-gray-700 hover:text-red-600 transition-colors">
              Forums
            </Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-red-600 transition-colors">
              À propos
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center ml-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="bg-gray-100 rounded-full py-2 pl-10 pr-4 w-48 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaSearch />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pt-3 border-t border-gray-200">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/ecole" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  École
                </Link>
              </li>
              <li>
                <Link href="/bibliotheque" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Bibliothèque
                </Link>
              </li>
              <li>
                <Link href="/cours" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Cours
                </Link>
              </li>
              <li>
                <Link href="/orientation" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Orientation
                </Link>
              </li>
              <li>
                <Link href="/forums" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  Forums
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                  À propos
                </Link>
              </li>
            </ul>
            {/* Mobile Search */}
            <div className="mt-3 px-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="bg-gray-100 rounded-full py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <FaSearch />
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 