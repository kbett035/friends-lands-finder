import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeaturedProperties = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

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
      images: [
        "/lovable-uploads/45f4e67f-0fbb-4b61-baeb-d855cdf62930.png",
        "/lovable-uploads/ee94df89-daff-462c-a8f1-5af89717188b.png",
        "/lovable-uploads/326e712c-24f6-4e86-aa33-73bcfc6899d0.png",
        "/lovable-uploads/31c81e4b-87fa-4cc8-b711-1d2a443f188f.png",
        "/lovable-uploads/3f6a9f1a-a49b-4466-9950-eead341f697b.png"
      ]
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Properties
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="bg-gray-200 h-48 relative cursor-pointer group"
                onClick={() => setSelectedProperty(property)}
              >
                <img
                  src={property.images?.[0] || `https://source.unsplash.com/featured/?land,plot&${index}`}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold px-4 py-2 rounded-full border-2 border-white/50 backdrop-blur-sm">
                    Quick View
                  </span>
                </div>
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
        <div className="mt-12 text-center">
          <Link to="/properties">
            <Button variant="default" size="lg">
              View More Properties
            </Button>
          </Link>
        </div>
      </div>

      <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
        <DialogContent className="max-w-4xl">
          {selectedProperty && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary">
                  {selectedProperty.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-6 space-y-6">
                {selectedProperty.images && selectedProperty.images.length > 0 ? (
                  <div className="relative rounded-xl overflow-hidden">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {selectedProperty.images.map((image: string, index: number) => (
                          <CarouselItem key={index}>
                            <div className="h-[400px]">
                              <img
                                src={image}
                                alt={`${selectedProperty.title} - Image ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                    <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-full text-white text-sm">
                      {selectedProperty.images.length} photos
                    </div>
                  </div>
                ) : (
                  <div className="h-[400px] bg-gray-100 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500">No images available</span>
                  </div>
                )}
                <div className="grid gap-6 p-4 bg-secondary/30 rounded-xl">
                  <div className="flex items-center text-gray-700">
                    <MapPin size={20} className="mr-2 text-primary" />
                    <span className="text-lg">{selectedProperty.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Price</div>
                      <div className="font-bold text-2xl text-primary">
                        {selectedProperty.price}
                        {selectedProperty.negotiable && (
                          <span className="text-sm font-normal text-gray-500 ml-2">
                            Negotiable
                          </span>
                        )}
                      </div>
                    </div>
                    <Link
                      to={`/properties/${selectedProperty.id}`}
                      className="inline-block"
                    >
                      <Button 
                        size="lg"
                        className="font-semibold"
                      >
                        View Full Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturedProperties;