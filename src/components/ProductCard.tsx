
import React from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import { Product } from '@/types/Product';
import { Backpack, Battery, Coffee } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSwipe: (direction: 'left' | 'right') => void;
  isAnimating: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSwipe, isAnimating }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-20, 0, 20]);
  const opacity = useTransform(x, [-200, -50, 0, 50, 200], [0.5, 1, 1, 1, 0.5]);
  
  // Call all useTransform hooks consistently at the top level
  const neinOpacity = useTransform(x, [-100, -50], [1, 0]);
  const neinScale = useTransform(x, [-100, -50], [1, 0.8]);
  const jaOpacity = useTransform(x, [50, 100], [0, 1]);
  const jaScale = useTransform(x, [50, 100], [0.8, 1]);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 100;
    
    if (Math.abs(info.offset.x) > threshold) {
      const direction = info.offset.x > 0 ? 'right' : 'left';
      onSwipe(direction);
    }
  };

  // Don't render anything if animating, but ensure all hooks are called first
  if (isAnimating) {
    return null;
  }

  const getIcon = () => {
    switch (product.image) {
      case 'backpack':
        return <Backpack size={120} className="text-transa-turquoise" />;
      case 'battery':
        return <Battery size={120} className="text-transa-turquoise" />;
      case 'cup':
        return <Coffee size={120} className="text-transa-turquoise" />;
      default:
        return <Backpack size={120} className="text-transa-turquoise" />;
    }
  };

  return (
    <motion.div
      className="relative w-80 h-96 bg-white rounded-2xl shadow-lg cursor-grab select-none"
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileDrag={{ cursor: 'grabbing', scale: 1.05 }}
      animate={{ x: 0, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Swipe indicators */}
      <motion.div 
        className="absolute top-8 left-8 px-4 py-2 rounded-lg font-bold bg-transa-red text-white z-10"
        style={{ 
          opacity: neinOpacity,
          scale: neinScale
        }}
      >
        NEIN
      </motion.div>
      
      <motion.div 
        className="absolute top-8 right-8 px-4 py-2 rounded-lg font-bold bg-transa-turquoise text-white z-10"
        style={{ 
          opacity: jaOpacity,
          scale: jaScale
        }}
      >
        JA
      </motion.div>
      
      {/* Product Icon */}
      <div className="w-full h-64 rounded-t-2xl overflow-hidden p-4 flex items-center justify-center">
        {getIcon()}
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-transa-text mb-2">{product.name}</h3>
        <p className="text-transa-text/70 text-sm leading-relaxed">{product.description}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
