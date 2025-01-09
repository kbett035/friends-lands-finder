import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import PropertiesHero from "@/components/properties/PropertiesHero";

const Properties = () => {
  const properties = [
    {
      id: "0",
      title: "5000 sq ft Plot For Sale",
      location: "Shirazi Bodo-Kwale",
      price: "KES 2.5M",
      negotiable: true,
      images: [
        "/lovable-uploads/84c45698-93bf-49dd-8c42-e7852715ef63.png",
        "/lovable-uploads/efdb139b-a2ca-4281-9c35-558e54c776de.png",
        "/lovable-uploads/dd99613d-8ac5-442c-8c46-78dc92807bbc.png",
        "/lovable-uploads/427c44cd-8af7-4a78-b624-3034aed7b658.png",
        "/lovable-uploads/b30b4b4c-47e3-43de-82ca-cf331e364c95.png",
        "/lovable-uploads/268bc45a-95f1-4901-b4d7-ab2e82952f19.png",
        "/lovable-uploads/c924fb46-5ddf-4a7d-b763-dee6290384da.png"
      ]
    },
    {
      id: "1",
      title: "5000 sq ft Plot For Sale",
      location: "Chembe Kibabamshe- Watamu",
      price: "KES 2M",
      negotiable: true,
    },
    {
      id: "2",
      title: "5000 sq ft Plot for sale",
      location: "Ibiza- Ukunda",
      price: "KES 900K",
      negotiable: true,
    },
    {
      id: "3",
      title: "5000 sq ft Plot for sale",
      location: "Mwabungo- Ukunda",
      price: "KES 900K",
      negotiable: true,
    },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <PropertiesHero />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary mb-8">Available Properties</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gray-200 h-48 relative">
                <img
                  src={property.images?.[0] || `https://source.unsplash.com/featured/?land,plot&${index}`}
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
                    to={`/properties/${property.id}`}
                    className="text-accent hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
