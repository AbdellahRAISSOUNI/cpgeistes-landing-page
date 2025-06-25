'use client';

import Link from 'next/link';
import { FaQuestionCircle } from 'react-icons/fa';

const BottomSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Founder Section */}
          <div className="w-full lg:w-2/3 relative">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
              <div className="absolute top-8 right-0 h-6 w-6 bg-gradient-to-br from-gray-50 to-white transform rotate-45 translate-x-3 border-r border-b border-gray-100"></div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Founder Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <img
                      src="/followers/0014.png"
                      alt="Fondateur Abderrahman Tata"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Founder Message */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6 font-['Inter',sans-serif]">Mot du Fondateur</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4 font-['Inter',sans-serif]">
                    <p className="text-lg">
                      <span className="text-2xl text-red-600">«</span> Chers étudiants,
                    </p>
                    <p>
                      Je veux que vous fassiez partie des meilleurs, des premiers, des futurs leaders et ingénieurs. 
                      Travaillez avec rigueur, ne perdez pas de temps – que ce soit en classes préparatoires ou dans 
                      tout autre établissement. Soyez la meilleure version de vous-mêmes.
                    </p>
                    <p>
                      Évitez les excuses, concentrez-vous sur vos révisions. Si vous avez du mal à vous focaliser, 
                      je vous ai conçu cette plateforme gratuite basée sur la méthode KORRID pour vous aider à vous 
                      recentrer efficacement.
                    </p>
                    <p>
                      La version premium est payante ? Ce n'est pas moi que vous payez, c'est l'intelligence artificielle. 
                      Je vous offre cela bénévolement, pour une seule raison : vous voir réussir et hisser les classes 
                      préparatoires au plus haut niveau de prestige.
                    </p>
                    <p>
                      En retour, je ne vous demande qu'une chose : un douaa sincère pour moi et pour ma famille.
                    </p>
                    <p>
                      Pour suivre toutes les nouveautés, connectez-vous à CPGEISTES sur les réseaux sociaux pendant 
                      vos moments de repos.
                    </p>
                    <p className="text-lg font-semibold text-red-600">
                      Rendez vos parents fiers de vous. ❤️❤️❤️❤️❤️❤️
                      <span className="text-2xl text-red-600"> »</span>
                    </p>
                  </div>
                  <div className="mt-8 flex items-center">
                    <div className="h-px bg-gradient-to-r from-red-300 to-transparent flex-grow"></div>
                    <span className="px-6 text-lg text-gray-600 font-semibold font-['Inter',sans-serif]">
                      Fondateur Abderrahman Tata
                    </span>
                    <div className="h-px bg-gradient-to-l from-red-300 to-transparent flex-grow"></div>
                  </div>
                </div>
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