
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Excel Academy</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Empowering students to achieve academic excellence through personalized coaching and proven methodologies
        </p>
        <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black">
          Book Free Demo Class <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
