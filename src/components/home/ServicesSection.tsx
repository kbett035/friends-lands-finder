import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Property to Buy",
      description: "Find your dream property with personalized searches, expert local knowledge, and financing assistance",
      path: "/services/property-to-buy"
    },
    {
      title: "Property to Sell",
      description: "Maximize exposure and achieve top-dollar sales with expert marketing, professional visuals, and skilled negotiation.",
      path: "/services/property-to-sell"
    },
    {
      title: "Building Financing",
      description: "Secure the best loan options for your construction project with tailored solutions and streamlined processes",
      path: "/services/building-financing"
    },
    {
      title: "Property Acquisition",
      description: "Discover lucrative investment opportunities, navigate negotiations and due diligence, and explore property.",
      path: "/services/property-acquisition"
    },
    {
      title: "Land for Everyone",
      description: "Find your dream property with personalized searches, expert local knowledge, and financing assistance",
      path: "/services/land-for-everyone"
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="block"
            >
              <div
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;