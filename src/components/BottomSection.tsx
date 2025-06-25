'use client';

import Link from 'next/link';
import { FaQuestionCircle } from 'react-icons/fa';

const BottomSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Speech Bubble */}
          <div className="w-full md:w-2/3 relative">
            <div className="bg-gray-100 p-8 rounded-lg shadow-sm relative">
              <div className="absolute top-6 right-0 h-4 w-4 bg-gray-100 transform rotate-45 translate-x-2"></div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mot du Fondateur</h3>
              <p className="text-gray-700 leading-relaxed">
                Bienvenue sur le site de notre CPGE. Notre mission est de préparer nos étudiants à intégrer 
                les meilleures écoles d&apos;ingénieurs en leur offrant un enseignement de qualité, un encadrement 
                personnalisé et un environnement propice à l&apos;excellence académique. Notre équipe pédagogique 
                expérimentée s&apos;engage à développer le potentiel de chaque étudiant pour lui permettre de 
                réussir dans son parcours.
              </p>
              <div className="mt-6 flex items-center">
                <div className="h-px bg-gray-300 flex-grow"></div>
                <span className="px-4 text-sm text-gray-500 italic">Fondateur Abderrahman Tata</span>
                <div className="h-px bg-gray-300 flex-grow"></div>
              </div>
            </div>
          </div>

          {/* FAQ Section Indicator */}
          <div className="w-full md:w-1/3">
            <div className="bg-red-50 p-8 rounded-lg border border-red-100 text-center hover:shadow-md transition-shadow">
              <FaQuestionCircle className="text-red-500 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Questions fréquentes</h3>
              <p className="text-gray-600 mb-6">
                Trouvez les réponses à toutes vos questions concernant notre CPGE, les admissions, 
                et la vie étudiante.
              </p>
              <Link 
                href="/faq" 
                className="inline-block bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors"
              >
                Consulter la FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomSection; 