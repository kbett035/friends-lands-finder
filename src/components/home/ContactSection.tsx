import { MapPinned, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPinned className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                <span>Moi Avenue, Mombasa Mbooni Building 1st floor</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:sales@friendspropertiesltd.com" className="hover:text-primary break-all">
                  sales@friendspropertiesltd.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                <a href="tel:+2547108835375" className="hover:text-primary">
                  +254 710 883 5375
                </a>
              </div>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;