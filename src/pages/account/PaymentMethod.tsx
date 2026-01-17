import React from 'react';
import { CreditCard, Plus, Pencil, Trash2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AccountSidebar from '@/components/AccountSidebar';
import { useLanguage } from '@/contexts/LanguageContext';

const paymentMethods = [
  { id: '1', type: 'Visa', last4: '4385', expires: '08/2028', isDefault: true },
  { id: '2', type: 'Mastercard', last4: '7485', expires: '09/2027', isDefault: false },
];

const PaymentMethodPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="bg-[#FBFAFF] min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 ml-4 md:ml-0">Account</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <AccountSidebar />
            
            <div className="flex-1 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <h2 className="text-2xl font-bold text-gray-900">Payment Methods</h2>
                <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                  <Plus className="w-4 h-4" />
                  Add New Card
                </button>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {paymentMethods.map((card) => (
                  <div key={card.id} className="bg-[#F9F5FF] border border-[#E9D7FE] rounded-2xl p-6 relative">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-[#530084]" />
                      </div>
                      <div className="flex gap-2">
                        {card.isDefault && (
                          <span className="text-[10px] bg-[#E9D7FE] text-[#7F56D9] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Default</span>
                        )}
                        <span className="text-[10px] bg-white border border-gray-200 text-gray-500 px-2 py-0.5 rounded font-bold uppercase tracking-wider">{card.type}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-1.5 mb-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="flex gap-1">
                            {[1, 2, 3, 4].map((j) => (
                              <div key={j} className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                            ))}
                          </div>
                        ))}
                        <span className="text-lg font-bold text-gray-900 ml-2">{card.last4}</span>
                      </div>
                      <p className="text-sm text-gray-400 font-medium">Expires {card.expires}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#E9D7FE]">
                      <button className="flex items-center gap-2 text-xs font-bold text-gray-500 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <Pencil className="w-3.5 h-3.5" />
                        Edit
                      </button>
                      <button className="flex items-center gap-2 text-xs font-bold text-red-500 bg-white border border-red-100 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                        Remove
                      </button>
                      {!card.isDefault && (
                        <button className="text-xs font-bold text-[#7F56D9] bg-[#E9D7FE] px-4 py-2 rounded-lg hover:bg-[#D6BBFB] transition-colors ml-auto">
                          Make Default
                        </button>
                      )}
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

export default PaymentMethodPage;
