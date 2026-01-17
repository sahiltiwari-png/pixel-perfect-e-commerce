import React, { useState, useRef } from 'react';
import { Search, Heart, ShoppingCart, User, ChevronDown, Globe, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const scrollRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const countryFlag = country === 'dubai' 
    ? '🇦🇪' 
    : '🇳🇵';

  const languageLabel = language === 'en' ? 'English' : language === 'ne' ? 'नेपाली' : 'العربية';

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary/20">
      {/* Top Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Nepoora" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="w-full h-10 pl-4 pr-10 border-none rounded-md bg-white text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4 text-white">
            {/* Country Selector */}
            <div className="hidden md:flex items-center gap-2 text-sm border-r border-white/20 pr-4">
              <span className="text-2xl">{countryFlag}</span>
              <div className="text-xs">
                <span className="text-white/70">{t('deliver.to')}</span>
                <div className="font-bold capitalize">{country}</div>
              </div>
            </div>

            {/* Language Selector */}
            <div className="relative border-r border-white/20 pr-4">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="hidden md:flex items-center gap-1 text-sm px-2 py-1 hover:bg-white/10 rounded-md transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{languageLabel}</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute right-0 top-full mt-1 bg-white text-foreground border border-border rounded-md shadow-lg py-1 min-w-[140px] z-50">
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
              className="hidden md:flex items-center gap-2 text-sm px-3 py-1.5 hover:bg-white/10 rounded-md transition-colors font-medium"
            >
              <span>{t('login')}</span>
              <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
            </button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2 hover:bg-white/10 rounded-md transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-white text-primary text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 hover:bg-white/10 rounded-md transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-white text-primary text-[10px] font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block bg-white border-t border-border">
        <div className="container mx-auto px-4 relative flex items-center group">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 z-10 p-1 bg-white shadow-md rounded-full transition-opacity hover:bg-secondary"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <ul 
            ref={scrollRef}
            className="flex items-center justify-center gap-8 w-full h-12 overflow-x-auto scrollbar-hide"
          >
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.href}
                  className="text-foreground hover:text-primary whitespace-nowrap text-[11px] font-bold tracking-wider uppercase transition-colors"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 z-10 p-1 bg-white shadow-md rounded-full transition-opacity hover:bg-secondary"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg animate-slide-in">
          {/* Mobile Search */}
          <div className="p-4 border-b border-border bg-primary">
            <div className="relative">
              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="w-full h-10 pl-4 pr-10 border-none rounded-md bg-white text-sm focus:outline-none"
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
                  className="block px-4 py-3 text-sm font-bold hover:bg-secondary transition-colors uppercase"
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
