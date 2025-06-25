'use client';

const HeroSection = () => {

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch gap-6">
          {/* Left side - CPGEISTES Description */}
          <div className="w-full lg:w-2/3 relative bg-red-600 rounded-lg shadow-xl p-8 text-white font-['Inter',sans-serif]">
            {/* Logo positioned to be half inside, half outside the top-right corner */}
            <div className="absolute -top-8 -right-8">
              <img 
                src="/logo.jpg" 
                alt="CPGEISTES Logo" 
                className="h-32 w-auto"
              />
            </div>
            
            <div className="pr-14">
              <p className="text-sm leading-relaxed mb-4">
                <span className="text-xl font-bold">CPGEISTES est</span> la plus grande communauté et plateforme dédiée aux étudiants des Classes Préparatoires marocaines. Reconnue, suivie et gérée directement par les étudiants, elle est construite par eux, pour eux.
              </p>
              
              <p className="text-sm leading-relaxed mb-4">
                Pourquoi tant de succès ? Parce que CPGE est un univers complexe et exigeant, un véritable matrix où l'entraide devient une nécessité. C'est de ce besoin qu'est né CPGEISTES : une plateforme collaborative où les étudiants partagent ressources, conseils et informations clés pour briller aux concours et intégrer les meilleures Grandes Écoles au Maroc comme en France.
              </p>
              
              <p className="text-sm leading-relaxed mb-4 font-semibold">
                Notre mission : connecter, orienter et élever la communauté prépa vers l'excellence.
              </p>
              
              <div className="space-y-1">
                <p className="text-sm">
                  📌 Rejoignez-nous et devenez, vous aussi, membre de l'élite étudiante.
                </p>
                <p className="text-sm">
                  📈 Ensemble, visons le top des classements et l'avenir que vous méritez.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Login Box */}
          <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-xl p-6 lg:p-8 border border-gray-100 font-['Inter',sans-serif]">
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