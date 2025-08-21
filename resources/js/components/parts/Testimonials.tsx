
import React from 'react';
import { Star, Quote, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Testimonials = () => {
  const videoTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      thumbnail: "👩‍💼",
      rating: 5,
      preview: "The live training completely transformed our marketing approach..."
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Small Business Owner",
      company: "Chen's Coffee",
      thumbnail: "👨‍💻",
      rating: 5,
      preview: "From zero to hero in digital marketing. Best investment I made..."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Student",
      company: "NYU Business School",
      thumbnail: "👩‍🎓",
      rating: 5,
      preview: "The e-book is perfect for students. Clear, practical, and affordable..."
    }
  ];

  const writtenTestimonials = [
    {
      id: 1,
      name: "David Thompson",
      role: "Freelance Designer",
      text: "Trilo Digital Solutions transformed my understanding of digital marketing. The e-book is comprehensive yet easy to follow, and the audiovisual content brings concepts to life.",
      rating: 5,
      avatar: "👨‍🎨"
    },
    {
      id: 2,
      name: "Lisa Park",
      role: "Startup Founder",
      text: "The live training sessions were game-changing. Real-time feedback and personalized strategies helped me increase my conversion rates by 300%.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Marketing Manager",
      text: "Professional, practical, and results-driven. The bundle package gave me everything I needed to revamp our entire marketing strategy.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      id: 4,
      name: "Maria Garcia",
      role: "E-commerce Owner",
      text: "The AI branding masterclass opened my eyes to new possibilities. My brand identity is now more cohesive and appealing to customers.",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      id: 5,
      name: "Alex Kumar",
      role: "Digital Agency CEO",
      text: "Outstanding quality and value. We've implemented these strategies across multiple client campaigns with incredible success rates.",
      rating: 5,
      avatar: "👨‍💻"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-primary">Success Stories</Badge>
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="text-accent">Students</span> Say
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our digital marketing resources.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Video Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="gradient-card hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  {/* Video Thumbnail */}
                  <div className="relative mb-4">
                    <div className="aspect-video bg-primary/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                      <span className="text-6xl">{testimonial.thumbnail}</span>
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                          <Play className="h-8 w-8 text-primary ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <div className="flex justify-center text-accent mb-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <h4 className="font-semibold text-primary mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-secondary mb-2">{testimonial.role}</p>
                    <p className="text-sm text-secondary mb-3">{testimonial.company}</p>
                    <p className="text-sm italic text-secondary">"{testimonial.preview}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Written Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Customer Reviews</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writtenTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="gradient-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <p className="text-secondary mb-4 italic">"{testimonial.text}"</p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-secondary">{testimonial.role}</p>
                      <div className="flex text-accent mt-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Start your digital marketing journey today and see why thousands of professionals trust Trilo Digital Solutions.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold">
            Start Learning Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
