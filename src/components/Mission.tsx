
import { Card } from "@/components/ui/card";
import { Target, Heart, BookOpen, Rocket } from "lucide-react";

export const Mission = () => {
  const missions = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Engage",
      description: "We bring people together through community conversations, collaborative projects, and shared experiences that spark curiosity and connection."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "Entertain",
      description: "From Web3 artists and DJs to digital beach parties, we infuse fun into every layer of the crypto journey."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      title: "Educate",
      description: "We break down blockchain and crypto topics into simple, safe, and practical lessons so anyone can participate confidently."
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: "Empower",
      description: "We help you take your ideas from inspiration to execution using decentralized tools, creative support, and a thriving network of builders."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-l from-blue-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            🎯 Our Mission
          </h2>
          <p className="text-xl text-gray-600 font-semibold">
            To Engage, Entertain, Educate, and Empower.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {missions.map((mission, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {mission.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{mission.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{mission.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-gradient-to-r from-orange-500 to-blue-500 text-white p-8 rounded-2xl">
          <p className="text-lg font-medium">
            We're not just a club—we're a movement for those who want to live free, learn often, and build boldly in Web3.
          </p>
        </div>
      </div>
    </section>
  );
};
