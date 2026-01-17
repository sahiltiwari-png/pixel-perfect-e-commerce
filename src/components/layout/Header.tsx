import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, User, ChevronDown, Globe, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';
import AuthModal from '../auth/AuthModal';

const navItems = [
  { key: 'nav.electronics', href: '/products?category=electronics' },
  { key: 'nav.fashion', href: '/products?category=fashion' },
  { key: 'nav.home_kitchen', href: '/products?category=home-kitchen' },
  { key: 'nav.beauty', href: '/products?category=beauty' },
  { key: 'nav.grocery', href: '/products?category=grocery' },
  { key: 'nav.accessories', href: '/products?category=accessories' },
  { key: 'nav.others', href: '/products?category=others' },
];

const Header: React.FC = () => {
  const { t, language, setLanguage, country, setCountry } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const navigate = useNavigate();

  const countryFlag = country === 'dubai' 
    ? '🇦🇪' 
    : '🇳🇵';

  const languageLabel = language === 'en' ? 'English' : language === 'ne' ? 'नेपाली' : 'العربية';

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Nepoora" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="w-full h-10 pl-4 pr-10 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Country Selector */}
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="text-2xl">{countryFlag}</span>
              <div className="text-xs">
                <span className="text-muted-foreground">{t('deliver.to')}</span>
                <div className="font-medium capitalize">{country}</div>
              </div>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="hidden md:flex items-center gap-1 text-sm px-2 py-1 hover:bg-secondary rounded-md transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{languageLabel}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-md shadow-lg py-1 min-w-[120px] z-50">
                  <button
                    onClick={() => { setLanguage('en'); setCountry('dubai'); setShowLanguageDropdown(false); }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-secondary transition-colors"
                  >
                    🇦🇪 English
                  </button>
                  <button
                    onClick={() => { setLanguage('ne'); setCountry('nepal'); setShowLanguageDropdown(false); }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-secondary transition-colors"
                  >
                    🇳🇵 नेपाली
                  </button>
                  <button
                    onClick={() => { setLanguage('ar'); setCountry('dubai'); setShowLanguageDropdown(false); }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-secondary transition-colors"
                  >
                    🇦🇪 العربية
                  </button>
                </div>
              )}
            </div>

            {/* Login */}
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="hidden md:flex items-center gap-1 text-sm px-3 py-1.5 hover:bg-secondary rounded-md transition-colors"
            >
              <User className="w-4 h-4" />
              <span>{t('login')}</span>
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2 hover:bg-secondary rounded-md transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-xs font-medium rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 hover:bg-secondary rounded-md transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-xs font-medium rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-6 h-12 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.href}
                  className="nav-link whitespace-nowrap text-xs font-medium tracking-wide"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg animate-slide-in">
          {/* Mobile Search */}
          <div className="p-4 border-b border-border">
            <div className="relative">
              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="w-full h-10 pl-4 pr-10 border border-border rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Mobile Nav Items */}
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium hover:bg-secondary transition-colors"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Language/Country */}
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{countryFlag}</span>
              <select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value as 'dubai' | 'nepal');
                  setLanguage(e.target.value === 'nepal' ? 'ne' : 'en');
                }}
                className="flex-1 h-10 px-3 border border-border rounded-md bg-background text-sm"
              >
                <option value="dubai">Dubai (UAE)</option>
                <option value="nepal">Nepal</option>
              </select>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'ne' | 'ar')}
              className="w-full h-10 px-3 border border-border rounded-md bg-background text-sm"
            >
              <option value="en">English</option>
              <option value="ne">नेपाली</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      )}
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
