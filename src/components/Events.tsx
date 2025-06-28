
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Music } from "lucide-react";

export const Events = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent mb-6">
            📆 Events
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We host weekly virtual events where you can connect, learn, and vibe with the Bitcoin Beach Club community. 
            From hands-on crypto tutorials to live performances by Web3 creators, every week is a new experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:scale-105 transition-transform duration-300 border-0">
            <Calendar className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Weekly Virtual Events</h3>
            <p className="mb-4 opacity-90">
              Join us every week for interactive sessions covering everything from DeFi basics to NFT creation workshops.
            </p>
            <div className="flex items-center space-x-2 text-sm opacity-80">
              <Users className="w-4 h-4" />
              <span>Community-driven content</span>
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:scale-105 transition-transform duration-300 border-0">
            <Music className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Web3 Creator Showcases</h3>
            <p className="mb-4 opacity-90">
              Experience live performances, art reveals, and creative collaborations from talented Web3 artists and DJs.
            </p>
            <div className="flex items-center space-x-2 text-sm opacity-80">
              <Music className="w-4 h-4" />
              <span>Live performances & exhibitions</span>
            </div>
          </Card>
        </div>
        
        <Card className="p-8 md:p-12 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 text-white text-center border-0">
          <MapPin className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Annual Miami Beach Meetup</h3>
          <p className="text-xl mb-6 opacity-90">
            All of this leads up to our annual meetup in Miami Beach every December—an unforgettable celebration 
            of community, creativity, and decentralized culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full"
            >
              Learn More
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white bg-black/20 hover:bg-white hover:text-purple-600 font-semibold px-8 py-3 rounded-full backdrop-blur-sm"
            >
              Get Notified
            </Button>
          </div>
        </Card>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            More event details coming soon. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
};
