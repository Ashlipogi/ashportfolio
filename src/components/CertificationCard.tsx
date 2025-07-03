
import { LucideIcon } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  organization: string;
  period: string;
  type: string;
  duration?: string;
  icon: LucideIcon;
  image: string;
  link?: string;
  index: number;
}

const CertificationCard = ({ 
  title, 
  organization, 
  period, 
  type, 
  duration, 
  icon: IconComponent, 
  image, 
  link,
  index 
}: CertificationCardProps) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={`group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10 cursor-pointer animate-fade-in`}
      style={{ animationDelay: `${index * 0.2}s` }}
      onClick={handleClick}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Certificate Image */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={`${title} Certificate`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* External link icon */}
        {link && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
          </div>
        )}
      </div>
      
      {/* Certificate Details */}
      <div className="relative p-6 z-10">
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className="p-3 bg-gradient-to-br from-white/20 to-white/10 rounded-xl group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            {/* Icon glow effect */}
            <div className="absolute inset-0 bg-white/20 rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          </div>
          
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300 leading-tight">
              {title}
            </h4>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              {organization}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 bg-white/10 text-gray-300 rounded-full border border-white/20 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                {type}
              </span>
              <span className="px-3 py-1.5 bg-white/10 text-gray-300 rounded-full border border-white/20 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                {period}
              </span>
              {duration && (
                <span className="px-3 py-1.5 bg-white/10 text-gray-300 rounded-full border border-white/20 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                  {duration}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Click indicator */}
        {link && (
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="text-xs text-gray-400 flex items-center gap-1">
              <span>View Certificate</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        )}
      </div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      </div>
    </div>
  );
};

export default CertificationCard;
