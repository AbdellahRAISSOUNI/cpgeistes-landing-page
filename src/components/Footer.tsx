'use client';

import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-red-400" />
                <span>123 Avenue des Sciences, 75000 Paris</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-red-400" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-red-400" />
                <span>contact@cpgeistes.fr</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/admission" className="hover:text-red-400 transition-colors">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="/calendrier" className="hover:text-red-400 transition-colors">
                  Calendrier académique
                </Link>
              </li>
              <li>
                <Link href="/ressources" className="hover:text-red-400 transition-colors">
                  Ressources pédagogiques
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="hover:text-red-400 transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400 transition-colors">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-red-600 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-red-600 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-red-600 transition-colors">
                <FaLinkedin />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
              </p>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <button className="bg-red-600 px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} CPGE Sciences. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 