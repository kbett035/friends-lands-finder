import { Calculator, FileText, Landmark } from "lucide-react";

const BuildingFinancing = () => {
  return (
    <div className="min-h-screen bg-secondary pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
            Building Financing
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in delay-100">
            <p className="text-lg text-gray-700 mb-8">
              Secure the best loan options for your construction project with tailored solutions and streamlined processes. We help make your building dreams a reality.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <Calculator className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Loan Calculator</h3>
                <p className="text-gray-600">Estimate your monthly payments and total costs</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <FileText className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-gray-600">Assistance with all required paperwork</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <Landmark className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lender Network</h3>
                <p className="text-gray-600">Access to multiple financing options</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 animate-fade-in delay-200">
            <h2 className="text-2xl font-semibold mb-4">Financing Options</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Construction loans
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Land purchase financing
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Renovation loans
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">•</span>
                Custom financing solutions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingFinancing;