'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileEcolesOpen, setIsMobileEcolesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileEcoles = () => {
    setIsMobileEcolesOpen(!isMobileEcolesOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#fafafa] shadow-sm">
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
              <div className="flex items-center">
                <img 
                  src="/logo.jpg" 
                  alt="CPGEISTES Logo" 
                  className="h-24 w-auto mr-3"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-semibold text-gray-800">CPGEISTES</span>
                  <span className="text-xs text-gray-500">Classes Préparatoires aux Grandes Écoles</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
              Accueil
            </Link>
            
            {/* Écoles Dropdown - Now using hover instead of click */}
            <div className="relative group">
              <div className="flex items-center text-gray-700 hover:text-red-600 transition-colors cursor-pointer">
                Écoles
                <FaChevronDown className="ml-1 h-3 w-3" />
              </div>
              
              {/* Dropdown menu that appears on hover */}
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <Link 
                  href="/ecoles/centres-prepa" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                >
                  Centres de prépa
                </Link>
                <Link 
                  href="/ecoles/filieres-prepa" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                >
                  Filières de prépa
                </Link>
              </div>
            </div>
            
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
              
              {/* Mobile Écoles Dropdown */}
              <li>
                <button 
                  onClick={toggleMobileEcoles}
                  className="flex items-center w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  Écoles
                  <FaChevronDown className={`ml-1 h-3 w-3 transition-transform ${isMobileEcolesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileEcolesOpen && (
                  <ul className="pl-6 mt-1 space-y-1">
                    <li>
                      <Link href="/ecoles/centres-prepa" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                        Centres de prépa
                      </Link>
                    </li>
                    <li>
                      <Link href="/ecoles/filieres-prepa" className="block px-3 py-2 rounded-md hover:bg-gray-100">
                        Filières de prépa
                      </Link>
                    </li>
                  </ul>
                )}
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