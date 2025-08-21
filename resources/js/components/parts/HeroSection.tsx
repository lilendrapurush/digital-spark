import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-purple-900 py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-primary-500 text-navy-900">Featured Products</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Empower your digital journey. Choose our carefully curated collection of digital marketing resources designed to accelerate your success
            </h1>
            <div className="flex items-center mb-8">
              <div className="flex text-primary-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-white">5.0 from 128 reviews</span>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Get Started
              </Button>
              <Button className="bg-white text-navy-900 hover:bg-gray-100">
                Learn More
              </Button>
            </div>
          </div>

          {/* Product Card */}
          <div className="relative">
            <img 
              src="/lovable-uploads/ca2331b0-6aa9-4ad7-ae6b-515e5c664a07.png" 
              alt="AI Marketing Guide" 
              className="rounded-lg shadow-2xl transform transition-transform hover:scale-105"
            />
            <div className="absolute -bottom-6 right-6 bg-primary-500 text-white px-3 py-1 rounded-full animate-pulse-glow">
              New
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">AI for Brand Building, Marketing, and More Sales</h3>
              <p className="text-white mb-6">100+ Free AI Tools for Branding, Sales, and Marketing with Instructions</p>
              <div className="flex items-center justify-center">
                <span className="text-3xl font-bold text-white">$50</span>
                <span className="text-white ml-2 line-through">$75</span>
              </div>
              <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;