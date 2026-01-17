import React, { useState } from 'react';
import { Trash2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import QuantitySelector from '@/components/QuantitySelector';
import RatingStars from '@/components/RatingStars';
import { useLanguage } from '@/contexts/LanguageContext';
import sportsBanner from '@/assets/sports-banner.jpg';

const cartItems = [
  {
    id: '1',
    name: 'Smart Laptop With 15.6 Inch Display, AMD Ryzen5 7430U Processor/16GB RAM...',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop',
    price: 1259,
    rating: 4.5,
    reviewCount: '3.5k',
    freeShipping: true,
    quantity: 1,
  },
];

const recommendedProducts = [
  {
    id: '1',
    name: 'Osmo Pocket 3 Creator Combo, Vlogging Camera With 1" CMOS & 4K/120fps Video, 3-Axis',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop',
    price: 1921.95,
    originalPrice: 2219,
    rating: 4.5,
    reviewCount: '3.5k',
  },
  {
    id: '2',
    name: 'Acemgaic Gaming Laptop With 15.6 Inch Display, AMD Ryzen5 7430U Processor/16GB RAM',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop',
    price: 1659,
    originalPrice: 2499,
    rating: 4.5,
    reviewCount: '3.5k',
  },
  {
    id: '3',
    name: 'Essentials Pour Homme | The Signature Smoky-Fruity Eau De Parfum for Men | Intense',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=300&fit=crop',
    price: 69,
    originalPrice: 199,
    rating: 4.5,
    reviewCount: '3.5k',
  },
  {
    id: '4',
    name: 'Front Loading Washing Machine WFSQ8012VMT, 1200RPM, SteamWash, Durable Inverter, Quick',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop',
    price: 854.60,
    originalPrice: 1299,
    rating: 4.5,
    reviewCount: '3.5k',
  },
  {
    id: '5',
    name: 'Cool Water Intense Eau De Parfum 125ml',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=300&fit=crop',
    price: 854.60,
    originalPrice: 1299,
    rating: 4.5,
    reviewCount: '3.5k',
  },
  {
    id: '6',
    name: 'Xiaom Redmi Watch 5 Active - Budget-Friendly Smartwatch with 2" LCD Display, Fitness',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
    price: 1659,
    originalPrice: 2499,
    rating: 4.5,
    reviewCount: '3.5k',
  },
  {
    id: '7',
    name: 'Bournvita Chocolate Drink 500grams',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
    price: 17.50,
    originalPrice: 20.01,
    rating: 4.5,
    reviewCount: '3.5k',
  },
  {
    id: '8',
    name: '1200 Watt Hair Dryer Brush Ceramic Dryer And Styler 2 In 1 Professional Black/Beige 1200W',
    image: 'https://images.unsplash.com/photo-1522338242042-2d1c917f7a5a?w=300&h=300&fit=crop',
    price: 73.45,
    originalPrice: 288,
    rating: 4.5,
    reviewCount: '3.5k',
  },
];

const CartPage: React.FC = () => {
  const { t, currencySymbol } = useLanguage();
  const [items, setItems] = useState(cartItems);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Layout>
      <div className="bg-[#FBFAFF] min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Banner */}
          <div className="w-full mb-8 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
            <img src={sportsBanner} alt="50% Off Sports Shoes" className="w-full h-auto object-cover" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Cart Items */}
            <div className="flex-1 space-y-6 w-full">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 relative overflow-hidden">
                  {/* Decorative element like the image */}
                  <div className="absolute top-0 right-0 w-32 h-full bg-[#FBFAFF] -z-0 pointer-events-none md:block hidden" />
                  
                  <div className="w-full md:w-48 h-48 bg-[#F9F5FF] rounded-2xl overflow-hidden border border-[#E9D7FE] flex-shrink-0 flex items-center justify-center p-4 relative z-10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between relative z-10">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-3 mb-4">
                        <RatingStars rating={item.rating} size="sm" />
                        <span className="text-lg font-bold text-gray-900">{item.rating}</span>
                        <span className="text-gray-400 underline font-medium">{item.reviewCount} review</span>
                      </div>
                      <p className="text-sm text-gray-500 font-semibold mb-6">Eligible for free shipping</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                      <QuantitySelector 
                        quantity={item.quantity} 
                        onIncrease={() => setItems(items.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i))}
                        onDecrease={() => setItems(items.map(i => i.id === item.id ? {...i, quantity: Math.max(1, i.quantity - 1)} : i))}
                      />
                      <button className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors py-2 font-bold text-sm uppercase tracking-wider group">
                        <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-red-50 group-hover:border-red-100">
                          <Trash2 className="w-4 h-4" />
                        </div>
                        Remove
                      </button>
                      <button className="flex items-center gap-2 text-[#7F56D9] hover:text-[#530084] transition-colors py-2 font-bold text-sm uppercase tracking-wider group">
                        <div className="w-8 h-8 rounded-full border border-[#E9D7FE] flex items-center justify-center group-hover:bg-[#F4EBFF]">
                          <Heart className="w-4 h-4" />
                        </div>
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="w-full lg:w-96 space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="text-center mb-8">
                  <h4 className="text-lg font-bold text-gray-700 mb-4">Got a coupon?</h4>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Coupon code" 
                      className="flex-1 bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20"
                    />
                    <button className="bg-[#530084] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#400066] transition-colors shadow-md text-sm">
                      APPLY
                    </button>
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex flex-col items-center justify-center text-center gap-2">
                    <span className="text-2xl font-bold text-[#530084]">Subtotal ({items.length} item)</span>
                    <span className="text-4xl font-black text-gray-900">{currencySymbol} {subtotal.toLocaleString()}</span>
                  </div>
                  <Link to="/checkout/delivery" className="w-full bg-[#530084] text-white font-bold py-4 rounded-2xl hover:bg-[#400066] transition-colors shadow-lg mt-4 uppercase tracking-widest text-lg block text-center">
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-black text-[#530084] uppercase tracking-wider mb-10">YOU MAY ALSO LIKE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="relative aspect-square mb-6 bg-[#F9F5FF] rounded-2xl overflow-hidden p-6 border border-[#E9D7FE]">
                    <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-gray-300 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-900">{product.rating}</span>
                      <RatingStars rating={product.rating} size="xs" />
                      <span className="text-[10px] text-gray-400 font-bold">{product.reviewCount}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 line-clamp-2 leading-snug min-h-[2.5rem]">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black text-gray-900">{currencySymbol} {product.price.toLocaleString()}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-300 line-through font-bold">{currencySymbol} {product.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
