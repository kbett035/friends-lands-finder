import { MapPin, ArrowDown, Phone, Mail, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const featuredProperties = [
    {
      title: "5000 sq ft Plot For Sale",
      location: "Shirazi Bodo-Kwale",
      price: "KES 2.5M",
      negotiable: true,
    },
    {
      title: "5000 sq ft Plot For Sale",
      location: "Chembe Kibabamshe- Watamu",
      price: "KES 2M",
      negotiable: true,
    },
    {
      title: "5000 sq ft Plot for sale",
      location: "Ibiza- Ukunda",
      price: "KES 900K",
      negotiable: true,
    },
    {
      title: "5000 sq ft Plot for sale",
      location: "Mwabungo- Ukunda",
      price: "KES 900K",
      negotiable: true,
    },
  ];

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
    <div className="w-full">
      {/* Hero Section with Smooth Scroll */}
      <div className="relative min-h-screen bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                FIND YOUR IDEAL PLOT
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-100">
                Your Ideal Real Estate Partner in Mombasa and its environs
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md transition-colors animate-fade-in delay-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white w-8 h-8" />
        </div>
      </div>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Properties
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-200 h-48 relative">
                  <img
                    src={`https://source.unsplash.com/featured/?land,plot&${index}`}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-primary">
                        {property.price}
                      </span>
                      {property.negotiable && (
                        <span className="text-sm text-gray-500 ml-1">
                          -Negotiable
                        </span>
                      )}
                    </div>
                    <Link
                      to="/properties"
                      className="text-accent hover:underline"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div>Happy Clients</div>
            </div>
            <div className="animate-fade-in delay-100">
              <div className="text-4xl font-bold mb-2">90+</div>
              <div>Ready Projects</div>
            </div>
            <div className="animate-fade-in delay-200">
              <div className="text-4xl font-bold mb-2">200+</div>
              <div>Completed Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPinned className="w-6 h-6 text-primary mr-3" />
                  <span>Moi Avenue, Mombasa Mbooni Building 1st floor</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <a href="mailto:sales@friendspropertiesltd.com" className="hover:text-primary">
                    sales@friendspropertiesltd.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  <a href="tel:+2547108835375" className="hover:text-primary">
                    +254 710 883 5375
                  </a>
                </div>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;