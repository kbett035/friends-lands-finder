const ServicesSection = () => {
  const services = [
    {
      title: "Property to Buy",
      description: "Find your dream property with personalized searches, expert local knowledge, and financing assistance",
    },
    {
      title: "Property to Sell",
      description: "Maximize exposure and achieve top-dollar sales with expert marketing, professional visuals, and skilled negotiation.",
    },
    {
      title: "Building Financing",
      description: "Secure the best loan options for your construction project with tailored solutions and streamlined processes",
    },
    {
      title: "Property Acquisition",
      description: "Discover lucrative investment opportunities, navigate negotiations and due diligence, and explore property.",
    },
    {
      title: "Land for Everyone",
      description: "Find your dream property with personalized searches, expert local knowledge, and financing assistance",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;