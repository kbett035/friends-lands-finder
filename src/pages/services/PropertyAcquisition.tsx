import { Search, FileCheck, TrendingUp } from "lucide-react";

const PropertyAcquisition = () => {
  return (
    <div className="min-h-screen bg-secondary pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
            Property Acquisition
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in delay-100">
            <p className="text-lg text-gray-700 mb-8">
              Discover lucrative investment opportunities, navigate negotiations and due diligence, and explore property. We help you make informed investment decisions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <Search className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Market Research</h3>
                <p className="text-gray-600">Comprehensive analysis of market trends and opportunities</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <FileCheck className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Due Diligence</h3>
                <p className="text-gray-600">Thorough property and documentation verification</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <TrendingUp className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Investment Strategy</h3>
                <p className="text-gray-600">Customized acquisition strategies for your goals</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in delay-200">
            <h2 className="text-2xl font-semibold mb-4">Our Acquisition Services</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Property identification and evaluation
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Market analysis and valuation
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Negotiation and deal structuring
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Transaction management and closing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyAcquisition;