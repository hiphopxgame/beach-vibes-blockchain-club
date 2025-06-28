
import { Card } from "@/components/ui/card";
import { Users, Zap, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            🏖️ About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The Bitcoin Beach Club is a vibrant crypto community inspired by the sun, surf, and the decentralized future. 
            We bring together blockchain beginners, creators, and innovators in a fun, beach-inspired environment—online and on the sand.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Community First</h3>
            <p className="text-gray-600">
              Bringing together blockchain enthusiasts from all backgrounds in a welcoming, inclusive environment.
            </p>
          </Card>
          
          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
            <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
            <p className="text-gray-600">
              Cutting-edge Web3 tools and creative approaches to blockchain education and collaboration.
            </p>
          </Card>
          
          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
            <Globe className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Reach</h3>
            <p className="text-gray-600">
              Connecting crypto lovers worldwide through digital experiences and real-world meetups.
            </p>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Through our mix of culture, creativity, and cutting-edge Web3 tools, we're building a space where people can 
            connect, learn, and launch their next big idea. Whether you're here for good vibes, serious learning, or both—you're in the right place.
          </p>
        </div>
      </div>
    </section>
  );
};
