import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const PropertiesHero = () => {
  return (
    <div className="relative h-[40vh] min-h-[400px] bg-secondary">
      <div className="absolute inset-0 bg-black/40">
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Perfect Plot
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Discover prime land plots in Mombasa and its environs. Your dream property awaits.
          </p>
          <div className="w-full max-w-2xl flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Search by location..."
              className="bg-white/90 border-0 text-black placeholder:text-gray-500"
            />
            <Button className="gap-2">
              <Search size={20} />
              Search Properties
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesHero;