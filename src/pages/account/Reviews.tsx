import React from 'react';
import { Filter, Pencil, Trash2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AccountSidebar from '@/components/AccountSidebar';
import RatingStars from '@/components/RatingStars';
import { useLanguage } from '@/contexts/LanguageContext';

const reviews = [
  { id: '1', product: 'Xiaomi Redmi Watch 5 Active - Budget-Friendly Smartwatch with 2" LCD Display, Fitness', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100', rating: 5, date: 'Jan 04, 2026', text: 'Great smartwatch with a bright, responsive display and smooth performance. Health tracking and notifications work accurately for daily use. Comfortable design, good battery life, and easy smartphone connectivity.' },
  { id: '2', product: 'BLACKROOT Black half sleeve tshirt perfect for men', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100', rating: 5, date: 'Jul 01, 2025', text: 'Very comfortable loose t-shirt with a soft, breathable fabric. The relaxed fit looks stylish and feels perfect for all-day wear. Good quality stitching and color stays fresh after washing.' },
  { id: '3', product: 'XWH-CH520 Black Wireless Bluetooth On Ear With Mic For Phone Call Beige', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100', rating: 5, date: 'Mar 12, 2024', text: 'Excellent sound quality with clear audio and deep bass. Comfortable fit makes it perfect for long listening sessions.' },
];

const ReviewsPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className="bg-[#FBFAFF] min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 ml-4 md:ml-0">Account</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <AccountSidebar />
            
            <div className="flex-1 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">My Reviews</h2>
                <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                  <Filter className="w-4 h-4" />
                  Recent
                </button>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-white border border-[#E9D7FE] rounded-2xl p-6 hover:shadow-md transition-all duration-200">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-32 h-32 bg-[#F9F5FF] rounded-xl overflow-hidden flex-shrink-0 border border-[#E9D7FE]">
                        <img src={review.image} alt={review.product} className="w-full h-full object-contain p-2" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{review.product}</h3>
                        <div className="flex items-center gap-4 mb-3">
                          <RatingStars rating={review.rating} size="sm" />
                          <span className="text-2xl font-bold text-gray-900">{review.rating}.0</span>
                        </div>
                        <p className="text-sm text-gray-400 font-medium mb-4">Reviewed on {review.date}</p>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium mb-6">{review.text}</p>
                        
                        <div className="flex gap-4 pt-6 border-t border-gray-100">
                          <button className="flex items-center gap-2 text-xs font-bold text-[#7F56D9] bg-[#F9F5FF] border border-[#E9D7FE] px-4 py-2 rounded-lg hover:bg-[#F4EBFF] transition-colors">
                            <Pencil className="w-3.5 h-3.5" />
                            Edit Review
                          </button>
                          <button className="flex items-center gap-2 text-xs font-bold text-red-500 bg-white border border-red-100 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                            <Trash2 className="w-3.5 h-3.5" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReviewsPage;
