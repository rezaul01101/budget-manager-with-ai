import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-purple-900/95 to-blue-900/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-linear-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">BudgetPro</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-purple-200 hover:text-pink-400 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="text-purple-200 hover:text-pink-400 transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-6 py-2 bg-linear-to-br from-pink-500 to-purple-600 rounded-full font-semibold text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-pink-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-purple-200 hover:text-pink-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2 border-t border-white/10">
              <Link
                to="/login"
                className="block text-center text-purple-200 hover:text-pink-400 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block text-center px-6 py-2 bg-linear-to-br from-pink-500 to-purple-600 rounded-full font-semibold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
