import { Link } from '@inertiajs/react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-500">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-black text-white rounded-full">T</span>
              <div>
                <h3 className="text-xl font-bold text-white">Trilo Digital Solutions</h3>
                <p className="text-white text-sm">Empowering businesses and professionals with cutting-edge digital marketing resources.</p>
              </div>
            </div>
            <p className="text-white text-sm mb-6">
              Transform your marketing strategy with our expert-led courses, comprehensive guides, and live training sessions.
            </p>
            <div className="space-y-2 text-white">
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2" />
                hello@trilodigital.com
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                New York, NY 10001
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="text-white text-sm space-y-2">
              <li><Link href="/about" className="hover:text-primary-200">About Us</Link></li>
              <li><Link href="/our-story" className="hover:text-primary-200">Our Story</Link></li>
              <li><Link href="/careers" className="hover:text-primary-200">Careers</Link></li>
              <li><Link href="/press" className="hover:text-primary-200">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="text-white text-sm space-y-2">
              <li><Link href="/ebooks" className="hover:text-primary-200">E-books</Link></li>
              <li><Link href="/audiovisual" className="hover:text-primary-200">Audiovisual Content</Link></li>
              <li><Link href="/live-training" className="hover:text-primary-200">Live Training</Link></li>
              <li><Link href="/bundles" className="hover:text-primary-200">Bundle Packages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="text-white text-sm space-y-2">
              <li><Link href="/help-center" className="hover:text-primary-200">Help Center</Link></li>
              <li><Link href="/contact-support" className="hover:text-primary-200">Contact Support</Link></li>
              <li><Link href="/community-forum" className="hover:text-primary-200">Community Forum</Link></li>
              <li><Link href="/live-chat" className="hover:text-primary-200">Live Chat</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-primary-300">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-white text-lg font-bold mb-4 md:mb-0">Stay Updated</h3>
            <p className="text-white text-sm mb-4 md:mb-0">Get the latest marketing insights delivered to your inbox.</p>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-md bg-white text-navy-800 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
              <button className="bg-white text-primary-500 px-4 py-2 rounded-r-md hover:bg-gray-100 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-navy-900 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-white text-sm">
          © 2024 Trilo Digital Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;