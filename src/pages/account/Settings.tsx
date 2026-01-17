import React from 'react';
import Layout from '@/components/layout/Layout';
import AccountSidebar from '@/components/AccountSidebar';
import { useLanguage } from '@/contexts/LanguageContext';
import { Switch } from '@/components/ui/switch';

const AccountSettingsPage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      <div className="bg-[#FBFAFF] min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 ml-4 md:ml-0">Account</h1>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <AccountSidebar />
            
            <div className="flex-1 space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Account Settings</h2>
              
              {/* Personal Information */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#530084] mb-6">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-bold text-gray-900 mb-2 block">First Name</label>
                    <input 
                      type="text" 
                      defaultValue="Alex" 
                      className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-900 mb-2 block">Last Name</label>
                    <input 
                      type="text" 
                      defaultValue="Suprun" 
                      className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-900 mb-2 block">Email</label>
                    <input 
                      type="email" 
                      defaultValue="Alex Suprun@2415.gmail.com" 
                      className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-900 mb-2 block">Phone</label>
                    <input 
                      type="text" 
                      defaultValue="+971 50 XXX 4567" 
                      className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20" 
                    />
                  </div>
                </div>
                <button className="mt-8 bg-[#530084] text-white font-bold px-10 py-3 rounded-xl hover:bg-[#400066] transition-colors shadow-lg">
                  Save Changes
                </button>
              </div>

              {/* Email Preferences */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#530084] mb-6">Email Preferences</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-900">Order Updates</p>
                      <p className="text-xs text-gray-400 font-medium">Receive notifications about your order status</p>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#530084]">
                      <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-900">Promotions</p>
                      <p className="text-xs text-gray-400 font-medium">Receive emails about new promotions and deals</p>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#E9D7FE]">
                      <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-gray-900">Newsletter</p>
                      <p className="text-xs text-gray-400 font-medium">Subscribe to our weekly newsletter</p>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#530084]">
                      <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Security */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#530084] mb-6">Security</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-bold text-gray-900 mb-2 block">Current Password</label>
                    <input 
                      type="password" 
                      className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20" 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-bold text-gray-900 mb-2 block">New Password</label>
                      <input 
                        type="password" 
                        className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20" 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-gray-900 mb-2 block">Confirm Password</label>
                      <input 
                        type="password" 
                        className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-xl px-4 py-3 text-sm text-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/20" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Delete Account */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-red-500 mb-2 uppercase tracking-wider">Delete Account</h3>
                <p className="text-sm text-gray-400 font-medium mb-8">Once you delete your account, there is no going back. Please be certain</p>
                <button className="bg-[#530084] text-white font-bold px-10 py-3 rounded-xl hover:bg-red-700 transition-colors shadow-lg uppercase tracking-wider">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountSettingsPage;
