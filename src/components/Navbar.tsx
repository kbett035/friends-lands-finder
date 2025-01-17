import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "Contact Us", path: "/contact" },
    { name: "About Us", path: "/about" },
  ];

  // Recent properties data
  const recentProperties = [
    {
      id: "0",
      title: "5000 sq ft Plot For Sale",
      location: "Shirazi Bodo-Kwale",
      price: "KES 2.5M",
    },
    {
      id: "1",
      title: "5000 sq ft Plot For Sale",
      location: "Chembe Kibabamshe- Watamu",
      price: "KES 2M",
    },
    {
      id: "2",
      title: "5000 sq ft Plot for sale",
      location: "Ibiza- Ukunda",
      price: "KES 900K",
    },
    {
      id: "3",
      title: "5000 sq ft Plot for sale",
      location: "Mwabungo- Ukunda",
      price: "KES 900K",
    },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl md:text-2xl font-bold text-primary">
            Friends Properties
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Quick Links Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-primary transition-colors">
                Quick Links <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                {recentProperties.map((property) => (
                  <DropdownMenuItem key={property.id} className="p-0">
                    <Link
                      to={`/properties/${property.id}`}
                      className="w-full p-2 hover:bg-secondary/50"
                    >
                      <div className="text-sm font-medium">{property.title}</div>
                      <div className="text-xs text-gray-500">{property.location}</div>
                      <div className="text-xs font-medium text-primary">{property.price}</div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 absolute top-16 left-0 right-0 bg-white shadow-lg">
            <div className="container mx-auto px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block py-3 text-gray-700 hover:text-primary border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Quick Links */}
              <div className="mt-4">
                <div className="font-medium text-gray-700 mb-2">Quick Links</div>
                {recentProperties.map((property) => (
                  <Link
                    key={property.id}
                    to={`/properties/${property.id}`}
                    className="block py-3 border-b border-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="text-sm font-medium text-gray-700">{property.title}</div>
                    <div className="text-xs text-gray-500">{property.location}</div>
                    <div className="text-xs font-medium text-primary">{property.price}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;