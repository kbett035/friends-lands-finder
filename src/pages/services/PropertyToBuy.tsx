import { Building, Search, PiggyBank } from "lucide-react";
import ContactSection from "@/components/home/ContactSection";

const PropertyToBuy = () => {
  return (
    <div className="min-h-screen bg-secondary pt-24">
      <div 
        className="relative h-[60vh] mb-12"
        style={{
          backgroundImage: 'url("/lovable-uploads/84c45698-93bf-49dd-8c42-e7852715ef63.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Find Your Dream Property
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-100">
                Personalized searches, expert local knowledge, and financing assistance
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
            Property to Buy
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in delay-100">
            <p className="text-lg text-gray-700 mb-8">
              Find your dream property with personalized searches, expert local knowledge, and financing assistance. We make your property hunting journey smooth and successful.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <Search className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Search</h3>
                <p className="text-gray-600">Tailored property searches based on your specific needs and preferences</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <Building className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
                <p className="text-gray-600">Local market insights and professional guidance throughout the process</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <PiggyBank className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Financing Help</h3>
                <p className="text-gray-600">Assistance with financing options and payment plans</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in delay-200">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Access to exclusive property listings
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Professional guidance throughout the buying process
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Transparent pricing and negotiations
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Comprehensive property documentation support
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default PropertyToBuy;
