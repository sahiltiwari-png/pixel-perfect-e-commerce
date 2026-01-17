import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
}) => {
  return (
    <div className="flex items-center bg-[#F4EBFF] rounded-lg p-1">
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className="w-8 h-8 flex items-center justify-center text-[#7F56D9] font-bold hover:bg-white rounded-md transition-colors disabled:opacity-30"
      >
        −
      </button>
      <span className="w-10 text-center text-sm font-bold text-gray-900">{quantity}</span>
      <button
        onClick={onIncrease}
        disabled={quantity >= max}
        className="w-8 h-8 flex items-center justify-center text-[#7F56D9] font-bold hover:bg-white rounded-md transition-colors disabled:opacity-30"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
