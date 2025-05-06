'use client';
import { useState, useEffect } from 'react';
import {
  BookOpen,
  Search,
  Layers,
  Brain,
  Code,
  Server,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight transition-all duration-700 delay-100 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            Master Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Computer Science</span> Subjects
          </h1>
          <p className={`text-lg text-slate-600 dark:text-slate-300 mb-8 transition-all duration-700 delay-200 transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            Access comprehensive study materials, important questions, and resources organized by academic units and subjects.
          </p>
        </div>

        {/* Right Animated Graphic */}
        <div className={`md:w-1/2 transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative w-full h-64 md:h-96">
            {/* DAA Code Box */}
            <div className="absolute top-10 right-8 w-32 h-32 md:w-48 md:h-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 animate-pulse">
              <div className="w-full h-4 bg-indigo-100 dark:bg-slate-700 rounded-sm mb-2"></div>
              <div className="w-3/4 h-3 bg-indigo-100 dark:bg-slate-700 rounded-sm mb-2"></div>
              <div className="w-5/6 h-3 bg-purple-100 dark:bg-slate-700 rounded-sm mb-2"></div>
              <div className="w-2/3 h-3 bg-indigo-100 dark:bg-slate-700 rounded-sm"></div>
              <div className="mt-4 flex items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white text-xs">
                  DAA
                </div>
              </div>
            </div>

            {/* Network Diagram */}
            <div className="absolute bottom-10 left-4 w-36 h-36 md:w-40 md:h-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 animate-bounce">
              <div className="relative w-full h-full">
                <div className="absolute top-2 left-4 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute top-10 right-8 w-4 h-4 bg-indigo-500 rounded-full"></div>
                <div className="absolute bottom-2 left-8 w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="absolute bottom-8 right-2 w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Math Box */}
            <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-3 animate-pulse">
              <div className="text-xs md:text-sm text-slate-800 dark:text-slate-200 font-mono">
                <div>f(n) = O(g(n))</div>
                <div className="mt-2">∑(i=1 to n)</div>
                <div className="mt-2">P(A|B) =</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Units */}
      <section className={`bg-white dark:bg-slate-800 py-16 transition-all duration-700 delay-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Academic Units</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our materials are organized by units to help you navigate the curriculum effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((unit) => (
              <div
                key={unit}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="bg-indigo-100 dark:bg-slate-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">U{unit}</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Unit {unit}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-center mb-4">
                  Important questions and resources for all subjects in Unit {unit}
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => router.push(`/unit${unit}`)}
                    className="flex items-center space-x-1 text-indigo-600 dark:text-indigo-400 font-medium group"
                  >
                    <span>Explore Unit {unit}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>    
    </div>
  );
}
