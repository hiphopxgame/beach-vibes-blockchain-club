
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Mission } from "@/components/Mission";
import { Events } from "@/components/Events";
import { GetInvolved } from "@/components/GetInvolved";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50">
      <Hero />
      <About />
      <Mission />
      <Events />
      <GetInvolved />
      <Footer />
    </div>
  );
};

export default Index;
