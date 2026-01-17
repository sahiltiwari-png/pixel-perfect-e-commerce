import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showEmpty?: boolean;
}

const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  size = 'md',
  showEmpty = true,
}) => {
  const sizeClass = {
    xs: 'w-2.5 h-2.5',
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }[size];

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= rating;
        const partial = star - rating > 0 && star - rating < 1;

        return (
          <Star
            key={star}
            className={`${sizeClass} ${
              filled || partial ? 'text-yellow fill-yellow' : 'text-muted-foreground'
            }`}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
