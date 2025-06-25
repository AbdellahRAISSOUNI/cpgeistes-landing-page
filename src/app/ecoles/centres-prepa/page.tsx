import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Static data for CPGE centers
const centresPrepa = [
  {
    id: '1',
    name: 'Lycée Mohammed V - Casablanca',
    description: 'Centre de préparation aux grandes écoles situé au cœur de Casablanca, offrant des formations d\'excellence en sciences et technologies.',
    city: 'Casablanca',
    phone: '+212 5 22 22 22 22',
    email: 'contact@lycee-mohammed5.ma',
    website: 'https://lycee-mohammed5.ma',
    image: '/images/real/classroom.jpg'
  },
  {
    id: '2',
    name: 'Lycée Ibn Sina - Rabat',
    description: 'Établissement prestigieux de la capitale, spécialisé dans les classes préparatoires scientifiques et commerciales.',
    city: 'Rabat',
    phone: '+212 5 37 77 77 77',
    email: 'info@lycee-ibnsina.ma',
    website: 'https://lycee-ibnsina.ma',
    image: '/images/real/engineering-students.jpg'
  },
  {
    id: '3',
    name: 'Lycée Al Khawarizmi - Marrakech',
    description: 'Centre d\'excellence dans le sud du Maroc, formant les futurs ingénieurs et scientifiques du pays.',
    city: 'Marrakech',
    phone: '+212 5 24 44 44 44',
    email: 'contact@lycee-alkhawarizmi.ma',
    website: 'https://lycee-alkhawarizmi.ma',
    image: '/images/real/forum-event.jpg'
  }
];

export default function CentresPrepaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Centres de Préparation aux Grandes Écoles</h1>
          <p className="text-gray-600">
            Découvrez les principaux centres de classes préparatoires aux grandes écoles au Maroc.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centresPrepa.map((centre) => (
            <div 
              key={centre.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={centre.image}
                  alt={centre.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{centre.name}</h2>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <FaMapMarkerAlt className="mr-2 text-red-600" />
                  <span>{centre.city}</span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {centre.description.length > 150 
                    ? centre.description.substr(0, 150) + '...' 
                    : centre.description}
                </p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  {centre.phone && (
                    <div className="flex items-center">
                      <FaPhone className="mr-2 text-red-600" />
                      <span>{centre.phone}</span>
                    </div>
                  )}
                  {centre.email && (
                    <div className="flex items-center">
                      <FaEnvelope className="mr-2 text-red-600" />
                      <span>{centre.email}</span>
                    </div>
                  )}
                  {centre.website && (
                    <div className="flex items-center">
                      <FaGlobe className="mr-2 text-red-600" />
                      <a 
                        href={centre.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Site web
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 