import React from 'react';
import Layout from '@/components/layout/Layout';
import RatingStars from '@/components/RatingStars';
import QuantitySelector from '@/components/QuantitySelector';
import groceryBanner from '@/assets/grocery-banner.jpg';

const products = [
  {
    id: '1',
    name: 'Redmi Watch 5 Active - Budget-Friendly Smartwatch with 2" LCD Display, Fitness',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200',
    rating: 4.5,
    reviews: '3.5k',
    price: 1259.00,
    freeShipping: true,
  },
  {
    id: '2',
    name: 'Cool Water Intense Eau De Parfum 125ml',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200',
    rating: 4.5,
    reviews: '3.5k',
    price: 1259.00,
    freeShipping: true,
  },
  {
    id: '3',
    name: 'Opti-Men Post-Workout - 90 Tablets',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=200',
    rating: 4.5,
    reviews: '3.5k',
    price: 1259.00,
    freeShipping: true,
  },
  {
    id: '4',
    name: 'Sleep Headphones Sleep Mask with Bluetooth Headphones RENPHO Ultra Soft 3D Blackout',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200',
    rating: 4.5,
    reviews: '3.5k',
    price: 1259.00,
    freeShipping: true,
  },
];

const GroceryPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        {/* Banner */}
        <div className="w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
          <img src={groceryBanner} alt="Daily Grocery Best Quality" className="w-full h-auto object-cover" />
        </div>

        {/* Product List */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col md:flex-row bg-white rounded-2xl p-6 shadow-sm border border-gray-100 items-center md:items-stretch gap-6">
              {/* Product Image */}
              <div className="w-48 h-48 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center p-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between py-2 text-center md:text-left">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <RatingStars rating={product.rating} size="sm" />
                    <span className="text-sm font-bold text-gray-900">{product.rating}</span>
                    <span className="text-sm text-gray-400 underline font-medium">{product.reviews} review</span>
                  </div>
                  {product.freeShipping && (
                    <p className="text-sm text-gray-500 font-medium">Eligible for free shipping</p>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
                  <QuantitySelector 
                    quantity={1} 
                    onIncrease={() => {}} 
                    onDecrease={() => {}} 
                  />
                </div>
              </div>

              {/* Price and Actions */}
              <div className="w-full md:w-64 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8 flex flex-col justify-between items-center md:items-end">
                <div className="text-center md:text-right mb-6">
                  <p className="text-sm text-gray-400 font-bold mb-1">item added in January 2025</p>
                  <div className="flex items-center justify-center md:justify-end gap-1">
                    <span className="text-3xl font-black text-gray-900">฿ {product.price.toFixed(2)}</span>
                  </div>
                </div>

                <div className="w-full space-y-3">
                  <button className="w-full bg-[#530084] text-white font-bold py-3 rounded-xl hover:bg-[#400066] transition-colors shadow-md">
                    ADD TO CART
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-red-500 transition-colors py-2 group">
                    <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-red-50 group-hover:border-red-100">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider">Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GroceryPage;
