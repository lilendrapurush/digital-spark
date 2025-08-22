// resources/js/components/Header.tsx
import { Link } from '@inertiajs/react';
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1">
              <h1 className="text-xl font-bold text-white">Help and Grow</h1>
              <p className="text-sm text-yellow-200 font-medium">Digital Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/" className="text-lg font-medium text-gray-700 hover:text-yellow-500 transition-colors duration-200">
                Home
              </Link>
            </div>
            
            <div className="relative group">
              <Link href="/shop" className="text-lg font-medium text-gray-700 hover:text-yellow-500 transition-colors duration-200 flex items-center">
                Shop
                <ChevronDown className="ml-1 w-4 h-4" />
              </Link>
              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:block w-48 mt-2 py-2 bg-white rounded-xl shadow-xl border border-gray-100">
                <Link href="/shop/ebooks" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500 transition-colors">
                  E-books
                </Link>
                <Link href="/shop/audiovisual" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500 transition-colors">
                  Audiovisual Content
                </Link>
                <Link href="/shop/live-training" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-500 transition-colors">
                  Live Training
                </Link>
              </div>
            </div>
            
            <Link href="/blog" className="text-lg font-medium text-gray-700 hover:text-yellow-500 transition-colors duration-200">
              Blog
            </Link>
            <Link href="/community" className="text-lg font-medium text-gray-700 hover:text-yellow-500 transition-colors duration-200">
              Community
            </Link>
            <Link href="/contact" className="text-lg font-medium text-gray-700 hover:text-yellow-500 transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-800 w-64 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
            </div>
            
            <button className="text-gray-700 hover:text-yellow-500 transition-colors duration-200 relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 mt-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-lg font-medium text-gray-700 hover:text-yellow-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="pl-4 border-l-2 border-yellow-500">
                <Link 
                  href="/shop" 
                  className="text-lg font-medium text-gray-700 hover:text-yellow-500 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop
                </Link>
                <div className="pl-4 mt-2 space-y-2">
                  <Link 
                    href="/shop/ebooks" 
                    className="block text-gray-600 hover:text-yellow-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    E-books
                  </Link>
                  <Link 
                    href="/shop/audiovisual" 
                    className="block text-gray-600 hover:text-yellow-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Audiovisual Content
                  </Link>
                  <Link 
                    href="/shop/live-training" 
                    className="block text-gray-600 hover:text-yellow-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Live Training
                  </Link>
                </div>
              </div>
              <Link 
                href="/blog" 
                className="text-lg font-medium text-gray-700 hover:text-yellow-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/community" 
                className="text-lg font-medium text-gray-700 hover:text-yellow-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                href="/contact" 
                className="text-lg font-medium text-gray-700 hover:text-yellow-500 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 border-t border-gray-100 mt-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;