'use client';

import Image from 'next/image';
import { FaUser, FaGraduationCap, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa';

const OrganizationalChart = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Organigramme de la Prépa</h2>
            <div className="h-1 w-24 bg-red-500 mt-2"></div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-center text-gray-700">
              <div className="bg-red-100 p-3 rounded-full mr-3">
                <FaUser className="text-red-600 text-xl" />
              </div>
              <div>
                <p className="font-semibold">Direction académique</p>
                <p className="text-sm text-gray-500">Année 2024-2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 relative overflow-hidden">
          {/* Organizational Chart */}
          <div className="flex flex-col items-center">
            {/* BAC Box */}
            <div className="bg-gray-600 text-white px-8 py-4 rounded-lg shadow-md w-64 text-center mb-4 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center mb-2">
                <FaGraduationCap className="text-2xl mr-2" />
                <p className="font-bold text-xl">BAC</p>
              </div>
              <p className="text-sm">Diplôme d&apos;études secondaires</p>
            </div>

            {/* Vertical Line */}
            <div className="w-1 h-10 bg-gray-400"></div>
            <div className="w-1 h-10 bg-gray-400 mb-4"></div>

            {/* SUP Box */}
            <div className="bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md w-64 text-center mb-4 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center mb-2">
                <FaChalkboardTeacher className="text-2xl mr-2" />
                <p className="font-bold text-xl">SUP</p>
              </div>
              <p className="text-sm">Première année préparatoire</p>
            </div>

            {/* Vertical Line */}
            <div className="w-1 h-10 bg-blue-400"></div>
            <div className="w-1 h-10 bg-blue-400 mb-4"></div>

            {/* CPGE Box */}
            <div className="bg-red-600 text-white px-8 py-4 rounded-lg shadow-md w-80 text-center mb-4 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center mb-2">
                <FaGraduationCap className="text-2xl mr-2" />
                <p className="font-bold text-xl">CPGE</p>
              </div>
              <p className="text-sm">Classes Préparatoires aux Grandes Écoles</p>
            </div>

            {/* Vertical Line */}
            <div className="w-1 h-10 bg-red-400"></div>

            {/* Horizontal Line */}
            <div className="w-[700px] max-w-full h-1 bg-red-400 mb-6"></div>

            {/* Bottom Boxes */}
            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center">
                <div className="w-1 h-10 bg-red-400 mb-4"></div>
                <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-md w-56 text-center transform hover:scale-105 transition-transform">
                  <p className="font-bold">TC</p>
                  <p className="text-xs mt-1">Tronc Commun</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-1 h-10 bg-red-400 mb-4"></div>
                <div className="bg-yellow-600 text-white px-6 py-4 rounded-lg shadow-md w-56 text-center transform hover:scale-105 transition-transform">
                  <p className="font-bold">MI</p>
                  <p className="text-xs mt-1">Mathématiques & Informatique</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-1 h-10 bg-red-400 mb-4"></div>
                <div className="bg-purple-600 text-white px-6 py-4 rounded-lg shadow-md w-56 text-center transform hover:scale-105 transition-transform">
                  <p className="font-bold">MR</p>
                  <p className="text-xs mt-1">Mathématiques & Robotique</p>
                </div>
              </div>
            </div>

            {/* Vertical Lines from Bottom Boxes */}
            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-[280px] mt-4">
              <div className="w-1 h-10 bg-green-400"></div>
              <div className="w-1 h-10 bg-purple-400"></div>
            </div>

            {/* Horizontal Line */}
            <div className="w-[700px] max-w-full h-1 bg-gray-400 mb-6 mt-4"></div>

            {/* Final Destination Box */}
            <div className="bg-indigo-600 text-white px-8 py-4 rounded-lg shadow-md w-80 text-center transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center mb-2">
                <FaBriefcase className="text-2xl mr-2" />
                <p className="font-bold text-xl">INGÉNIEUR / MANAGER</p>
              </div>
              <p className="text-sm">Écoles d&apos;ingénieurs et de commerce</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationalChart; 