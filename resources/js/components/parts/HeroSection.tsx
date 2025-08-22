import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br mx-auto my-20 from-indigo-900 via-purple-900 to-violet-900 pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <Badge className="mb-5 bg-yellow-500 text-black font-semibold py-1.5 px-4 text-sm">
              BEST SELLING PRODUCT
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Empower your digital journey. Choose our carefully curated collection of digital marketing resources designed to accelerate your success
            </h1>
            <div className="flex items-center mb-8">
              <div className="flex text-yellow-300">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-white">5.0 from 128 reviews</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 hover:border-white font-medium py-6 text-lg"
              >
                Get Started
              </Button>
              <Button 
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-6 text-lg shadow-lg hover:shadow-yellow-500/25"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Product Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent rounded-xl blur-xl"></div>
            <div className="relative">
              <img 
                src="/lovable-uploads/ca2331b0-6aa9-4ad7-ae6b-515e5c664a07.png" 
                alt="AI Marketing Guide" 
                className="rounded-xl shadow-2xl transform transition-transform hover:scale-[1.02] max-w-full"
              />
              <div className="absolute -bottom-6 right-6 bg-yellow-500 text-white px-4 py-2 rounded-full animate-pulse-glow font-medium text-sm tracking-tight">
                LIMITED OFFER
              </div>
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">AI for Brand Building, Marketing, and More Sales</h3>
              <p className="text-yellow-200 mb-6">100+ Free AI Tools for Branding, Sales, and Marketing with Instructions</p>
              <div className="flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-white">$50</span>
                <span className="text-yellow-300 ml-2 line-through">$75</span>
              </div>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-6 text-lg">
                <ShoppingCart className="mr-2 h-5 w-5" /> Buy Now
              </Button>
              <div className="mt-4 flex justify-center">
                <span className="text-yellow-300 text-sm">Only 7 left in stock - order soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;