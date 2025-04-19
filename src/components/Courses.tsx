
import { Button } from "./ui/button";

export const Courses = () => {
  const courses = [
    {
      title: "Mathematics",
      grade: "8th - 12th",
      highlights: ["Algebra", "Geometry", "Calculus"],
    },
    {
      title: "Physics",
      grade: "9th - 12th",
      highlights: ["Mechanics", "Electricity", "Modern Physics"],
    },
    {
      title: "Chemistry",
      grade: "9th - 12th",
      highlights: ["Organic", "Inorganic", "Physical"],
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.title} className="border rounded-lg p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">Grades: {course.grade}</p>
              <ul className="mb-6 space-y-2">
                {course.highlights.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-purple-900 hover:bg-purple-800">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
