import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-secondary min-h-[600px] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-primary mb-6">
              FIND YOUR IDEAL PLOT
            </h1>
            <p className="text-xl mb-8">
              Your Ideal Real Estate Partner in Mombasa and its environs
            </p>
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Properties
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 h-48"></div>
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
          <div className="text-center mt-8">
            <Link
              to="/properties"
              className="text-primary hover:underline font-semibold"
            >
              View More Properties
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div>Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">90+</div>
              <div>Ready Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div>Completed Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;