'use client';

import { motion } from 'framer-motion';

// Followers images array
const followersImages = [
  '/followers/488911990_1228830355249217_7729087460518878701_n.jpg',
  '/followers/ebp_english_school_logo.jpeg',
  '/followers/dbe58ca2-8b59-4b5f-a60b-071c94806a24_thumb.jpg',
  '/followers/images (1).png',
  '/followers/téléchargement.png',
  '/followers/download.jpg',
  '/followers/download.png',
  '/followers/images.png',
  '/followers/346684450_1421181562084248_6219552500086925411_n.jpg',
  '/followers/469014608_912444513903462_8566176560692303617_n.jpg',
  '/followers/WhatsApp_Image_2025-01-19_at_18.21.09_9489df36-removebg-preview (1).png'
];

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

        {/* Social Media Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Inter',sans-serif] text-gray-800">
            Pages Réseaux Sociaux et Communauté
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-6">
            {/* Instagram - Featured with trophy and verification */}
            <a 
              href="https://www.instagram.com/cpgeistes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4 flex flex-col items-center justify-center min-h-[110px] border-2 border-pink-200"
            >
              {/* Trophy for first place */}
              <div className="absolute top-1 left-1">
                <img 
                  src="/0010.png" 
                  alt="Trophy" 
                  className="w-7 h-7"
                />
              </div>
              
              {/* Instagram Verification badge - Real design */}
              <div className="absolute top-1 right-1">
                <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none">
                  <path d="M19.998 3.094L14.638 0l-2.972 5.15H5.432v6.354L0 14.64l3.094 5.36L0 25.361l5.432 3.137v6.353h6.234L14.638 40l5.36-3.094L25.358 40l2.97-5.15h6.236v-6.353L40 25.361l-3.094-5.36L40 14.64l-5.435-3.137V5.15h-6.237L25.358 0l-5.36 3.094z" fill="#3897F0"/>
                  <path d="M13.2 20.5l4.9 4.9L29.8 13.7" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <div className="text-pink-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="url(#instagram-gradient)" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-xs font-semibold text-pink-700 group-hover:text-pink-800 transition-colors">Instagram</span>
            </a>

                        {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@cpgeistes.official?_t=8s1GOj1MmIg&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAad9J1CwAgKsl35tjufbov-AKqxMOee9mvhl6q4fy8WnaS8lC7t502ubkoP5SA_aem_49PLCJWXHsOtNzqOszqy9g" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4 flex flex-col items-center justify-center min-h-[110px] border border-gray-100"
            >
              <div className="text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-black transition-colors">TikTok</span>
            </a>

            {/* Threads */}
            <a 
              href="https://www.threads.com/@cpgeistes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4 flex flex-col items-center justify-center min-h-[110px] border border-gray-100"
            >
              <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                <img src="/threads.png" alt="Threads Logo" className="w-7 h-7" />
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-black transition-colors">Threads</span>
            </a>

            {/* Facebook */}
            <a 
              href="https://web.facebook.com/cpgeistes.officiel/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4 flex flex-col items-center justify-center min-h-[110px] border border-gray-100"
            >
              <div className="text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">Facebook</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4 flex flex-col items-center justify-center min-h-[110px] border border-gray-100"
            >
              <div className="text-blue-700 mb-2 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-700 transition-colors">LinkedIn</span>
            </a>

            {/* YouTube */}
            <a 
              href="https://www.youtube.com/@cpgeistes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4 flex flex-col items-center justify-center min-h-[110px] border border-gray-100"
            >
              <div className="text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-red-600 transition-colors">YouTube</span>
            </a>

            {/* WhatsApp */}
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4 flex flex-col items-center justify-center min-h-[110px] border border-gray-100"
            >
              <div className="text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
                    </svg>
                </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-green-600 transition-colors">WhatsApp</span>
            </a>

            {/* OnlyFans */}
            <a 
              href="https://onlyfans.wtf/cpgeistes.official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4 flex flex-col items-center justify-center min-h-[110px] border border-gray-100"
            >
              <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                <img src="/OnlyFans-Symbol.png" alt="OnlyFans Logo" className="w-7 h-7" />
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-blue-500 transition-colors">OnlyFans</span>
            </a>
          </div>
        </div>

        {/* Followers Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Inter',sans-serif] text-gray-800">
            Nos Followers
          </h2>
          
          <div className="relative overflow-hidden">
            {/* Fade gradients on the sides */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Infinite scrolling carousel */}
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -(followersImages.length * (128 + 24))] // 128px width + 24px gap
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear"
                }
              }}
            >
              {/* First set of images */}
              {followersImages.map((image, index) => (
                <div key={`first-${index}`} className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100 p-2 flex items-center justify-center">
                    <img
                      src={image}
                      alt={`Follower ${index + 1}`}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {followersImages.map((image, index) => (
                <div key={`second-${index}`} className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100 p-2 flex items-center justify-center">
                    <img
                      src={image}
                      alt={`Follower ${index + 1}`}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                </div>
              </div>
            ))}
            </motion.div>
          </div>
        </div>

        {/* Organigrame Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-16 font-['Inter',sans-serif] text-gray-800">
            Organigrame de la Prepa
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Cycle d'Ingénieur */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-center mb-6 font-['Inter',sans-serif] text-gray-800">
                  Cycle d'Ingénieur
                </h3>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <img
                    src="/followers/ing.png"
                    alt="Organigrame Cycle d'Ingénieur"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Cycle Master */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-center mb-6 font-['Inter',sans-serif] text-gray-800">
                  Cycle Master
                </h3>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <img
                    src="/followers/manager.png"
                    alt="Organigrame Cycle Master"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional description */}
          <div className="mt-12 text-center max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 font-['Inter',sans-serif] leading-relaxed">
              Ces organigrammes présentent les différents parcours disponibles dans les Classes Préparatoires aux Grandes Écoles, 
              du baccalauréat jusqu'aux formations supérieures spécialisées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 