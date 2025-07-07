
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  organization: string;
  period: string;
  type: string;
  icon: React.ComponentType<{ className?: string }>;
  image?: string;
  link?: string;
  duration?: string;
  index: number;
}

const CertificationCard = ({
  title,
  organization,
  period,
  type,
  icon: Icon,
  image,
  link,
  duration,
  index,
}: CertificationCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div
      className={`group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-xl p-4 md:p-6 hover:border-white/30 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/5 ${
        link ? 'cursor-pointer' : ''
      } opacity-0 animate-fade-in`}
      style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
      onClick={handleClick}
    >
      {/* Responsive layout */}
      <div className="flex flex-col gap-4">
        {image && (
          <div className="w-full h-50 sm:h-90 md:h-50 lg:h-90 rounded-lg overflow-hidden bg-white/5 flex-shrink-0 relative">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
              </div>
            )}
            {!imageError ? (
              <img
                src={image}
                alt={title}
                className={`w-full h-full object-contain object-center transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-white/5">
                <Icon className="w-8 h-8 text-white/40" />
              </div>
            )}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-white font-semibold text-base md:text-lg leading-tight pr-2">
              {title}
            </h4>
            {link && (
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors flex-shrink-0 mt-0.5" />
            )}
          </div>
          
          <div className="space-y-1 mb-3">
            <p className="text-gray-300 text-sm font-medium">{organization}</p>
            <p className="text-gray-400 text-sm">{period}</p>
            {duration && (
              <p className="text-gray-400 text-sm">{duration}</p>
            )}
          </div>

          <div className="inline-block px-3 py-1 bg-white/10 rounded-full">
            <span className="text-xs text-gray-300 font-medium">{type}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
