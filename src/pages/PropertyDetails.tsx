import { ArrowLeft, MapPin, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PropertyDetails = () => {
  const { id } = useParams();

  // Mock images array - in production this would come from your API
  const propertyImages = [
    `https://source.unsplash.com/featured/?land,plot&${id}-1`,
    `https://source.unsplash.com/featured/?land,plot&${id}-2`,
    `https://source.unsplash.com/featured/?land,plot&${id}-3`,
    `https://source.unsplash.com/featured/?land,plot&${id}-4`,
  ];
  
  // This would typically come from an API, using the id to fetch the specific property
  const properties = [
    {
      id: "0",
      title: "5000 sq ft Plot For Sale",
      location: "Shirazi Bodo-Kwale",
      price: "KES 2.5M",
      negotiable: true,
      description: "Prime land located in the serene area of Shirazi Bodo-Kwale. Perfect for both residential and commercial development. The plot is fully documented with a ready title deed.",
      features: [
        "5000 sq ft",
        "Ready Title Deed",
        "Accessible Location",
        "Electricity Available",
        "Water Available"
      ]
    },
    {
      id: "1",
      title: "5000 sq ft Plot For Sale",
      location: "Chembe Kibabamshe- Watamu",
      price: "KES 2M",
      negotiable: true,
      description: "Beautiful plot in the tourist hub of Watamu. Close to amenities and perfect for holiday home development.",
      features: [
        "5000 sq ft",
        "Ready Title Deed",
        "Beach Proximity",
        "Tourist Area",
        "Development Ready"
      ]
    },
    {
      id: "2",
      title: "5000 sq ft Plot for sale",
      location: "Ibiza- Ukunda",
      price: "KES 900K",
      negotiable: true,
      description: "Affordable plot in the growing area of Ukunda. Great investment opportunity with high potential for value appreciation.",
      features: [
        "5000 sq ft",
        "Clean Documentation",
        "Growing Area",
        "Investment Potential",
        "Near Main Road"
      ]
    },
    {
      id: "3",
      title: "5000 sq ft Plot for sale",
      location: "Mwabungo- Ukunda",
      price: "KES 900K",
      negotiable: true,
      description: "Strategic plot in Mwabungo area. Ideal for both residential and commercial purposes with all necessary amenities nearby.",
      features: [
        "5000 sq ft",
        "Ready Title Deed",
        "Strategic Location",
        "All Amenities",
        "Developed Area"
      ]
    }
  ];

  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-secondary pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
            <Link to="/properties" className="text-primary hover:underline">
              Back to Properties
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary pt-20 pb-10">
      <div className="container mx-auto px-4">
        <Link
          to="/properties"
          className="inline-flex items-center text-primary hover:underline mb-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Properties
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Carousel className="w-full">
              <CarouselContent>
                {propertyImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative h-[400px] cursor-pointer hover:opacity-90 transition-opacity rounded-lg overflow-hidden">
                          <img
                            src={image}
                            alt={`${property.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <img
                          src={image}
                          alt={`${property.title} - Image ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className="grid grid-cols-4 gap-2">
              {propertyImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="relative h-20 cursor-pointer hover:opacity-90 transition-opacity rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${property.title} - Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={20} className="mr-2" />
                <span>{property.location}</span>
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                {property.price}
                {property.negotiable && (
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    -Negotiable
                  </span>
                )}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-gray-600">{property.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Features</h2>
              <ul className="grid grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button className="w-full md:w-auto gap-2">
              <Phone size={20} />
              Contact Agent
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;