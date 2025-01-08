import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Friends Properties</h3>
            <p className="text-sm">
              Your trusted partner in finding the perfect plot of land in Mombasa
              and its environs.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-accent transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="not-italic space-y-2 text-sm">
              <p>Moi Avenue, Mombasa</p>
              <p>Mbooni Building 1st floor</p>
              <p>
                <a 
                  href="mailto:sales@friendspropertiesltd.com"
                  className="hover:text-accent transition-colors"
                >
                  sales@friendspropertiesltd.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+2547108835375"
                  className="hover:text-accent transition-colors"
                >
                  +254 710 883 5375
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Friends Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;