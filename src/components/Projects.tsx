
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
const projects = [
    {
        title: 'Capstone Project - Integrated Management System',
        subtitle: 'Item Inventory, Transfer & Returns Management',
        period: '2024 - 2025',
        description:
            'A comprehensive management system that integrates three core modules: Item Inventory Management, Item Transfer System, and Returned Items Management. This project demonstrates full-stack development capabilities using React, Inertia.js, and modern web technologies.',
        achievements: [
            'Developed integrated dashboard with real-time statistics and analytics',
            'Implemented comprehensive user authentication and role-based access control',
            'Created robust inventory tracking with category management and supplier integration',
            'Built item transfer system with approval workflows and tracking',
            'Designed returned items management with condition tracking and reporting',
            'Integrated print functionality for reports and transfer documents',
            'Implemented advanced search, filtering, and pagination features'
        ],
        technologies: [
            'React.js',
            'Inertia.js',
            'Laravel Framework',
            'MySQL Database',
            'Tailwind CSS',
            'PHP',
        ],
        hasProject: true
    },
    // {
    //     title: 'Capstone Project - Integrated Management System',
    //     subtitle: 'Item Inventory, Transfer & Returns Management',
    //     period: '2024 - 2025',
    //     description:
    //         'A comprehensive management system that integrates three core modules: Item Inventory Management, Item Transfer System, and Returned Items Management. This project demonstrates full-stack development capabilities using React, Inertia.js, and modern web technologies.',
    //     achievements: [
    //         'Developed integrated dashboard with real-time statistics and analytics',
    //         'Implemented comprehensive user authentication and role-based access control',
    //         'Created robust inventory tracking with category management and supplier integration',
    //         'Built item transfer system with approval workflows and tracking',
    //         'Designed returned items management with condition tracking and reporting',
    //         'Integrated print functionality for reports and transfer documents',
    //         'Implemented advanced search, filtering, and pagination features'
    //     ],
    //     technologies: [
    //         'React.js',
    //         'Inertia.js',
    //         'Laravel Framework',
    //         'MySQL Database',
    //         'Tailwind CSS',
    //         'PHP',
    //     ],
    //     hasProject: true
    // }
    
];

  const projectImages = [
    {
      category: 'Authentication & Login',
      images: [
        { src: '/imgs/inv/Screenshot 2025-06-24 211513.png', title: 'Login Page', description: 'Secure login interface with remember me functionality and password recovery' }
      ]
    },
    {
      category: 'Dashboard & Analytics',
      images: [
        { src: '/imgs/inv/Screenshot 2025-06-24 211652.png', title: 'Main Dashboard', description: 'Comprehensive overview with statistics for categories, suppliers, items, borrowed items, overdue items, and transferred items' }
      ]
    },
    {
      category: 'Category Management',
      images: [
        { src: '/imgs/inv/Screenshot 2025-06-24 211711.png', title: 'Categories Management', description: 'Add new categories and view all existing categories with management options' }
      ]
    },
    {
      category: 'Supplier Management',
      images: [
        { src: '/imgs/inv/Screenshot 2025-06-24 211719.png', title: 'Suppliers List', description: 'Complete supplier database with contact information, address, and action buttons' }
      ]
    },
    {
      category: 'Item Inventory',
      images: [
        { src: '/imgs/inv/Screenshot 2025-06-24 211732.png', title: 'Items Management', description: 'Comprehensive item listing with advanced filtering, search, and pagination features' }
      ]
    },
    {
      category: 'Item Transfer System',
      images: [
        { src: '/imgs/inv/Screenshot 2025-06-24 212059.png', title: 'Item Borrow Form', description: 'Add new item borrow requests with date selection and item search functionality' },
        { src: '/imgs/inv/Screenshot 2025-06-24 212121.png', title: 'Signatory Management', description: 'Manage authorized signatories for transfer approvals and documentation' }
      ]
    },
    {
      category: 'Reports & Documentation',
      images: [
        { src: '/imgs/inv/Screenshot 2025-06-24 212108.png', title: 'Item Reports', description: 'Generate detailed reports with filtering options and total amount calculations' },
        { src: '/imgs/inv/Screenshot 2025-06-24 212149.png', title: 'Print Document', description: 'Printable transfer documents with official formatting and signatory sections' }
      ]
    },
    {
      category: 'Profile Management',
      images: [
        { src: '/imgs/inv/Screenshot 2025-06-24 212159.png', title: 'Profile Settings', description: 'User profile management with personal information updates and password change functionality' }
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
        id="projects" 
        ref={ref}
        className={`py-20 px-4 bg-gradient-to-b from-gray-900/50 to-transparent transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Major Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-6" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive projects showcasing full-stack development capabilities and system integration
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-purple-400 font-medium text-lg">{project.subtitle}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
                        {project.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-medium mb-3">Key Features & Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3 text-gray-400">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-cyan-400 font-medium mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.hasProject && (
                    <button
                      onClick={openProjectModal}
                      className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
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
            className="relative w-full h-full max-w-[1200px] max-h-[95dvh] bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden flex flex-col"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 border-b border-gray-700 bg-gray-900 sticky top-0 z-20">
              <div>
                <h3 className="text-2xl font-bold text-white">Capstone Project</h3>
                <p className="text-cyan-400">Integrated Management System - Inventory, Transfer & Returns</p>
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
                              className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                              aria-label="Previous image"
                            >
                              <ArrowLeft className="w-6 h-6" />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
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
              <div className="w-full lg:w-80 bg-gray-800 p-4 lg:p-6 overflow-y-auto max-h-[40vh] lg:max-h-[70vh]">
                <div className="space-y-6">
                  {projectImages.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h4 className="text-cyan-400 font-semibold mb-3">{category.category}</h4>
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
                                  ? 'border-cyan-500'
                                  : 'border-gray-600 hover:border-gray-500'
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
                    <div className="mt-6 p-4 bg-gray-700 rounded-lg">
                      <h5 className="text-white font-semibold mb-2">{currentImage.title}</h5>
                      <p className="text-gray-300 text-sm mb-2">{currentImage.description}</p>
                      <p className="text-cyan-400 text-xs">Category: {currentImage.category}</p>
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

export default Projects;
