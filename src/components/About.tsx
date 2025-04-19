
import { Info } from "lucide-react";

export const About = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="about">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Info className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
          <h2 className="text-3xl font-bold text-center">About U-Classes</h2>
        </div>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            U-Classes is a premier coaching institute dedicated to nurturing young minds and helping them achieve their academic goals. With years of experience in educational excellence, we provide comprehensive coaching for students from grades 8th to 12th.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our experienced faculty members are passionate about teaching and use innovative methods to make learning both effective and enjoyable. We focus on building strong foundations in Mathematics, Physics, and Chemistry through personalized attention and regular assessments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2">10+ Years</h3>
              <p className="text-gray-600 dark:text-gray-400">Of Teaching Excellence</p>
            </div>
            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2">1000+</h3>
              <p className="text-gray-600 dark:text-gray-400">Successful Students</p>
            </div>
            <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2">95%</h3>
              <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
