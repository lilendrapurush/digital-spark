import { Link } from '@inertiajs/react';
import { Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary-500 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-navy-900 text-white rounded-full">H</span>
          <div>
            <h1 className="text-xl font-bold text-white">Help and Grow</h1>
            <p className="text-sm text-white">Digital Solutions</p>
          </div>
        </div>

        {/* Navigation (Hidden on mobile) */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-primary-200">Home</Link>
          <Link href="/shop" className="text-white hover:text-primary-200">Shop</Link>
          <Link href="/blog" className="text-white hover:text-primary-200">Blog</Link>
          <Link href="/community" className="text-white hover:text-primary-200">Community</Link>
          <Link href="/contact" className="text-white hover:text-primary-200">Contact</Link>
        </nav>

        {/* Search & Cart */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 rounded-full bg-white text-navy-800 w-64 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <Search className="absolute left-3 top-2.5 text-primary-500 w-5 h-5" />
          </div>
          <button className="text-white">
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;