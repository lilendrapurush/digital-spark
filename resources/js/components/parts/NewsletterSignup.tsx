import React, { useState } from 'react';
import { Mail, Gift, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { router } from '@inertiajs/react'; // ✅ For form submission

// Define props if needed later
interface NewsletterSignupProps {
  // e.g., defaultSuccessMessage?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errors, setErrors] = useState<{ email?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!email) {
      setErrors({ email: 'Email is required' });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: 'Please enter a valid email' });
      return;
    }

    // ✅ Use Inertia to submit to Laravel
    // This will POST to `/newsletter` and can handle validation + success
    router.post('/newsletter', {
      email,
      resource: 'AI Marketing Guide',
    }, {
      onSuccess: () => {
        setIsSubscribed(true);
        setEmail('');
        setErrors({});
      },
      onError: (validationErrors) => {
        setErrors(validationErrors);
      },
    });
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto gradient-card shadow-xl">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">Welcome to the Community!</h3>
              <p className="text-secondary mb-6">
                Check your email for your free AI Marketing Guide and exclusive updates.
              </p>
              <Button
                className="bg-accent hover:bg-accent/90 text-primary font-semibold"
                onClick={() => setIsSubscribed(false)}
              >
                Subscribe Another Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-accent/10 to-primary/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto gradient-card shadow-xl">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <Badge className="mb-4 bg-accent text-primary flex items-center">
                  <Gift className="w-4 h-4 mr-2" />
                  Free Resource
                </Badge>
                <h3 className="text-3xl font-bold text-primary mb-4">
                  Get Your Free AI Marketing Guide
                </h3>
                <p className="text-secondary mb-6 text-lg">
                  Join 25,000+ marketers receiving weekly insights, exclusive content, and early access to new resources. Plus, download our comprehensive AI Marketing Guide absolutely free!
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-6">
                  {[
                    "Weekly marketing insights and trends",
                    "Exclusive discounts on new courses",
                    "Early access to live training sessions",
                    "Free templates and resources",
                    "Industry expert interviews"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center text-secondary">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signup Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                    </div>
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold"
                    size="lg"
                  >
                    Download Free Guide
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-secondary text-center">
                    No spam. Unsubscribe anytime. We respect your privacy.
                  </p>
                </form>

                {/* Social Proof */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-center space-x-4 text-sm text-secondary">
                    <div className="flex items-center">
                      <div className="flex -space-x-1 mr-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-6 h-6 bg-accent rounded-full border-2 border-white"></div>
                        ))}
                      </div>
                      <span>25,000+ subscribers</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-1 text-accent" />
                      <span>Weekly updates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSignup;