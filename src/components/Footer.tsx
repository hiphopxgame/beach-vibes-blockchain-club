
import { Waves, Bitcoin, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Bitcoin className="w-8 h-8 text-orange-500" />
            <h3 className="text-2xl font-bold">Bitcoin Beach Club</h3>
            <Waves className="w-8 h-8 text-blue-500" />
          </div>
          <p className="text-gray-300 mb-6">
            Where Blockchain Meets Beach Vibes
          </p>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for the crypto community</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Bitcoin Beach Club. Live free, learn often, build boldly.
          </p>
        </div>
      </div>
    </footer>
  );
};
