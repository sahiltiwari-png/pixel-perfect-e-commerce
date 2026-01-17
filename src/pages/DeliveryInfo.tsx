import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const DeliveryInfoPage: React.FC = () => {
  const { t, currencySymbol } = useLanguage();
  const [label, setLabel] = useState<'OFFICE' | 'HOME'>('HOME');

  return (
    <Layout>
      <div className="bg-[#FBFAFF] min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Delivery Form */}
            <div className="flex-1 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Delivery Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                {/* Full Name */}
                <div>
                  <label className="text-sm font-bold text-gray-900 mb-2 block">Full name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your first and last name" 
                    className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20" 
                  />
                </div>

                {/* Region */}
                <div>
                  <label className="text-sm font-bold text-gray-900 mb-2 block">Region</label>
                  <div className="relative">
                    <select className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-400 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20">
                      <option>Please choose your region</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-sm font-bold text-gray-900 mb-2 block">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Please enter your phone number" 
                    className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20" 
                  />
                </div>

                {/* City */}
                <div>
                  <label className="text-sm font-bold text-gray-900 mb-2 block">City</label>
                  <div className="relative">
                    <select className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-400 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20">
                      <option>Please choose your city</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Building/Street */}
                <div>
                  <label className="text-sm font-bold text-gray-900 mb-2 block">Building / House No / Floor / Street</label>
                  <input 
                    type="text" 
                    placeholder="Please enter" 
                    className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20" 
                  />
                </div>

                {/* Area */}
                <div>
                  <label className="text-sm font-bold text-gray-900 mb-2 block">Area</label>
                  <div className="relative">
                    <select className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-400 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20">
                      <option>Please choose your area</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Colony/Landmark */}
                <div>
                  <label className="text-sm font-bold text-gray-900 mb-2 block">Colony / Suburb / Locality / Landmark</label>
                  <input 
                    type="text" 
                    placeholder="Please enter" 
                    className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20" 
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="text-sm font-bold text-gray-900 mb-2 block">Address</label>
                  <input 
                    type="text" 
                    placeholder="example House# 123, Street# 123, ABC Road" 
                    className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20" 
                  />
                </div>
              </div>

              {/* Label Selector */}
              <div className="mb-10">
                <label className="text-sm font-bold text-gray-900 mb-4 block">Select a label for effective delivery:</label>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setLabel('OFFICE')}
                    className={`px-10 py-3 rounded-xl font-bold text-sm transition-all ${label === 'OFFICE' ? 'bg-[#A684D4] text-white shadow-md' : 'bg-[#E9D7FE] text-[#7F56D9]'}`}
                  >
                    OFFICE
                  </button>
                  <button 
                    onClick={() => setLabel('HOME')}
                    className={`px-10 py-3 rounded-xl font-bold text-sm transition-all ${label === 'HOME' ? 'bg-[#A684D4] text-white shadow-md' : 'bg-[#E9D7FE] text-[#7F56D9]'}`}
                  >
                    HOME
                  </button>
                </div>
              </div>

              <button className="bg-[#530084] text-white font-bold px-12 py-3 rounded-xl hover:bg-[#400066] transition-colors shadow-lg uppercase tracking-wider">
                SAVE
              </button>
            </div>

            {/* Sidebar / Promotion */}
            <div className="w-full lg:w-96 space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Promotion</h3>
                <div className="flex gap-2 mb-8">
                  <input 
                    type="text" 
                    placeholder="Coupon code" 
                    className="flex-1 bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm focus:outline-none" 
                  />
                  <button className="bg-[#530084] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#400066] transition-colors shadow-md">
                    APPLY
                  </button>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-gray-900">Invoice and Contact Info</h4>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-gray-900">Order Detail</span>
                    <button className="text-[#7F56D9] font-bold">Edit</button>
                  </div>
                  <div className="flex items-center justify-between text-sm font-bold text-gray-900">
                    <span>Items Total (1 Items)</span>
                    <span>฿148.00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-bold text-gray-900">
                    <span>Delivery Fee</span>
                    <span>฿ 20</span>
                  </div>
                  <div className="flex items-center justify-between text-xl font-black text-gray-900 pt-4">
                    <span>Total:</span>
                    <span>฿148.20</span>
                  </div>
                </div>

                <button className="w-full mt-8 bg-[#D1C4E9] text-white font-bold py-4 rounded-xl cursor-not-allowed uppercase tracking-wider">
                  APPLY
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Delivery Info */}
          <div className="mt-12 flex flex-col md:flex-row gap-8 items-stretch">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex-1 flex flex-col justify-center">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Delivery or Pickup</h4>
              <p className="text-xl font-black text-gray-900 mb-1">฿ 20</p>
              <p className="text-sm font-bold text-gray-900">Standard delivery</p>
              <p className="text-sm text-gray-400 font-medium">Get by 12-13 jan</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex-[2] flex items-center gap-8">
              <div className="w-24 h-24 bg-[#F9F5FF] rounded-2xl overflow-hidden border border-[#E9D7FE] p-2 flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=200&h=200&fit=crop" 
                  alt="Cool Water" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-gray-900 mb-4 max-w-xs">Cool Water Intense Eau De Parfum 125ml</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-black text-gray-900">฿148.00</p>
                    <p className="text-xs text-gray-400 font-bold line-through">฿ 188.00</p>
                  </div>
                  <div className="text-sm text-gray-400 font-bold">Qty: 1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryInfoPage;
