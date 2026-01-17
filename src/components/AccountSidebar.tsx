import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Package,
  Heart,
  CreditCard,
  Star,
  MapPin,
  Settings,
  Headphones,
  LogOut,
  User,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AccountSidebar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const menuItems = [
    { key: 'my_orders', icon: Package, href: '/account/orders' },
    { key: 'my_wishlist', icon: Heart, href: '/wishlist' },
    { key: 'payment_method', icon: CreditCard, href: '/account/payment' },
    { key: 'my_reviews', icon: Star, href: '/account/reviews' },
    { key: 'address', icon: MapPin, href: '/account/address' },
    { key: 'account_setting', icon: Settings, href: '/account/settings' },
    { key: 'help_center', icon: Headphones, href: '/account/help' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="w-full md:w-72 bg-[#F9F5FF] rounded-3xl overflow-hidden p-6">
      {/* Profile Section */}
      <div className="relative text-center mb-8">
        {/* User Icon top right */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#E9D7FE] rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-[#7F56D9]" />
        </div>

        {/* Avatar */}
        <div className="relative inline-block mb-4">
          <div className="w-32 h-32 rounded-full p-1 border-4 border-[#F9F5FF] shadow-[0_0_0_4px_#FDA29B] overflow-hidden mx-auto bg-white">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              alt="Alex Suprun"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Verified Badge */}
          <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#7F56D9] rounded-full flex items-center justify-center border-2 border-white shadow-sm">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Alex Suprun</h2>

        {/* Premium Badge */}
        <div className="inline-block px-6 py-2 bg-[#E9D7FE] text-[#7F56D9] text-sm font-semibold rounded-full">
          {t('premium_member')}
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.key}
              to={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                active 
                ? 'bg-[#530084] text-white shadow-md' 
                : 'text-gray-700 hover:bg-[#F4EBFF] hover:text-[#7F56D9]'
              }`}
            >
              <div className={`p-1.5 rounded-lg ${active ? 'bg-white/20' : 'bg-white border border-gray-100'}`}>
                <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-gray-500'}`} />
              </div>
              <span className="text-sm font-semibold">{t(item.key)}</span>
            </Link>
          );
        })}

        {/* Logout */}
        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-[#F4EBFF] hover:text-[#7F56D9] transition-all duration-200">
          <div className="p-1.5 rounded-lg bg-white border border-gray-100">
            <LogOut className="w-5 h-5 text-gray-500" />
          </div>
          <span className="text-sm font-semibold">{t('logout')}</span>
        </button>
      </nav>
    </div>
  );
};

export default AccountSidebar;
