import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;