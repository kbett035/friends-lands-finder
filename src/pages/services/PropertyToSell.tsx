import { Target, Camera, HandshakeIcon } from "lucide-react";
import ContactSection from "@/components/home/ContactSection";

const PropertyToSell = () => {
  return (
    <div className="min-h-screen bg-secondary pt-24">
      <div 
        className="relative h-[60vh] mb-12"
        style={{
          backgroundImage: 'url("/lovable-uploads/31c81e4b-87fa-4cc8-b711-1d2a443f188f.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Maximize Your Property Value
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-100">
                Expert marketing, professional visuals, and skilled negotiation
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
            Property to Sell
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in delay-100">
            <p className="text-lg text-gray-700 mb-8">
              Maximize exposure and achieve top-dollar sales with expert marketing, professional visuals, and skilled negotiation. We ensure your property gets the attention it deserves.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <Target className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Marketing</h3>
                <p className="text-gray-600">Strategic marketing campaigns to reach qualified buyers</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <Camera className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Professional Visuals</h3>
                <p className="text-gray-600">High-quality photography and property presentation</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <HandshakeIcon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Skilled Negotiation</h3>
                <p className="text-gray-600">Expert negotiation to secure the best possible price</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in delay-200">
            <h2 className="text-2xl font-semibold mb-4">Our Selling Process</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-2">1.</span>
                Property valuation and market analysis
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">2.</span>
                Professional photography and listing preparation
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">3.</span>
                Strategic marketing and buyer outreach
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">4.</span>
                Negotiation and closing support
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default PropertyToSell;
