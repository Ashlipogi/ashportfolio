import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const experiences = [
    {
      title: 'Photocopy Shop Assistant',
      company: 'Local Business',
      period: '2022 - Present',
      description: 'Assisted customers with photocopy, printing, and scanning needs. Ensured high-quality service and customer satisfaction.',
      achievements: [
        'Maintained excellent customer service standards',
        'Managed equipment maintenance and troubleshooting',
        'Processed high-volume orders efficiently'
      ]
    },
    {
      title: 'Web Developer',
      company: 'AIA Philippines',
      period: 'August 2024 - November 2024',
      description: 'Assisted in developing and maintaining the company website, improving user experience and functionality.',
      achievements: [
        'Worked with HTML, CSS, JavaScript, and PHP to build dynamic web pages',
        'Contributed to backend development using Laravel and managed databases',
        'Tested and debugged applications to ensure optimal performance'
      ]
    },
    {
      title: 'System Developer',
      company: 'T-Mobelli Kitchens & Closets Inc.',
      period: 'August 2024 - November 2024',
      description: 'Developed an automated system to streamline product management, including inventory, costing, and purchase order systems.',
      achievements: [
        'Utilized the Laravel framework to build and deploy the system locally for internal use',
        'Created user-friendly interfaces to simplify data entry and improve efficiency for employees',
        'Collaborated with the team to ensure smooth implementation and functionality'
      ],
      hasProject: true
    }
  ];

  const projectImages = [
    {
      category: 'Dashboard & Overview',
      images: [
        { src: '/imgs/pos/Screenshot 2025-06-24 111103.png', title: 'Main Dashboard', description: 'Overview of total vendors, items, and purchase orders with statistics' }
      ]
    },
    {
      category: 'Vendor Management',
      images: [
        { src: '/imgs/pos/Screenshot 2025-06-24 111121.png', title: 'Vendors List', description: 'Complete vendor management with contact information and actions' },
        { src: '/imgs/pos/Screenshot 2025-06-24 111245.png', title: 'Register New Vendor', description: 'Form to add new vendors with contact details' },
        { src: '/imgs/pos/Screenshot 2025-06-24 111143.png', title: 'Vendor Actions', description: 'Edit, view, and delete vendor options' }
      ]
    },
    {
      category: 'Item Management', 
      images: [
        { src: '/imgs/pos/Screenshot 2025-06-24 111133.png', title: 'Items List', description: 'Product catalog with descriptions and pagination' },
        { src: '/imgs/pos/Screenshot 2025-06-24 111229.png', title: 'Create New Item', description: 'Form to add new items to the inventory' }
      ]
    },
    {
      category: 'Purchase Orders',
      images: [
        { src: '/imgs/pos/Screenshot 2025-06-24 111152.png', title: 'Purchase Orders List', description: 'Track all purchase orders with vendor details and amounts' },
        { src: '/imgs/pos/Screenshot 2025-06-24 111219.png', title: 'New Purchase Order', description: 'Create new purchase orders with item selection' }
      ]
    },
    {
      category: 'System Settings',
      images: [
        { src: '/imgs/pos/Screenshot 2025-06-24 111205.png', title: 'System Configuration', description: 'System information and logo management settings' }
      ]
    }
  ];

  const getAllImages = () => {
    return projectImages.flatMap(category => 
      category.images.map(img => ({ ...img, category: category.category }))
    );
  };

  const nextImage = () => {
    const allImages = getAllImages();
    setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    const allImages = getAllImages();
    setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const openProjectModal = () => {
    setShowProjectModal(true);
    setSelectedImageIndex(0);
  };

  const closeProjectModal = () => {
    setShowProjectModal(false);
    setSelectedImageIndex(0);
  };

   return (
    <>
      <section 
        id="experience" 
        ref={ref}
        className={`py-20 px-4 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-white rounded-full mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey and the impact I've made in various roles
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-gray-300 font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-white">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.hasProject && (
                    <button
                      onClick={openProjectModal}
                      className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                    >
                      View Project Screenshots
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {showProjectModal && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-2"
          style={{ height: '100dvh', width: '100vw' }}
          tabIndex={-1}
          onKeyDown={e => {
            if (e.key === 'Escape') closeProjectModal();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
          }}
        >
          <div
            className="relative w-full h-full max-w-[1200px] max-h-[95dvh] bg-black/90 border border-white/20 rounded-2xl overflow-hidden flex flex-col"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 border-b border-white/20 bg-black/90 sticky top-0 z-20">
              <div>
                <h3 className="text-2xl font-bold text-white">T-Mobelli Kitchens & Closets Inc.</h3>
                <p className="text-gray-300">Purchase Order Management System (POMS)</p>
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row overflow-auto">
              {/* Image Viewer */}
              <div className="flex-1 relative bg-black flex items-center justify-center min-h-[300px]">
                <div className="relative w-full h-[40vh] lg:h-[70vh] flex items-center justify-center p-2 lg:p-4">
                  {(() => {
                    const allImages = getAllImages();
                    const currentImage = allImages[selectedImageIndex];
                    return (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src={currentImage.src}
                          alt={currentImage.title}
                          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl mx-auto my-auto"
                        />
                        {/* Image Navigation */}
                        {allImages.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
                              aria-label="Previous image"
                            >
                              <ArrowLeft className="w-6 h-6" />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
                              aria-label="Next image"
                            >
                              <ArrowRight className="w-6 h-6" />
                            </button>
                          </>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Sidebar with categories and thumbnails */}
              <div className="w-full lg:w-80 bg-white/10 p-4 lg:p-6 overflow-y-auto max-h-[40vh] lg:max-h-[70vh]">
                <div className="space-y-6">
                  {projectImages.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h4 className="text-white font-semibold mb-3">{category.category}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {category.images.map((image, imageIndex) => {
                          const globalIndex = getAllImages().findIndex(
                            img => img.src === image.src && img.title === image.title
                          );
                          return (
                            <button
                              key={imageIndex}
                              onClick={() => setSelectedImageIndex(globalIndex)}
                              className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                                selectedImageIndex === globalIndex
                                  ? 'border-white'
                                  : 'border-white/30 hover:border-white/50'
                              }`}
                              aria-label={`View ${image.title}`}
                            >
                              <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-16 object-cover"
                              />
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                <span className="text-xs text-white text-center px-1">{image.title}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Current Image Info */}
                {(() => {
                  const allImages = getAllImages();
                  const currentImage = allImages[selectedImageIndex];
                  return (
                    <div className="mt-6 p-4 bg-white/10 rounded-lg">
                      <h5 className="text-white font-semibold mb-2">{currentImage.title}</h5>
                      <p className="text-gray-300 text-sm mb-2">{currentImage.description}</p>
                      <p className="text-gray-400 text-xs">Category: {currentImage.category}</p>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
