import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBanner from '@/assets/hero-banner.jpg'; 
import watchBanner from '@/assets/watch-banner.jpg'; 

// Sample product data
const sampleProducts = [
  {
    id: '1',
    name: 'Apple iPhone 17 Pro Max 256 GB Cosmic Orange 5G eSim only) With FaceTime - Middle East Version',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop',
    price: 4506,
    originalPrice: 4508,
    rating: 4.8,
    reviewCount: '3.5k',
    isBestSeller: false,
  },
  {
    id: '2',
    name: 'iOS Only Bluetooth Tracker Up to 7 Item Battery, Keep Finder and Item Locator for Phones, Bags',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300&h=300&fit=crop',
    price: 55,
    originalPrice: 89,
    rating: 4.5,
    reviewCount: '3.5k',
    isBestSeller: false,
  },
  {
    id: '3',
    name: 'XWH-CH520 Wireless Bluetooth On Ear With Mic For Phone Call Beige',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    price: 126,
    originalPrice: 189,
    rating: 4.5,
    reviewCount: '3.5k',
    isBestSeller: false,
  },
  {
    id: '4',
    name: 'Front Loading Washing Machine WFSQ8012VMT, 1200RPM, SteamWash, Durable Inverter, Quick',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop',
    price: 854.60,
    originalPrice: 1299,
    rating: 4.5,
    reviewCount: '3.5k',
    isBestSeller: false,
  },
  {
    id: '5',
    name: 'Galaxy S25 Ultra AI Dual SIM Titanium Black 12GB RAM 256GB 5G - Middle East Version',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop',
    price: 3249,
    originalPrice: 3699,
    rating: 4.5,
    reviewCount: '3.5k',
    isBestSeller: false,
  },
];

const bestSellerProducts = [
  {
    id: '6',
    name: '(Upgraded Version) Vivebook 14 Laptop With 14 Inch Display, Core i7-1165G7 Processor/16GB RAM',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop',
    price: 1988.85,
    originalPrice: 2599,
    rating: 4.5,
    reviewCount: '3.5k',
    isBestSeller: true,
  },
  {
    id: '7',
    name: 'Acemgaic Gaming Laptop With 15.6 Inch Display, AMD Ryzen5 7430U Processor/16GB RAM',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop',
    price: 1659,
    originalPrice: 2499,
    rating: 4.5,
    reviewCount: '3.5k',
    isBestSeller: true,
  },
  {
    id: '8',
    name: 'Apple iPhone 16 Pro Max 256GB Desert Titanium 5G With FaceTime - Middle East Version',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop',
    price: 4299,
    originalPrice: 4506,
    rating: 4.5,
    reviewCount: '3.5k',
    isBestSeller: true,
  },
  {
    id: '9',
    name: 'Front Loading Washing Machine WFSQ8012VMT, 1200RPM, SteamWash, Durable Inverter, Quick',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop',
    price: 854.60,
    originalPrice: 1299,
    rating: 4.5,
    reviewCount: '3.5k',
    isBestSeller: false,
  },
  {
    id: '10',
    name: 'Sleep Headphones Sleep Mask with Bluetooth Headphones RENPHO Ultra Soft 3D Blackout',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop',
    price: 109,
    originalPrice: 159,
    rating: 4.5,
    reviewCount: '3.5k',
    isBestSeller: false,
  },
];

const trendingProducts = [
  {
    id: '11',
    name: 'Front Loading Washing Machine WFSQ8012VMT, 1200RPM, SteamWash, Durable Inverter, Quick',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300&h=300&fit=crop',
    price: 854.60,
    originalPrice: 1599,
    rating: 4.8,
    reviewCount: '3.5k',
    isBestSeller: true,
  },
  {
    id: '12',
    name: 'B&Z Waterproof Footwear Boots - Black',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    price: 69.90,
    originalPrice: 99,
    rating: 4.8,
    reviewCount: '3.5k',
    isBestSeller: true,
  },
  {
    id: '13',
    name: "Women's Full Block Low-Top Sneakers - Fashionable Lace-Up Style Shoes, Perfect for",
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=300&fit=crop',
    price: 129,
    originalPrice: 189,
    rating: 4.8,
    reviewCount: '3.5k',
    isBestSeller: false,
  },
  {
    id: '14',
    name: '3000 Series Blender, Smooth Blends with no lumps In 45 seconds 1.8 L 450 W MR2034/16',
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=300&h=300&fit=crop',
    price: 3249,
    originalPrice: 4506,
    rating: 4.8,
    reviewCount: '3.5k',
    isBestSeller: false,
  },
  {
    id: '15',
    name: '16-Piece Cookware Set - Aluminum Pots And Pans - Non Stick Surface - Wood Handles',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
    price: 139,
    originalPrice: 189,
    rating: 4.3,
    reviewCount: '3.5k',
    isBestSeller: false,
  },
];

const categories = [
  { name: 'MOBILES & ACCESSORIES', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=120&h=120&fit=crop' },
  { name: 'GROOMING KIT', image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=120&h=120&fit=crop' },
  { name: 'GAMING ESSENTIALS', image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=120&h=120&fit=crop' },
  { name: 'FOOTWEAR', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120&h=120&fit=crop' },
  { name: 'KITCHEN APPLIANCES', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=120&h=120&fit=crop' },
  { name: 'LAPTOPS & ACCESSORIES', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=120&h=120&fit=crop' },
];

const megaDeals = [
  {
    title: '30%off',
    subtitle: 'Gaming Laptop',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=200&fit=crop',
    bgColor: 'bg-primary',
  },
  {
    title: '50%off',
    subtitle: 'WINTER WEAR',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=200&fit=crop',
    bgColor: 'bg-orange',
  },
];

const womensFashion = [
  { name: 'Pants', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=150&fit=crop' },
  { name: 'Tops', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=150&h=150&fit=crop' },
  { name: 'Winter wear', image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=150&h=150&fit=crop' },
  { name: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&h=150&fit=crop' },
  { name: 'Footwear', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=150&h=150&fit=crop' },
  { name: 'Handbag', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=150&h=150&fit=crop' },
];

const mensFashion = [
  { name: 'Tshirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop' },
  { name: 'Sportswear', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150&h=150&fit=crop' },
  { name: 'Pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=150&h=150&fit=crop' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=150&h=150&fit=crop' },
  { name: 'Shoes', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=150&h=150&fit=crop' },
  { name: 'Jackets', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=150&h=150&fit=crop' },
];

const homeKitchen = [
  { name: 'Lighting', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=150&h=150&fit=crop' },
  { name: 'Cookware', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=150&fit=crop' },
  { name: 'Furniture', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150&h=150&fit=crop' },
  { name: 'Dinnerware', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=150&h=150&fit=crop' },
  { name: 'Bedding', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=150&h=150&fit=crop' },
  { name: 'Storage & organization', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop' },
];

const heroBanners = [
  { image: heroBanner, alt: 'The New iPhone Experience' },
  { image: watchBanner, alt: 'Watch Timeless Elegance' },
];

const Index: React.FC = () => {
  const { t, currencySymbol } = useLanguage();
  const [countdown, setCountdown] = useState({ hours: 18, minutes: 33, seconds: 24 });
  const [currentSlide, setCurrentSlide] = useState(0);

  const categoryRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 400;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative">
        <div className="w-full h-48 md:h-64 lg:h-80 overflow-hidden">
          <img
            src={heroBanners[currentSlide].image}
            alt={heroBanners[currentSlide].alt}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-md">
                <div className="bg-accent text-accent-foreground inline-block px-4 py-1 rounded-full text-sm font-medium mb-2">
                  Book Your Order Now! ↗
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroBanners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === currentSlide ? 'bg-primary' : 'bg-primary/30'}`}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-6 relative group">
        <button 
          onClick={() => scroll(categoryRef, 'left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-lg rounded-full transition-opacity hover:bg-secondary border border-border"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div 
          ref={categoryRef}
          className="flex overflow-x-auto scrollbar-hide gap-3 md:gap-4 pb-2"
        >
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={`/products?category=${cat.name.toLowerCase().replace(/ & /g, '-')}`}
              className="text-center group flex-shrink-0 w-[calc(33.333%-12px)] sm:w-[calc(25%-12px)] md:w-[calc(16.666%-16px)]"
            >
              <div className="aspect-square rounded-lg overflow-hidden border border-border group-hover:border-primary transition-colors mb-2">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] md:text-xs font-medium text-foreground leading-tight block">{cat.name}</span>
            </Link>
          ))}
        </div>
        <button 
          onClick={() => scroll(categoryRef, 'right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-lg rounded-full transition-opacity hover:bg-secondary border border-border"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* Mega Deals */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
          <h2 className="text-lg md:text-xl font-bold text-foreground">{t('mega_deals')}</h2>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">{t('hurry_up')}</span>
            <div className="flex items-center gap-1 bg-red text-white px-2 py-1 rounded font-mono text-xs">
              <span>{String(countdown.hours).padStart(2, '0')}</span>:
              <span>{String(countdown.minutes).padStart(2, '0')}</span>:
              <span>{String(countdown.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Mega Deal Banners */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:col-span-1">
            {megaDeals.map((deal, idx) => (
              <div
                key={idx}
                className={`${deal.bgColor} rounded-lg p-4 text-primary-foreground relative overflow-hidden h-36`}
              >
                <div className="relative z-10">
                  <div className="text-xl font-bold">{deal.title}</div>
                  <div className="text-sm opacity-90">{deal.subtitle}</div>
                  <button className="mt-2 text-xs underline">Shop now</button>
                </div>
                <img
                  src={deal.image}
                  alt={deal.subtitle}
                  className="absolute right-0 bottom-0 w-20 h-20 object-cover opacity-50"
                />
              </div>
            ))}
          </div>

          {/* Products */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sampleProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Recommended For You */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-foreground">{t('recommended')}</h2>
          <Link to="/products" className="text-sm text-primary hover:underline">
            {t('view_more')}
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Lowest Prices on Top Brands */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-foreground">{t('lowest_prices')}</h2>
          <Link to="/products" className="text-sm text-primary hover:underline">
            {t('view_more')}
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Trending Now */}
      <section className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-foreground">{t('trending_now')}</h2>
          <Link to="/products" className="text-sm text-primary hover:underline">
            {t('view_more')}
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Watch Banner */}
      <section className="container mx-auto px-4 py-6">
        <div className="relative rounded-lg overflow-hidden h-48 md:h-64 lg:h-80">
          <img
            src={watchBanner}
            alt="Watch Timeless Elegance"
            className="w-full h-full object-cover"
          />
          <div className="absolute right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 text-right max-w-[50%]">
            <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-accent mb-1">
              {currencySymbol}2,699
            </div>
            <div className="text-sm sm:text-lg text-muted-foreground line-through">4,699</div>
          </div>
          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${i === 0 ? 'bg-primary' : 'bg-primary/30'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Women's Fashion */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">{t('womens_fashion')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {womensFashion.map((item, idx) => (
            <Link
              key={idx}
              to={`/products?category=womens-${item.name.toLowerCase()}`}
              className="text-center group"
            >
              <div className="flex flex-col items-center">
                <div className="aspect-square w-full max-w-[140px] md:max-w-[160px] rounded-2xl bg-muted/50 overflow-hidden mb-3 group-hover:shadow-lg transition-shadow">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Men's Fashion */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">{t('mens_fashion')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {mensFashion.map((item, idx) => (
            <Link
              key={idx}
              to={`/products?category=mens-${item.name.toLowerCase()}`}
              className="text-center group"
            >
              <div className="flex flex-col items-center">
                <div className="aspect-square w-full max-w-[140px] md:max-w-[160px] rounded-2xl bg-muted/50 overflow-hidden mb-3 group-hover:shadow-lg transition-shadow">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Home & Kitchen */}
      <section className="container mx-auto px-4 py-6 mb-8">
        <h2 className="text-lg md:text-xl font-bold text-foreground mb-4">{t('home_kitchen')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {homeKitchen.map((item, idx) => (
            <Link
              key={idx}
              to={`/products?category=home-${item.name.toLowerCase()}`}
              className="text-center group"
            >
              <div className="flex flex-col items-center">
                <div className="aspect-square w-full max-w-[140px] md:max-w-[160px] rounded-2xl bg-muted/50 overflow-hidden mb-3 group-hover:shadow-lg transition-shadow">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
