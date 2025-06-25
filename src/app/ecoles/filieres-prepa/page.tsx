import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FilieresPrepaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Filières de Prépa</h1>
          <p className="text-gray-600">
            Découvrez les différentes filières de classes préparatoires aux grandes écoles au Maroc.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-red-600 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            Page en construction
          </h3>
          <p className="text-gray-500 mb-6">
            Cette page est actuellement en cours de développement et sera disponible prochainement.
          </p>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 