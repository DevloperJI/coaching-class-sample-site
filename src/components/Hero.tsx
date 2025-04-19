
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900 text-white dark:from-purple-800 dark:to-blue-800">
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">U-Classes</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
          Empowering students to achieve academic excellence through personalized coaching and proven methodologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black w-full sm:w-auto">
            Book Free Demo Class <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 hover:bg-white/20 border-white w-full sm:w-auto"
            onClick={() => window.open("https://wa.me/+91XXXXXXXXXX", "_blank")}
          >
            <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Us
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 hover:bg-white/20 border-white w-full sm:w-auto"
            onClick={() => window.open("tel:+91XXXXXXXXXX")}
          >
            <Phone className="mr-2 h-5 w-5" /> Call Us
          </Button>
        </div>
      </div>
    </div>
  );
};
