
// import { useState,useEffect,useRef } from 'react';
// import { X, ArrowLeft, ArrowRight } from 'lucide-react';

// const Projects = () => {
//   const [showProjectModal, setShowProjectModal] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [selectedProject, setSelectedProject] = useState<number>(0);
  

//     const projectsRef = useRef(null);
//     const [visible, setVisible] = useState(false);
    
  
//     useEffect(() => {
//       const observer = new IntersectionObserver(
//         ([entry]) => setVisible(entry.isIntersecting),
//         { threshold: 0.3 }
//       );
  
//       if (projectsRef.current) {
//         observer.observe(projectsRef.current);
//       }
  
//       return () => {
//         if (projectsRef.current) observer.unobserve(projectsRef.current);
//       };
//     }, []);
//   const projects = [
//     {
//         title: 'Capstone Project - Integrated Management System',
//         subtitle: 'Item Inventory, Transfer & Returns Management',
//         period: '2024 - 2025',
//         description:
//             'A comprehensive management system that integrates three core modules: Item Inventory Management, Item Transfer System, and Returned Items Management. This project demonstrates full-stack development capabilities using React, Inertia.js, and modern web technologies.',
//         achievements: [
//             'Developed integrated dashboard with real-time statistics and analytics',
//             'Implemented comprehensive user authentication and role-based access control',
//             'Created robust inventory tracking with category management and supplier integration',
//             'Built item transfer system with approval workflows and tracking',
//             'Designed returned items management with condition tracking and reporting',
//             'Integrated print functionality for reports and transfer documents',
//             'Implemented advanced search, filtering, and pagination features'
//         ],
//         technologies: [
//             'React.js',
//             'Inertia.js',
//             'Laravel Framework',
//             'MySQL Database',
//             'Tailwind CSS',
//             'PHP',
//         ],
//         hasProject: true,
//         projectId: 0
//     },
//     {
//         title: 'RedShop - Affiliate Business Automation System',
//         subtitle: 'E-commerce Affiliate Product Management & Platform Integration',
//         period: '2024 - 2025',
//         description:
//             'A comprehensive affiliate business automation system designed to streamline the management and display of affiliate products. The system allows administrators to create, manage, and showcase affiliate products with integrated platform selection (TikTok & Shopee) for seamless e-commerce transitions.',
//         achievements: [
//             'Built secure admin authentication system with role-based access',
//             'Developed comprehensive product management dashboard with real-time statistics',
//             'Created dynamic product catalog with category filtering and search functionality',
//             'Implemented platform selection modal for TikTok and Shopee integration',
//             'Designed responsive frontend with gradient backgrounds and modern UI',
//             'Built product carousel with navigation controls and category organization',
//             'Integrated TikTok embed functionality for product demonstrations',
//             'Developed admin panel for adding, editing, and managing affiliate products'
//         ],
//         technologies: [
//             'PHP Native',
//             'HTML5',
//             'CSS3',
//             'MySQL Database',
//             'JavaScript',
//             'Responsive Design',
//         ],
//         hasProject: true,
//         projectId: 1
//     }
//   ];

//   const allProjectImages = [
//     // Capstone Project Images
//     {
//       projectId: 0,
//       categories: [
//         {
//           category: 'Authentication & Login',
//           images: [
//             { src: '/imgs/inv/Screenshot 2025-06-24 211513.png', title: 'Login Page', description: 'Secure login interface with remember me functionality and password recovery' }
//           ]
//         },
//         {
//           category: 'Dashboard & Analytics',
//           images: [
//             { src: '/imgs/inv/Screenshot 2025-06-24 211652.png', title: 'Main Dashboard', description: 'Comprehensive overview with statistics for categories, suppliers, items, borrowed items, overdue items, and transferred items' }
//           ]
//         },
//         {
//           category: 'Category Management',
//           images: [
//             { src: '/imgs/inv/Screenshot 2025-06-24 211711.png', title: 'Categories Management', description: 'Add new categories and view all existing categories with management options' }
//           ]
//         },
//         {
//           category: 'Supplier Management',
//           images: [
//             { src: '/imgs/inv/Screenshot 2025-06-24 211719.png', title: 'Suppliers List', description: 'Complete supplier database with contact information, address, and action buttons' }
//           ]
//         },
//         {
//           category: 'Item Inventory',
//           images: [
//             { src: '/imgs/inv/Screenshot 2025-06-24 211732.png', title: 'Items Management', description: 'Comprehensive item listing with advanced filtering, search, and pagination features' }
//           ]
//         },
//         {
//           category: 'Item Transfer System',
//           images: [
//             { src: '/imgs/inv/Screenshot 2025-06-24 212059.png', title: 'Item Borrow Form', description: 'Add new item borrow requests with date selection and item search functionality' },
//             { src: '/imgs/inv/Screenshot 2025-06-24 212121.png', title: 'Signatory Management', description: 'Manage authorized signatories for transfer approvals and documentation' }
//           ]
//         },
//         {
//           category: 'Reports & Documentation',
//           images: [
//             { src: '/imgs/inv/Screenshot 2025-06-24 212108.png', title: 'Item Reports', description: 'Generate detailed reports with filtering options and total amount calculations' },
//             { src: '/imgs/inv/Screenshot 2025-06-24 212149.png', title: 'Print Document', description: 'Printable transfer documents with official formatting and signatory sections' }
//           ]
//         },
//         {
//           category: 'Profile Management',
//           images: [
//             { src: '/imgs/inv/Screenshot 2025-06-24 212159.png', title: 'Profile Settings', description: 'User profile management with personal information updates and password change functionality' }
//           ]
//         }
//       ]
//     },
//     // RedShop Affiliate System Images
//     {
//       projectId: 1,
//       categories: [
//         {
//           category: 'Admin Authentication',
//           images: [
//             { src: '/imgs/reds/Screenshot 2025-06-26 122905.png', title: 'Admin Login', description: 'Secure admin login interface with dark theme and gradient design for system access' }
//           ]
//         },
//         {
//           category: 'Admin Dashboard',
//           images: [
//             { src: '/imgs/reds/Screenshot 2025-06-26 122918.png', title: 'Dashboard Overview', description: 'Admin dashboard with total products statistics, welcome message, and user profile dropdown menu' }
//           ]
//         },
//         {
//           category: 'Product Management',
//           images: [
//             { src: '/imgs/reds/Screenshot 2025-06-26 122945.png', title: 'Add New Product', description: 'Comprehensive product creation form with category, name, affiliate links, TikTok embed code, price, and photo upload fields' },
//             { src: '/imgs/reds/Screenshot 2025-06-26 123000.png', title: 'Products List', description: 'Product management interface showing all products with images, names, prices, affiliate/embed links, and action buttons' },
//             { src: '/imgs/reds/Screenshot 2025-06-26 123131.png', title: 'Edit Product', description: 'Product editing interface with pre-filled data including TikTok embed code and all product details for easy updates' }
//           ]
//         },
//         {
//           category: 'Frontend Store',
//           images: [
//             { src: '/imgs/reds/Screenshot 2025-06-26 123159.png', title: 'Store Homepage', description: 'Beautiful gradient homepage with welcome message, navigation menu, and featured products carousel section' },
//             { src: '/imgs/reds/Screenshot 2025-06-26 123210.png', title: 'Product Showcase', description: 'Product carousel display with navigation arrows showing featured items and promotional content' }
//           ]
//         },
//         {
//           category: 'Product Catalog & Search',
//           images: [
//             { src: '/imgs/reds/Screenshot 2025-06-26 123224.png', title: 'Products Page', description: 'Product catalog with category filtering (All, Tops, Bags, Lights), search functionality, and product grid with prices and visit buttons' },
//             { src: '/imgs/reds/Screenshot 2025-06-26 123326.png', title: 'Platform Selection', description: 'Modal popup allowing customers to choose between TikTok and Shopee platforms for product purchase' }
//           ]
//         },
//         {
//           category: 'TikTok Integration',
//           images: [
//             { src: '/imgs/reds/Screenshot 2025-06-26 123502.png', title: 'TikTok Product Demo', description: 'Embedded TikTok video player showing product demonstration with Filipino language content and social engagement features' }
//           ]
//         }
//       ]
//     }
//   ];

//   const getCurrentProjectImages = () => {
//     return allProjectImages.find(project => project.projectId === selectedProject)?.categories || [];
//   };

//   const getAllImages = () => {
//     const currentProjectImages = getCurrentProjectImages();
//     return currentProjectImages.flatMap(category => 
//       category.images.map(img => ({ ...img, category: category.category }))
//     );
//   };

//   const nextImage = () => {
//     const allImages = getAllImages();
//     setSelectedImageIndex((prev) => (prev + 1) % allImages.length);
//   };

//   const prevImage = () => {
//     const allImages = getAllImages();
//     setSelectedImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
//   };

//   const openProjectModal = (projectId: number) => {
//     setSelectedProject(projectId);
//     setShowProjectModal(true);
//     setSelectedImageIndex(0);
//   };

//   const closeProjectModal = () => {
//     setShowProjectModal(false);
//     setSelectedImageIndex(0);
//   };

//   return (
//     <>
//     <section 
//       id="Experience" 
//       ref={projectsRef}
//       className={`py-20 px-4 transition-opacity duration-700 ${
//         visible ? 'animate-fade-in' : 'animate-fade-out'
//       }`}
//     >
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
//               Major Projects
//             </h2>
//             <div className="w-24 h-1 bg-white rounded-full mx-auto mb-6" />
//             <p className="text-gray-400 max-w-2xl mx-auto">
//               Comprehensive projects showcasing full-stack development capabilities and system integration
//             </p>
//           </div>

//           <div className="space-y-8">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="group relative p-8 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 hover:scale-105"
//               >
//                 <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
//                 <div className="relative z-10">
//                   <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//                       <p className="text-gray-300 font-medium text-lg">{project.subtitle}</p>
//                     </div>
//                     <div className="mt-4 md:mt-0">
//                       <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300">
//                         {project.period}
//                       </span>
//                     </div>
//                   </div>
                  
//                   <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
//                   <div className="mb-6">
//                     <h4 className="text-white font-medium mb-3">Key Features & Achievements:</h4>
//                     <ul className="space-y-2">
//                       {project.achievements.map((achievement, achievementIndex) => (
//                         <li key={achievementIndex} className="flex items-start gap-3 text-gray-400">
//                           <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
//                           <span>{achievement}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="mb-6">
//                     <h4 className="text-white font-medium mb-3">Technologies Used:</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.map((tech, techIndex) => (
//                         <span
//                           key={techIndex}
//                           className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {project.hasProject && (
//                     <button
//                       onClick={() => openProjectModal(project.projectId)}
//                       className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
//                     >
//                       View Project Screenshots
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Project Modal */}
//       {showProjectModal && (
//         <div
//           className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-2"
//           style={{ height: '100dvh', width: '100vw' }}
//           tabIndex={-1}
//           onKeyDown={e => {
//             if (e.key === 'Escape') closeProjectModal();
//             if (e.key === 'ArrowLeft') prevImage();
//             if (e.key === 'ArrowRight') nextImage();
//           }}
//         >
//           <div
//             className="relative w-full h-full max-w-[1200px] max-h-[95dvh] bg-black/90 border border-white/20 rounded-2xl overflow-hidden flex flex-col"
//             style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
//             onClick={e => e.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="flex items-center justify-between p-3 border-b border-white/20 bg-black/90 sticky top-0 z-20">
//               <div>
//                 <h3 className="text-2xl font-bold text-white">{projects[selectedProject]?.title}</h3>
//                 <p className="text-gray-300">{projects[selectedProject]?.subtitle}</p>
//               </div>
//               <button
//                 onClick={closeProjectModal}
//                 className="p-2 text-gray-400 hover:text-white transition-colors"
//                 aria-label="Close modal"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <div className="flex-1 flex flex-col lg:flex-row overflow-auto">
//               {/* Image Viewer */}
//               <div className="flex-1 relative bg-black flex items-center justify-center min-h-[300px]">
//                 <div className="relative w-full h-[40vh] lg:h-[70vh] flex items-center justify-center p-2 lg:p-4">
//                   {(() => {
//                     const allImages = getAllImages();
//                     const currentImage = allImages[selectedImageIndex];
//                     if (!currentImage) return null;
//                     return (
//                       <div className="relative w-full h-full flex items-center justify-center">
//                         <img
//                           src={currentImage.src}
//                           alt={currentImage.title}
//                           className="max-w-full max-h-full object-contain rounded-lg shadow-2xl mx-auto my-auto"
//                         />
//                         {/* Image Navigation */}
//                         {allImages.length > 1 && (
//                           <>
//                             <button
//                               onClick={prevImage}
//                               className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
//                               aria-label="Previous image"
//                             >
//                               <ArrowLeft className="w-6 h-6" />
//                             </button>
//                             <button
//                               onClick={nextImage}
//                               className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors"
//                               aria-label="Next image"
//                             >
//                               <ArrowRight className="w-6 h-6" />
//                             </button>
//                           </>
//                         )}
//                       </div>
//                     );
//                   })()}
//                 </div>
//               </div>

//               {/* Sidebar with categories and thumbnails */}
//               <div className="w-full lg:w-80 bg-white/10 p-4 lg:p-6 overflow-y-auto max-h-[40vh] lg:max-h-[70vh]">
//                 <div className="space-y-6">
//                   {getCurrentProjectImages().map((category, categoryIndex) => (
//                     <div key={categoryIndex}>
//                       <h4 className="text-white font-semibold mb-3">{category.category}</h4>
//                       <div className="grid grid-cols-2 gap-2">
//                         {category.images.map((image, imageIndex) => {
//                           const globalIndex = getAllImages().findIndex(
//                             img => img.src === image.src && img.title === image.title
//                           );
//                           return (
//                             <button
//                               key={imageIndex}
//                               onClick={() => setSelectedImageIndex(globalIndex)}
//                               className={`relative overflow-hidden rounded-lg border-2 transition-all ${
//                                 selectedImageIndex === globalIndex
//                                   ? 'border-white'
//                                   : 'border-white/30 hover:border-white/50'
//                               }`}
//                               aria-label={`View ${image.title}`}
//                             >
//                               <img
//                                 src={image.src}
//                                 alt={image.title}
//                                 className="w-full h-16 object-cover"
//                               />
//                               <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
//                                 <span className="text-xs text-white text-center px-1">{image.title}</span>
//                               </div>
//                             </button>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Current Image Info */}
//                 {(() => {
//                   const allImages = getAllImages();
//                   const currentImage = allImages[selectedImageIndex];
//                   if (!currentImage) return null;
//                   return (
//                     <div className="mt-6 p-4 bg-white/10 rounded-lg">
//                       <h5 className="text-white font-semibold mb-2">{currentImage.title}</h5>
//                       <p className="text-gray-300 text-sm mb-2">{currentImage.description}</p>
//                       <p className="text-gray-400 text-xs">Category: {currentImage.category}</p>
//                     </div>
//                   );
//                 })()}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Projects;
