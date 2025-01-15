import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import PropertyToBuy from "./pages/services/PropertyToBuy";
import PropertyToSell from "./pages/services/PropertyToSell";
import BuildingFinancing from "./pages/services/BuildingFinancing";
import PropertyAcquisition from "./pages/services/PropertyAcquisition";
import LandForEveryone from "./pages/services/LandForEveryone";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/:id" element={<PropertyDetails />} />
              <Route path="/services/property-to-buy" element={<PropertyToBuy />} />
              <Route path="/services/property-to-sell" element={<PropertyToSell />} />
              <Route path="/services/building-financing" element={<BuildingFinancing />} />
              <Route path="/services/property-acquisition" element={<PropertyAcquisition />} />
              <Route path="/services/land-for-everyone" element={<LandForEveryone />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;