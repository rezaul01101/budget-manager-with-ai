import { Wallet, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-purple-900/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">BudgetPro</span>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Take control of your finances with smart budgeting tools designed for modern life.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-purple-200 hover:text-pink-400 transition-colors text-sm">Features</Link></li>
              <li><Link to="/pricing" className="text-purple-200 hover:text-pink-400 transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/" className="text-purple-200 hover:text-pink-400 transition-colors text-sm">How It Works</Link></li>
              <li><Link to="/" className="text-purple-200 hover:text-pink-400 transition-colors text-sm">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-purple-200 hover:text-pink-400 transition-colors text-sm">About</Link></li>
              <li><Link to="/contact" className="text-purple-200 hover:text-pink-400 transition-colors text-sm">Contact</Link></li>
              <li><a href="#" className="text-purple-200 hover:text-pink-400 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-purple-200 hover:text-pink-400 transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10">
                <Facebook className="w-5 h-5 text-purple-200" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10">
                <Twitter className="w-5 h-5 text-purple-200" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10">
                <Instagram className="w-5 h-5 text-purple-200" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10">
                <Linkedin className="w-5 h-5 text-purple-200" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-purple-300 text-sm">
            © 2024 BudgetPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
