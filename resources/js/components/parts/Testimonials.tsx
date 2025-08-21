import { Star } from "lucide-react";
import { Play, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      quote: "The live training completely transformed our marketing approach.",
      avatar: "https://picsum.photos/200/200?random=1",
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Small Business Owner",
      company: "Chen's Coffee",
      quote: "From zero to hero in digital marketing. Best investment I made.",
      avatar: "https://picsum.photos/200/200?random=2",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Student",
      company: "NYU Business School",
      quote: "The e-book is perfect for students. Clear, practical, and affordable.",
      avatar: "https://picsum.photos/200/200?random=3",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-navy-900">What Our Students Say</h2>
        
        {/* Video Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-navy-900">Video Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative pt-[56.25%]">
                  <img 
                    src="https://picsum.photos/800/450?random=1" 
                    alt="Testimonial video" 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-primary-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-navy-900">Customer Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Quote className="w-6 h-6 text-gray-400" />
                  <p className="text-gray-700 italic ml-2">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center mt-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <div className="flex text-primary-400 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;