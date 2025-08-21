
import React from 'react';
import { ArrowRight, Play, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="gradient-hero text-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Empower your digital journey Choose our carefully curated collection of digital marketing resources designed to 
              <span className="text-accent">accelerate your success</span>
            </h1>
            
            
          </div>

          {/* Hero Image/Video */}
          <div className="relative animate-fade-in-up">
            <div className="relative bg-gradient-card rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/ca2331b0-6aa9-4ad7-ae6b-515e5c664a07.png" 
                    alt="AI for Brand Building, Marketing and More Sales - Book Cover"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2 text-center">
                AI for Brand Building, Marketing, and More Sales
              </h3>
              <p className="text-black mb-4 text-center">
                100+ Free AI Tools for Branding, Sales and Marketing with Instructions
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-primary">$50</span>
              </div>
              <Link to="/shop">
                <Button className="w-full bg-[#007bff] hover:bg-[#007bff]/90 text-white">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
              </Link>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-primary p-3 rounded-full shadow-lg">
              <Star className="h-6 w-6 fill-current" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-primary p-3 rounded-full shadow-lg">
              <Badge className="bg-primary text-white">New</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
