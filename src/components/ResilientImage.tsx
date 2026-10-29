import React, { useState } from 'react';
import { Layers } from 'lucide-react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
  style,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0E1729] to-[#060911] text-slate-400 p-6 text-center ${className}`}
        style={style}
        role="img"
        aria-label={alt || fallbackTitle || 'Portfolio media'}
      >
        <Layers className="w-7 h-7 text-[#F5A623]/70 mb-2.5 stroke-[1.5]" />
        <span className="font-display text-sm font-medium text-slate-300 line-clamp-2">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || fallbackTitle || 'Portfolio asset'}
      referrerPolicy="no-referrer"
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={style}
      {...rest}
    />
  );
};
