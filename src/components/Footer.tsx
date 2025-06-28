
import { Waves, Bitcoin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-pink-800 to-orange-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <img 
              src="/lovable-uploads/3edaeb72-fb89-4ca6-a72b-966435e04898.png" 
              alt="Bitcoin Beach Club" 
              className="w-12 h-12 rounded-full"
            />
            <h3 className="text-2xl font-bold">Bitcoin Beach Club</h3>
            <Waves className="w-8 h-8 text-pink-400" />
          </div>
          <p className="text-pink-200 mb-6">
            Where Blockchain Meets Beach Vibes
          </p>
        </div>
        
        <div className="border-t border-pink-600/30 pt-8 text-center">
          <p className="text-pink-300 flex items-center justify-center space-x-2">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>for the crypto community</span>
          </p>
          <p className="text-pink-400 text-sm mt-2">
            © 2025 Bitcoin Beach Club. Live free, learn often, build boldly.
          </p>
        </div>
      </div>
    </footer>
  );
};
