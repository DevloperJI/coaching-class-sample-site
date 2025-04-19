
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Courses } from "@/components/Courses";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Courses />
      <Contact />
    </div>
  );
};

export default Index;
