
export const Features = () => {
  const features = [
    {
      title: "Expert Teachers",
      description: "Highly qualified faculty with years of teaching experience",
      icon: "👨‍🏫",
    },
    {
      title: "Small Batches",
      description: "Limited students per batch for personalized attention",
      icon: "👥",
    },
    {
      title: "Regular Tests",
      description: "Weekly assessments to track progress",
      icon: "📝",
    },
    {
      title: "Study Material",
      description: "Comprehensive study materials and practice papers",
      icon: "📚",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
