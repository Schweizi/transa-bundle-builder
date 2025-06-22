
import React, { useState, useEffect } from 'react';
import { Product } from '@/types/Product';

interface ProductCardProps {
  product: Product;
  onSwipe: (direction: 'left' | 'right') => void;
  isAnimating: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSwipe, isAnimating }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    const touch = e.touches[0];
    setStartPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isAnimating) return;
    
    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || isAnimating) return;
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - startPos.x;
    const deltaY = touch.clientY - startPos.y;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleEnd = () => {
    if (!isDragging || isAnimating) return;
    
    setIsDragging(false);
    
    const threshold = 100;
    if (Math.abs(position.x) > threshold) {
      onSwipe(position.x > 0 ? 'right' : 'left');
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    if (!isAnimating) {
      setPosition({ x: 0, y: 0 });
    }
  }, [isAnimating]);

  const rotation = position.x * 0.1;
  const opacity = 1 - Math.abs(position.x) / 300;

  return (
    <div
      className={`relative w-80 h-96 bg-white rounded-2xl shadow-lg cursor-grab select-none transition-transform duration-300 ${
        isAnimating ? '' : 'animate-card-enter'
      } ${isDragging ? 'cursor-grabbing' : ''}`}
      style={{
        transform: `translateX(${position.x}px) translateY(${position.y * 0.1}px) rotate(${rotation}deg)`,
        opacity: isDragging ? opacity : 1,
        zIndex: isDragging ? 50 : 'auto'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      {/* Swipe indicators */}
      {isDragging && (
        <>
          <div 
            className={`absolute top-8 left-8 px-4 py-2 rounded-lg font-bold transition-opacity duration-200 ${
              position.x < -50 ? 'opacity-100 bg-transa-red text-white' : 'opacity-0'
            }`}
          >
            NEIN
          </div>
          <div 
            className={`absolute top-8 right-8 px-4 py-2 rounded-lg font-bold transition-opacity duration-200 ${
              position.x > 50 ? 'opacity-100 bg-transa-turquoise text-white' : 'opacity-0'
            }`}
          >
            JA
          </div>
        </>
      )}
      
      {/* Product Image */}
      <div className="w-full h-64 rounded-t-2xl overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover drag-none"
          draggable={false}
        />
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-transa-text mb-2">{product.name}</h3>
        <p className="text-transa-text/70 text-sm leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
