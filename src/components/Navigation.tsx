
import { Moon, Phone, MessageSquare, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export const Navigation = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-900 dark:text-purple-400 animate-fade-in">
          U-Classes
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://www.youtube.com/@Uclasses" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
          >
            <Youtube size={20} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
          >
            <Moon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
