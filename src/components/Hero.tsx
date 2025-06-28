
import { Button } from "@/components/ui/button";
import { Waves, Bitcoin, Palmtree } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-400 via-orange-500 to-blue-500">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 animate-bounce">
          <Palmtree className="w-8 h-8 text-white/20" />
        </div>
        <div className="absolute top-20 right-20 animate-pulse">
          <Waves className="w-12 h-12 text-white/15" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-1000">
          <Waves className="w-6 h-6 text-white/25" />
        </div>
      </div>
      
      <div className="text-center text-white z-10 px-4 max-w-4xl mx-auto">
        {/* Bitcoin Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-pulse">
              <img 
                src="/lovable-uploads/cdbe0cc9-9305-4c62-9e89-11264215a3e8.png" 
                alt="Bitcoin" 
                className="w-20 h-20"
              />
            </div>
            <div className="absolute -inset-4 bg-white/5 rounded-full animate-ping"></div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
          🌴 Bitcoin Beach Club
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-orange-100 font-light">
          Where Blockchain Meets Beach Vibes
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-orange-500 hover:bg-orange-50 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Join the Community
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-orange-500 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Explore Events
          </Button>
        </div>
      </div>
      
      {/* Animated wave at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-20">
          <path 
            d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z" 
            fill="rgb(255, 237, 213)" 
            className="animate-pulse"
          />
        </svg>
      </div>
    </section>
  );
};
