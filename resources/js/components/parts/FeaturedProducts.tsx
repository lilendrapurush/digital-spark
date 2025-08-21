
import React from 'react';
import { Star, Clock, Users, Download, Video, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const FeaturedProducts = () => {
  const products = [
    {
      id: 2,
      title: "Must Have Sales Skills for Everyone",
      description: "Comprehensive sales training program covering essential techniques, psychology-based strategies, and proven methodologies that work across all industries and experience levels.",
      price: 65,
      originalPrice: 95,
      image: "/lovable-uploads/62798957-c9f9-43b0-97c5-9e09c47df329.png",
      category: "Audiovisual",
      rating: 4.8,
      reviews: 89,
      features: ["6+ Hours Content", "Psychology-Based Techniques", "Universal Applications", "Practical Exercises"],
      icon: Video,
      badge: "Most Popular",
      badgeColor: "bg-accent",
    },
    {
      id: 3,
      title: "Live Training on Writing Prompts for Marketing, Sales, and Branding",
      description: "Interactive live sessions teaching you how to craft compelling marketing copy and sales scripts.",
      price: 350,
      originalPrice: 500,
      image: "/lovable-uploads/3d723527-8584-47ec-bab9-c729eea16372.png",
      category: "Live Training",
      rating: 5.0,
      reviews: 45,
      features: ["3 Live Sessions", "1-on-1 Coaching", "Certificate"],
      icon: Calendar,
      badge: "Premium",
      badgeColor: "bg-purple-500",
    },
  ];

  return (
    <section id="shop" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-primary">Featured Products</Badge>
          <h2 className="text-4xl font-bold mb-4">
            Empower Your <span className="text-accent">Digital Journey</span>
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Choose from our carefully curated collection of digital marketing resources designed to accelerate your success.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="gradient-card hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                {/* Badge */}
                <div className="flex justify-between items-start mb-4">
                  <Badge className={`${product.badgeColor} text-white`}>
                    {product.badge}
                  </Badge>
                  {product.originalPrice > product.price && (
                    <Badge variant="destructive">
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  )}
                </div>
                
                {/* Product Image/Icon */}
                <div className="mx-auto w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  {product.image.startsWith('/') ? (
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <span className="text-4xl">{product.image}</span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-secondary text-sm mb-4">{product.description}</p>
                
                {/* Rating */}
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="flex text-accent">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className={`w-4 h-4 ${i <= product.rating ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-sm text-secondary">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <product.icon className="w-4 h-4 text-accent mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <span className="text-3xl font-bold text-primary">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-secondary line-through">${product.originalPrice}</span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="w-full space-y-3">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold">
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="w-full">
                    Preview Content
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bundle Offer */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl p-8 text-center">
          <Badge className="mb-4 bg-accent text-primary">Special Offer</Badge>
          <h3 className="text-2xl font-bold mb-4">Complete Learning Bundle</h3>
          <p className="text-white/90 mb-6">Get all three products together and save 25%!</p>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-3xl font-bold">$375</span>
            <span className="text-xl line-through opacity-60">$500</span>
            <Badge className="bg-accent text-primary">Save $125</Badge>
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
            Get Bundle Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
