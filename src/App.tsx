import React from 'react';
import Globe from './components/Globe';
import { Globe as GlobeIcon, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GlobeIcon className="w-8 h-8 text-blue-300" />
            <h1 className="text-4xl font-bold text-white">3D Earth Globe</h1>
          </div>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Explore our beautiful planet with interactive 3D visualization powered by CesiumJS
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-red-300">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium">Featuring New Delhi, India</span>
          </div>
        </div>

        {/* Globe Container */}
        <div className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
          <div className="aspect-video w-full">
            <Globe />
          </div>
          
          {/* Controls Info */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-blue-300 font-semibold mb-1">Zoom</div>
              <div className="text-white/80 text-sm">Mouse wheel or pinch</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-blue-300 font-semibold mb-1">Rotate</div>
              <div className="text-white/80 text-sm">Click and drag</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-blue-300 font-semibold mb-1">Tilt</div>
              <div className="text-white/80 text-sm">Right-click and drag</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-green-300 font-semibold">High Resolution</div>
              <div className="text-white/70 text-sm mt-1">Detailed Earth imagery</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-purple-300 font-semibold">Real Terrain</div>
              <div className="text-white/70 text-sm mt-1">Accurate topography</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-yellow-300 font-semibold">Dynamic Lighting</div>
              <div className="text-white/70 text-sm mt-1">Realistic sun shadows</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="text-red-300 font-semibold">Interactive</div>
              <div className="text-white/70 text-sm mt-1">Smooth navigation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;