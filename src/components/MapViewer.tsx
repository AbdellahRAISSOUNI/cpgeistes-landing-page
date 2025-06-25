'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icon issues
const fixLeafletIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });
};

interface MapViewerProps {
  position: [number, number]; // [latitude, longitude]
  name?: string;
}

const MapViewer = ({ position, name }: MapViewerProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Fix Leaflet icon
    fixLeafletIcon();
    
    // Initialize map
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView(position, 15);
      
      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapRef.current);
      
      // Add marker
      markerRef.current = L.marker(position).addTo(mapRef.current);
      
      // Add popup if name is provided
      if (name && markerRef.current) {
        markerRef.current.bindPopup(name).openPopup();
      }
    } else if (mapRef.current) {
      // Update map view if position changes
      mapRef.current.setView(position, 15);
      
      // Update marker position
      if (markerRef.current) {
        markerRef.current.setLatLng(position);
        
        // Update popup if name is provided
        if (name) {
          markerRef.current.bindPopup(name);
        }
      }
    }
    
    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        markerRef.current = null;
      }
    };
  }, [position, name]);
  
  return <div ref={mapContainerRef} className="h-full w-full" />;
};

export default MapViewer; 