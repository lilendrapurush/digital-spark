// resources/js/components/Footer.tsx
import { Link } from '@inertiajs/react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const productLinks = [
    { name: 'E-books', href: '/ebooks' },
    { name: 'Audiovisual Content', href: '/audiovisual' },
    { name: 'Live Training', href: '/live-training' },
    { name: 'Bundle Packages', href: '/bundles' },
    { name: 'Free Resources', href: '/free' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Community Forum', href: '/community' },
    { name: 'Live Chat', href: '/chat' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Contact Support', href: '/support' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refunds' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Trilo Digital Solutions</h3>
                <p className="mt-2 text-gray-400">
                  Empowering businesses and professionals with cutting-edge digital marketing resources.
                </p>
              </div>
            </div>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-start">
                <MapPin className="mt-1 mr-3 text-yellow-400" size={18} />
                <p className="text-gray-400">123 Marketing Avenue, Suite 100<br />New York, NY 10001</p>
              </div>
              <div className="flex items-start">
                <Phone className="mt-1 mr-3 text-yellow-400" size={18} />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-start">
                <Mail className="mt-1 mr-3 text-yellow-400" size={18} />
                <p className="text-gray-400">hello@trilodigital.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200 hover:text-yellow-400`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-yellow-400 transition-colors duration-200 text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Products</h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-yellow-400 transition-colors duration-200 text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-yellow-400 transition-colors duration-200 text-gray-400 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12 border border-gray-700">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Get the latest marketing insights, exclusive content, and early access to new resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-5 py-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="px-6 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Trilo Digital Solutions. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {legalLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-500 hover:text-yellow-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;