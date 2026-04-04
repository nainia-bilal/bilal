import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X } from 'lucide-react';
import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Premium Beldi Food',
    description: 'A modern e-commerce platform for authentic Moroccan beldi food. Built with React and Tailwind CSS for a seamless shopping experience.',
    url: 'https://premium-beldi-food.vercel.app/',
    image: 'maison bilal.png',
  },
  {
    id: 2,
    title: 'Maroc Safariyat',
    description: 'A travel and tourism website showcasing the beauty of Morocco. Features responsive design and interactive travel guides.',
    url: 'https://maroc-safariyat.vercel.app/',
    image: 'safariyat.jpg',
  },
  {
    id: 3,
    title: 'Rose Bloom',
    description: 'An elegant floral boutique website with a focus on aesthetics and user experience. Showcases beautiful arrangements and services.',
    url: 'https://rose-bloom-ecru.vercel.app/',
    image: 'L.png',
  },
  {
    id: 5,
    title: 'E-commerce Website',
    description: 'A fully functional e-commerce store with product listings, cart functionality, and responsive checkout flow.',
    url: 'https://ecommerce-websitebilal.vercel.app/',
    image: 'Cars Logo.png',
  },
  {
    id: 6,
    title: 'Dar Bilal',
    description: 'A real estate or interior design showcase website, blending traditional Moroccan elements with modern web standards.',
    url: 'https://dar-bilal.vercel.app/',
    image: 'dar bilal.png',
  },
  {
    id: 7,
    title: 'portfolio hafsa',
    description: 'A professional portfolio website for a client, featuring a clean layout and modern design elements.',
    url: 'https://portfolio-hafsa-seven.vercel.app/',
    image: 'portfolio hafsa.png',
  },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-20">
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-6xl font-bold tracking-tighter uppercase mb-4">Featured Projects</h2>
        <p className="text-xl opacity-60 max-w-2xl">A selection of my recent work, blending creativity with technical expertise.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative glass rounded-[32px] overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold tracking-tight mb-2">{project.title}</h3>
              <p className="text-sm opacity-60 line-clamp-2">{project.description}</p>
              <div className="mt-6 flex items-center gap-2 text-primary-orange font-bold text-sm">
                View Details
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
              <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="glass max-w-lg w-full rounded-2xl overflow-hidden shadow-lg translate-y-8 md:translate-y-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-3xl font-bold tracking-tighter uppercase">{selectedProject.title}</h3>
                <p className="text-lg opacity-70">
                  {selectedProject.description}
                </p>
                <div className="pt-4">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-orange text-white font-bold text-base hover:scale-105 transition-transform"
                  >
                    Visit Website
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
