import { Users, Map, Shield } from "lucide-react";
import ContactSection from "@/components/home/ContactSection";

const LandForEveryone = () => {
  return (
    <div className="min-h-screen bg-secondary pt-24">
      <div 
        className="relative h-[60vh] mb-12"
        style={{
          backgroundImage: 'url("/lovable-uploads/427c44cd-8af7-4a78-b624-3034aed7b658.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Land for Everyone
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in delay-100">
                Your dream property awaits with expert guidance
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
            Land for Everyone
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in delay-100">
            <p className="text-lg text-gray-700 mb-8">
              Find your dream property with personalized searches, expert local knowledge, and financing assistance. We believe everyone deserves their piece of land.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Inclusive Options</h3>
                <p className="text-gray-600">Land options for every budget and need</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <Map className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Location Variety</h3>
                <p className="text-gray-600">Diverse locations to choose from</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <Shield className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Process</h3>
                <p className="text-gray-600">Safe and transparent land acquisition</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in delay-200">
            <h2 className="text-2xl font-semibold mb-4">Why Land is for Everyone</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Flexible payment plans
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Various plot sizes available
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Prime locations at different price points
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Expert guidance for first-time buyers
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};

export default LandForEveryone;
