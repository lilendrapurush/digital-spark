import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="container mx-auto px-4">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                  {/* Content */}
                  <div className="animate-fade-in-up">
                      <Badge className="mb-5 bg-yellow-500 px-4 py-1.5 text-sm font-semibold text-black">BEST SELLING PRODUCT</Badge>
                      <h1 className="mb-6 text-4xl leading-tight font-bold text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
                          Empower your digital journey. Choose our carefully curated collection of digital marketing resources designed to accelerate
                          your success
                      </h1>
                      <div className="mb-8 flex items-center">
                          <div className="flex text-yellow-300">
                              {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-5 w-5 fill-current" />
                              ))}
                          </div>
                          <span className="ml-2 text-white">5.0 from 128 reviews</span>
                      </div>
                      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                          <Button
                              variant="outline"
                              className="border-white/20 py-6 text-lg font-medium text-white hover:border-white hover:bg-white/10"
                          >
                              Get Started
                          </Button>
                          <Button className="bg-yellow-500 py-6 text-lg font-medium text-white shadow-lg hover:bg-yellow-600 hover:shadow-yellow-500/25">
                              Learn More
                          </Button>
                      </div>
                  </div>

                  {/* Product Card */}
                  <div className="relative">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500/10 to-transparent blur-xl"></div>
                      <div className="relative">
                          <img
                              src="/lovable-uploads/ca2331b0-6aa9-4ad7-ae6b-515e5c664a07.png"
                              alt="AI Marketing Guide"
                              className="max-w-full transform rounded-xl shadow-2xl transition-transform hover:scale-[1.02]"
                          />
                          <div className="animate-pulse-glow absolute right-6 -bottom-6 rounded-full bg-yellow-500 px-4 py-2 text-sm font-medium tracking-tight text-white">
                              LIMITED OFFER
                          </div>
                      </div>
                      <div className="mt-8 text-center">
                          <h3 className="mb-2 text-2xl font-bold text-white">AI for Brand Building, Marketing, and More Sales</h3>
                          <p className="mb-6 text-yellow-200">100+ Free AI Tools for Branding, Sales, and Marketing with Instructions</p>
                          <div className="mb-6 flex items-center justify-center">
                              <span className="text-3xl font-bold text-white">$50</span>
                              <span className="ml-2 text-yellow-300 line-through">$75</span>
                          </div>
                          <Button className="w-full bg-yellow-500 py-6 text-lg font-semibold text-white hover:bg-yellow-600">
                              <ShoppingCart className="mr-2 h-5 w-5" /> Buy Now
                          </Button>
                          <div className="mt-4 flex justify-center">
                              <span className="text-sm text-yellow-300">Only 7 left in stock - order soon</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default HeroSection;