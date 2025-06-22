
import React from 'react';
import { Product } from '@/types/Product';
import { motion, PanInfo } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onSwipe: (direction: 'left' | 'right') => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSwipe }) => {
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 100;
    if (info.offset.x > swipeThreshold) {
      onSwipe('right');
    } else if (info.offset.x < -swipeThreshold) {
      onSwipe('left');
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      className="relative w-80 h-96 bg-white rounded-2xl shadow-lg cursor-grab select-none"
      whileTap={{ cursor: 'grabbing' }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      exit={{ x: 300, opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="w-full h-64 rounded-t-2xl overflow-hidden p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain drag-none"
          draggable={false}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-transa-text mb-2">{product.name}</h3>
        <p className="text-transa-text/70 text-sm leading-relaxed">{product.description}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
