
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Handshake, Sparkles } from "lucide-react";

export const GetInvolved = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: "Join the Community",
      description: "Connect with like-minded crypto lovers in our digital beach lounge."
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      title: "Attend Events",
      description: "Ask questions, share your projects, and learn in real time."
    },
    {
      icon: <Handshake className="w-8 h-8 text-purple-500" />,
      title: "Collaborate",
      description: "Work with us as an artist, educator, partner, or project—we're always looking for builders and dreamers."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-t from-orange-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            🤝 Get Involved
          </h2>
          <p className="text-xl text-gray-600 font-semibold mb-4">
            Ready to jump in?
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-blue-500 text-white p-8 md:p-12 rounded-2xl text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Whether you're a total beginner or a blockchain veteran,
          </h3>
          <p className="text-xl mb-8 opacity-90">
            the Bitcoin Beach Club is your place to chill, build, and grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-orange-500 hover:bg-orange-50 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Join Now - It's Free!
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-orange-500 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
