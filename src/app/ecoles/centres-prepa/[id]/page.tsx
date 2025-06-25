'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaGlobe,
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Import Leaflet dynamically to avoid SSR issues
const MapComponent = dynamic(() => import('@/components/MapViewer'), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-100 flex items-center justify-center rounded-md">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-600"></div>
    </div>
  ),
});

// Define the CentrePrepa type
type CentrePrepa = {
  _id: string;
  name: string;
  description: string;
  address?: string;
  city?: string;
  postalCode?: string;
  phone?: string;
  email?: string;
  website?: string;
  location: {
    type: string;
    coordinates: number[];
  };
  images: {
    _id: string;
    filename: string;
    contentType: string;
  }[];
  createdAt: string;
  updatedAt: string;
};

export default function CentrePrepaDetailPage() {
  const params = useParams();
  const [centrePrepa, setCentrePrepa] = useState<CentrePrepa | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Fetch centre de prépa details
  useEffect(() => {
    const fetchCentrePrepa = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/centres-prepa/${params.id}`);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || errorData.details || `Error: ${response.status}`);
        }
        
        const data = await response.json();
        setCentrePrepa(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching centre de prépa:', err);
        setError(err instanceof Error ? 
          `Erreur: ${err.message}` : 
          'Impossible de charger les détails du centre de prépa. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchCentrePrepa();
  }, [params.id]);
  
  // Navigate to next image
  const nextImage = () => {
    if (centrePrepa && currentImageIndex < centrePrepa.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
  
  // Navigate to previous image
  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  
  // Format address
  const formatAddress = () => {
    if (!centrePrepa) return '';
    
    const parts = [];
    if (centrePrepa.address) parts.push(centrePrepa.address);
    if (centrePrepa.postalCode) parts.push(centrePrepa.postalCode);
    if (centrePrepa.city) parts.push(centrePrepa.city);
    
    return parts.join(', ');
  };
  
  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
  
  // Error state
  if (error || !centrePrepa) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-50 text-red-700 p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-xl font-semibold mb-2">Erreur</h2>
            <p>{error || 'Centre de prépa non trouvé'}</p>
            <Link 
              href="/ecoles/centres-prepa"
              className="mt-4 inline-flex items-center text-red-600 hover:text-red-800"
            >
              <FaArrowLeft className="mr-2" /> Retour à la liste des centres
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            href="/ecoles/centres-prepa"
            className="inline-flex items-center text-red-600 hover:text-red-800"
          >
            <FaArrowLeft className="mr-2" /> Retour à la liste des centres
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Image Gallery */}
          <div className="relative">
            {centrePrepa.images && centrePrepa.images.length > 0 ? (
              <div className="relative h-96">
                <Image
                  src={`/api/centres-prepa/${centrePrepa._id}/images/${currentImageIndex}`}
                  alt={centrePrepa.name}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Image navigation controls */}
                {centrePrepa.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      disabled={currentImageIndex === 0}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-3 disabled:opacity-50 hover:bg-white/90 transition-colors"
                      aria-label="Image précédente"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={nextImage}
                      disabled={currentImageIndex === centrePrepa.images.length - 1}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-3 disabled:opacity-50 hover:bg-white/90 transition-colors"
                      aria-label="Image suivante"
                    >
                      <FaChevronRight />
                    </button>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                      <div className="bg-white/70 px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {centrePrepa.images.length}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Aucune image disponible</span>
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{centrePrepa.name}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left column: Description */}
              <div className="md:col-span-2">
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-line">{centrePrepa.description}</p>
                </div>
              </div>
              
              {/* Right column: Contact info */}
              <div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Informations de contact</h2>
                  
                  {formatAddress() && (
                    <div className="flex items-start mb-3">
                      <FaMapMarkerAlt className="text-red-600 mt-1 mr-3" />
                      <span className="text-gray-700">{formatAddress()}</span>
                    </div>
                  )}
                  
                  {centrePrepa.phone && (
                    <div className="flex items-center mb-3">
                      <FaPhone className="text-red-600 mr-3" />
                      <a href={`tel:${centrePrepa.phone}`} className="text-gray-700 hover:text-red-600">
                        {centrePrepa.phone}
                      </a>
                    </div>
                  )}
                  
                  {centrePrepa.email && (
                    <div className="flex items-center mb-3">
                      <FaEnvelope className="text-red-600 mr-3" />
                      <a href={`mailto:${centrePrepa.email}`} className="text-gray-700 hover:text-red-600 break-all">
                        {centrePrepa.email}
                      </a>
                    </div>
                  )}
                  
                  {centrePrepa.website && (
                    <div className="flex items-center">
                      <FaGlobe className="text-red-600 mr-3" />
                      <a 
                        href={centrePrepa.website.startsWith('http') ? centrePrepa.website : `http://${centrePrepa.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-red-600 break-all"
                      >
                        {centrePrepa.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Map */}
            {centrePrepa.location && centrePrepa.location.coordinates && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Localisation</h2>
                <div className="h-64 rounded-lg overflow-hidden">
                  <MapComponent 
                    position={[centrePrepa.location.coordinates[1], centrePrepa.location.coordinates[0]]} 
                    name={centrePrepa.name}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 