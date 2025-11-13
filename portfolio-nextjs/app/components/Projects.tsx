'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'EventEase',
    description:
      'Azure-backed venue booking system with ASP.NET Razor Pages, Azure SQL, Blob Storage, and Entra ID authentication.',
    tech: ['ASP.NET', 'Azure', 'Entra ID', 'Razor Pages'],
    image: '/images/project-1.png',
  },
  {
    title: 'Proofly',
    description:
      'Multi-tenant OCR receipt scanner with company-scoped data, OpenAI parsing, and fullscreen draft view.',
    tech: ['Kotlin', 'Jetpack Compose', 'Supabase', 'ML Kit'],
    image: '/images/project-2.png',
  },
  {
    title: 'RiseCoaching Forms',
    description:
      'Multi-form intake system with Apps Script routing and automated Sheets functions.',
    tech: ['Apps Script', 'Google Sheets', 'Tally'],
    image: '/images/project-3.png',
  },
  {
    title: 'TrailGuide',
    description:
      'Android hiking companion with Kotlin, Jetpack Compose, Supabase backend, and offline-first architecture.',
    tech: ['Kotlin', 'Supabase', 'Offline-first', 'Jetpack Compose'],
    image: '/images/project-4.png',
  },
  {
    title: 'SkillSync',
    description:
      'Skills and goals tracker built with React Native/Expo, Supabase backend, and Tally integration.',
    tech: ['React Native', 'Expo', 'Supabase', 'Tally'],
    image: '/images/project-3.png',
  },
  {
    title: 'CMCS',
    description:
      'Contract Monthly Claim System - ASP.NET Core MVC app for lecturer claims and manager approvals.',
    tech: ['ASP.NET MVC', 'EF Core', 'Role-based', 'SQL Server'],
    image: '/images/project-5.png',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedText delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4 text-gradient-signature">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400">A selection of full-stack web and mobile applications</p>
          </div>
        </AnimatedText>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedText key={project.title} delay={0.1 * index}>
              <motion.div
                className="group relative overflow-hidden rounded-xl bg-black/50 border border-purple/30 hover:border-cyan/50 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-purple/20 text-purple border border-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-signature opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.div>
            </AnimatedText>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-black border border-purple/50 rounded-xl p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-cyan transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-4 text-gradient-signature">{selectedProject.title}</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-gradient-signature/20 text-cyan border border-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-full bg-gradient-signature text-black font-semibold hover:scale-105 transition-transform"
                >
                  View Demo →
                </a>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

