import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from '@inertiajs/react'; // ✅ Correct import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'Community', href: '/community' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0 pr-8">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-2xl">H</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight whitespace-nowrap">Help and Grow</h1>
              <p className="text-sm opacity-90 font-medium whitespace-nowrap">Digital Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 flex-1 justify-center">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href} // ✅ href, not to
                className="hover:text-accent transition-colors duration-200 font-medium text-sm lg:text-base whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
              <Input
                placeholder="Search products..."
                className="pl-10 w-52 h-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-lg"
              />
            </div>
            <Button variant="ghost" size="sm" className="relative h-10 w-10">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="relative h-10 w-10">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 bg-accent text-primary text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href} // ✅ href
                  className="hover:text-accent transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
                <Button variant="ghost" size="sm" className="relative">
                  <User className="h-5 w-5 mr-2" />
                  Login
                </Button>
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart ({cartCount})
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;