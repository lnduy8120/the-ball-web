import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  variant = 'rectangular', 
  width, 
  height,
  style
}) => {
  const baseStyles = "animate-pulse bg-slate-200 dark:bg-slate-700/50";
  const variants = {
    rectangular: "rounded-xl",
    circular: "rounded-full",
    text: "rounded-md"
  };

  const combinedStyle = {
    width: width,
    height: height,
    ...style
  };

  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      style={combinedStyle}
    />
  );
};

export default Skeleton;