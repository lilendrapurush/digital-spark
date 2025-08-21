import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { CheckCircle } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: "Must Have Sales Skills for Everyone",
      description: "Comprehensive sales training program covering essential techniques, psychology-based strategies, and proven methodologies that work across all industries and experience levels.",
      features: ["6+ Hours Content", "Psychology-Based Techniques", "Universal Applications", "Practical Exercises"],
      price: 65,
      originalPrice: 95,
      rating: 4.8,
      reviews: 89,
      image: "/lovable-uploads/62798957-c9f9-43b0-97c5-9e09c47df329.png",
      tags: ["Most Popular", "Save $30"],
    },
    {
      id: 2,
      title: "Live Training on Writing Prompts for Marketing, Sales, and Branding",
      description: "Interactive live sessions teaching you how to craft compelling marketing copy and sales scripts.",
      features: ["3 Live Sessions", "1-on-1 Coaching", "Certificate"],
      price: 350,
      originalPrice: 500,
      rating: 5,
      reviews: 45,
      image: "/lovable-uploads/3d723527-8584-47ec-bab9-c729eea16372.png",
      tags: ["Premium", "Save $150"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  {product.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tag === "Most Popular" ? "bg-primary-500 text-white" : 
                        tag === "Premium" ? "bg-purple-500 text-white" : 
                        "bg-red-500 text-white"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center h-32 bg-blue-100 rounded-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-bold mt-4">{product.title}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="flex items-center mt-4">
                  <div className="flex text-primary-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {product.rating.toFixed(1)} ({product.reviews} reviews)
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-baseline">
                  <span className="text-3xl font-bold text-primary-500">${product.price}</span>
                  <span className="text-gray-500 ml-2 line-through">${product.originalPrice}</span>
                </div>
                <div className="mt-4 space-y-2">
                  <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="w-full border-gray-300 text-gray-600 hover:bg-gray-100">
                    Preview Content
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;