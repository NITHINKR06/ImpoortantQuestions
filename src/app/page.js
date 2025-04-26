'use client';
import { useState, useEffect } from 'react';
import { BookOpen, Calendar, Award, Search, ChevronRight, Brain, Star } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Simple feature cards data
  const cards = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Exam Schedule",
      description: "View your upcoming exams",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Study Materials",
      description: "Access comprehensive resources",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Practice Tests",
      description: "Test your knowledge",
      color: "bg-amber-100 text-amber-600"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Track your progress",
      color: "bg-emerald-100 text-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-purple-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-2/3 w-48 h-48 bg-pink-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Animated title */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center text-white relative">
            Cyber Security 
            <span className="absolute -top-6 -right-6 animate-spin-slow text-yellow-300">
              <Star className="h-8 w-8" />
            </span>
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-6"></div>
        </div>
        
        {/* Animated subtitle */}
        <p className={`text-xl md:text-2xl mb-10 text-center max-w-xl text-blue-100 transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Access resources, prepare efficiently, and excel in your exams
        </p>        
        
        {/* Call to action button */}
        <div className={`mt-12 transition-all duration-1000 delay-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link href="/unit1/fcn">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium text-lg shadow-lg hover:shadow-xl transition-shadow">
              Get Started
            </button>
          </Link>
        </div>
      </main>
      
      {/* Custom animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}