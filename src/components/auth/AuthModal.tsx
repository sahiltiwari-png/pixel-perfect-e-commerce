import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Eye, EyeOff, Smartphone, Mail, ArrowLeft } from 'lucide-react';
import { InputOTP, InputOTPSlot, InputOTPGroup } from '@/components/ui/input-otp';
import { useLanguage } from '@/contexts/LanguageContext';

type AuthStep = 'initial' | 'login' | 'register' | 'otp';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState<AuthStep>('initial');
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [otpValue, setOtpValue] = useState('');
  const [timer, setTimer] = useState(30);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 'otp' && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleContinue = () => {
    if (inputValue.includes('@') || /^\d+$/.test(inputValue)) {
      setIsPhone(/^\d+$/.test(inputValue));
      if (authType === 'login') {
        setStep('login');
      } else {
        setStep('register');
      }
    }
  };

  const handleGetOTP = () => {
    setStep('otp');
    setTimer(30);
  };

  const resetModal = () => {
    setStep('initial');
    setAuthType('login');
    setInputValue('');
    setOtpValue('');
    setTimer(30);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={resetModal}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-none bg-white rounded-[40px] shadow-2xl">
        {/* Close Button handled by DialogContent usually, but we can customize */}
        
        <div className="relative">
          {/* Top Section - Only for Initial Step */}
          {step === 'initial' && (
            <div className="relative h-[240px] w-full bg-white flex flex-col items-center justify-center p-6 overflow-hidden">
              {/* Decorative Gradient Oval - Matching Image 1 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[180px] bg-gradient-to-r from-orange-400 via-purple-300 to-blue-400 rounded-[100%] rotate-[-5deg] opacity-70 blur-2xl"></div>
              
              {/* Gadget Images Placeholder - Matching Image 1 layout */}
              <div className="relative w-full h-full flex items-center justify-center z-10">
                <div className="relative w-full h-full">
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop" alt="Headphones" className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-20 object-contain drop-shadow-xl z-20" />
                  <img src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=150&h=150&fit=crop" alt="Phone" className="absolute bottom-4 left-1/4 w-20 h-20 object-contain rotate-[-15deg] drop-shadow-xl z-30" />
                  <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=150&h=150&fit=crop" alt="Laptop" className="absolute bottom-8 right-1/4 w-24 h-24 object-contain rotate-[10deg] drop-shadow-xl z-10" />
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="p-8 md:p-10">
            {step === 'initial' && (
              <div className="space-y-6">
                {/* Tabs - Matching Image 1 */}
                <div className="flex bg-[#530084] p-1.5 rounded-full w-full mx-auto">
                  <button 
                    onClick={() => setAuthType('login')}
                    className={`flex-1 py-2.5 rounded-full text-sm font-bold transition-all ${authType === 'login' ? 'bg-white text-[#530084] shadow-sm' : 'text-white'}`}
                  >
                    Log in
                  </button>
                  <button 
                    onClick={() => setAuthType('signup')}
                    className={`flex-1 py-2.5 rounded-full text-sm font-bold transition-all ${authType === 'signup' ? 'bg-white text-[#530084] shadow-sm' : 'text-white'}`}
                  >
                    Sign up
                  </button>
                </div>

                {/* Input - Matching Image 1 */}
                <div className="space-y-4">
                  <div className="relative">
                    <input 
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Please enter your mobile number or email"
                      className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-full px-6 py-4 text-sm font-medium text-gray-700 placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                  
                  <button 
                    onClick={handleContinue}
                    disabled={!inputValue}
                    className="w-full bg-[#FDF4FF] text-[#530084] font-black py-4 rounded-full hover:bg-[#F5D0FE] transition-all uppercase tracking-widest text-base disabled:opacity-50"
                  >
                    CONTINUE
                  </button>
                </div>

                <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                  By continuing, I confirm that I have read the <span className="text-[#530084] font-bold cursor-pointer underline">Privacy Policy</span>
                </p>
              </div>
            )}

            {step === 'login' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black text-gray-900">Welcome to Nepoora</h2>
                  <button onClick={() => setStep('initial')} className="p-1.5 hover:bg-gray-100 rounded-full">
                    <ArrowLeft className="w-4 h-4 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="text-xs font-bold text-gray-900 mb-2 block">Phone Number or Email</label>
                    <input 
                      type="text"
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        setIsPhone(/^\d+$/.test(e.target.value));
                      }}
                      placeholder="Please enter your phone number or email"
                      className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/10"
                    />
                  </div>

                  {!isPhone ? (
                    <div>
                      <label className="text-xs font-bold text-gray-900 mb-2 block">Password</label>
                      <div className="relative">
                        <input 
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Please enter your Password"
                          className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/10"
                        />
                        <button 
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-gray-900 block">Verification Code</label>
                        <button 
                          onClick={handleGetOTP}
                          className="text-xs font-bold text-[#530084] hover:underline"
                        >
                          Get OTP
                        </button>
                      </div>
                    </div>
                  )}

                  <button className="w-full bg-[#530084] text-white font-bold py-3.5 rounded-2xl hover:bg-[#400066] transition-colors shadow-md">
                    {isPhone ? 'Login with OTP' : 'Login'}
                  </button>

                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-100"></div>
                    </div>
                    <div className="relative flex justify-center text-[10px]">
                      <span className="bg-white px-3 text-gray-400 font-medium uppercase tracking-wider">Or, login with</span>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3">
                    <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                      <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                      <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {step === 'register' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black text-gray-900">Create Account</h2>
                  <button onClick={() => setStep('initial')} className="p-1.5 hover:bg-gray-100 rounded-full">
                    <ArrowLeft className="w-4 h-4 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-900 mb-2 block">Full Name</label>
                    <input 
                      type="text"
                      placeholder="Please enter your full name"
                      className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/10"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-900 mb-2 block">Email Address</label>
                    <input 
                      type="email"
                      placeholder="Please enter your email address"
                      className="w-full bg-[#F9F5FF] border border-[#E9D7FE] rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/10"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-900 mb-2 block">Phone Number</label>
                    <div className="flex gap-2">
                      <input 
                        type="tel"
                        value={isPhone ? inputValue : ''}
                        placeholder="Please enter your phone number"
                        className="flex-1 bg-[#F9F5FF] border border-[#E9D7FE] rounded-2xl px-5 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#7F56D9]/10"
                      />
                      <button 
                        onClick={handleGetOTP}
                        className="bg-[#530084] text-white px-4 py-3.5 rounded-2xl text-xs font-bold hover:bg-[#400066] transition-colors"
                      >
                        Get OTP
                      </button>
                    </div>
                  </div>

                  <button className="w-full bg-[#530084] text-white font-bold py-3.5 rounded-2xl hover:bg-[#400066] transition-colors shadow-md mt-2">
                    Create Account
                  </button>
                </div>
              </div>
            )}

            {step === 'otp' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black text-gray-900">Verification</h2>
                  <button onClick={() => setStep(authType === 'login' ? 'login' : 'register')} className="p-1.5 hover:bg-gray-100 rounded-full">
                    <ArrowLeft className="w-4 h-4 text-gray-500" />
                  </button>
                </div>

                <div className="space-y-6 text-center">
                  <p className="text-sm text-gray-500">
                    We've sent a 4-digit code to <br />
                    <span className="font-bold text-gray-900">{inputValue}</span>
                  </p>

                  <div className="flex justify-center">
                    <InputOTP
                      maxLength={4}
                      value={otpValue}
                      onChange={(value) => setOtpValue(value)}
                    >
                      <InputOTPGroup className="gap-2">
                        <InputOTPSlot index={0} className="w-12 h-12 text-lg font-bold border-[#E9D7FE] bg-[#F9F5FF] rounded-xl" />
                        <InputOTPSlot index={1} className="w-12 h-12 text-lg font-bold border-[#E9D7FE] bg-[#F9F5FF] rounded-xl" />
                        <InputOTPSlot index={2} className="w-12 h-12 text-lg font-bold border-[#E9D7FE] bg-[#F9F5FF] rounded-xl" />
                        <InputOTPSlot index={3} className="w-12 h-12 text-lg font-bold border-[#E9D7FE] bg-[#F9F5FF] rounded-xl" />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>

                  <div className="space-y-4">
                    <button 
                      disabled={otpValue.length < 4}
                      className="w-full bg-[#530084] text-white font-bold py-3.5 rounded-2xl hover:bg-[#400066] transition-colors shadow-md disabled:opacity-50"
                    >
                      Verify & Proceed
                    </button>

                    <div className="text-sm">
                      {timer > 0 ? (
                        <p className="text-gray-400 font-medium">Resend code in <span className="text-[#530084] font-bold">{timer}s</span></p>
                      ) : (
                        <button 
                          onClick={handleGetOTP}
                          className="text-[#530084] font-bold hover:underline"
                        >
                          Resend Code
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
