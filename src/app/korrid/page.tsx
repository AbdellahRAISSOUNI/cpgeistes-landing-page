export default function KorridPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-8xl md:text-9xl font-bold text-red-600 mb-8 animate-pulse">
          Korrid
        </h1>
        <p className="text-4xl md:text-5xl font-semibold text-gray-700 mb-4">
          Coming Soon
        </p>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Une nouvelle expérience révolutionnaire arrive bientôt sur CPGEISTES
        </p>
        <div className="mt-12">
          <div className="inline-flex items-center space-x-2 text-red-600">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
} 