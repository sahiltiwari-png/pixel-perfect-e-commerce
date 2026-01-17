import React from 'react';
import { Plus, MapPin, Phone, Pencil, Trash2, User } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AccountSidebar from '@/components/AccountSidebar';
import { useLanguage } from '@/contexts/LanguageContext';

const addresses = [
  { id: '1', label: 'Home', address: 'Apartment 803,\nPalm View Residences,\nAl Khail Road, Jumeirah Village Circle (JVC)\nDubai, United Arab Emirates', name: 'Alex Suprun', phone: '+971 50 123 4567', isDefault: true },
  { id: '2', label: 'Office', address: 'Office 1204,\nSilver Bay Tower Al Marasi Drive,\nBusiness Bay Dubai,\nUnited Arab Emirates', name: 'Alex Suprun', phone: '+971 50 125 4889', isDefault: false },
];

const AddressPage: React.FC = () => {
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
                <h2 className="text-2xl font-bold text-gray-900">Address</h2>
                <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold text-[#7F56D9] hover:bg-[#F9F5FF] transition-colors shadow-sm">
                  <Plus className="w-4 h-4" />
                  Add New Address
                </button>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {addresses.map((addr) => (
                  <div key={addr.id} className="bg-[#F9F5FF] border border-[#E9D7FE] rounded-2xl p-6 relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="px-4 py-1.5 bg-white border border-[#E9D7FE] rounded-lg text-sm font-bold text-gray-900">
                        {addr.label}
                      </div>
                      {addr.isDefault && (
                        <span className="text-xs bg-[#E9D7FE] text-[#7F56D9] px-3 py-1 rounded-full font-bold uppercase tracking-wider">Default</span>
                      )}
                    </div>

                    <div className="space-y-4 mb-6">
                      <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        {addr.address}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                          <User className="w-4 h-4 text-gray-400" />
                          {addr.name}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                          <Phone className="w-4 h-4 text-gray-400" />
                          {addr.phone}
                        </div>
                      </div>
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
                      {!addr.isDefault && (
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

export default AddressPage;
