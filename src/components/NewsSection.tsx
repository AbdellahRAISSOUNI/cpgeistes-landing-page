'use client';

const NewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Coming Soon - Smaller */}
        <div className="flex items-center justify-center mb-16">
          <div className="relative">
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-full px-10 py-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-1 font-['Inter',sans-serif]">Coming Soon</h2>
                <p className="text-sm opacity-90">Actualités</p>
              </div>
            </div>
            
            <div className="absolute -top-1 -left-1 w-4 h-4 bg-red-300 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-red-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Korrid Section */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-center mb-16 font-['Inter',sans-serif]">
            <span className="text-red-600">Korrid</span> : Travail intense
          </h2>
          
          <div className="flex flex-col xl:flex-row gap-12 items-start">
            {/* Left Section - Much smaller and more elegant */}
            <div className="w-full xl:w-1/4 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden">
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <p className="text-white leading-relaxed mb-6 font-['Inter',sans-serif] text-sm">
                  Tout ce dont tu souffres et que tu considères comme un problème a une seule solution. On le dit en Arabia Ta3rabt en darija marocaine <span className="font-bold text-yellow-300">KORRID</span>. Et pour que tu puisses te concentrer sur KORRID, il existe une solution, gratuite :
                </p>
                <p className="text-white leading-relaxed mb-8 font-bold text-center text-lg">
                  Clique ici, travaille, et rends tes parents fiers !!!
                </p>
                <button className="w-full bg-white text-red-600 px-6 py-4 rounded-xl font-bold transition-all transform hover:scale-105 duration-200 shadow-lg hover:shadow-xl">
                  Commencer KORRID
                </button>
              </div>
            </div>

            {/* Right Section - Much more prominent */}
            <div className="w-full xl:w-3/4 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex flex-col lg:flex-row min-h-[500px]">
                {/* Text section */}
                <div className="w-full lg:w-3/5 p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8 font-['Inter',sans-serif]">
                    Est-ce que ça te dit quelque chose ?
                  </h3>
                  <div className="space-y-4 text-gray-700 font-['Inter',sans-serif]">
                    <p className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">•</span>
                      <span>Tu fais des cours supplémentaires et t'es blindé de marketing de profs ?</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">•</span>
                      <span>T'as du mal à croire en ton propre potentiel ?</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">•</span>
                      <span>Tu penses que tu vas rater les concours si t'as pas de cours en ligne ?</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">•</span>
                      <span>T'arrives pas à te concentrer quand tu révises dans ta chambre ?</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">•</span>
                      <span>Tu te dis que la prépa, c'est peut-être pas ta place ?</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">•</span>
                      <span>La concurrence est trop féroce dans ta classe ?</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">•</span>
                      <span>Les autres prennent des cours en plus et tu crois qu'ils vont te dépasser ?</span>
                    </p>
                    <p className="flex items-start">
                      <span className="text-red-500 mr-3 text-xl">•</span>
                      <span>Le niveau est trop bas dans ta classe et t'arrives plus à suivre ?</span>
                    </p>
                  </div>
                </div>
                
                {/* Image section - Much bigger and more prominent */}
                <div className="w-full lg:w-2/5 relative">
                  <img 
                    src="/0006.jpg" 
                    alt="Student working" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 