import { motion } from 'motion/react';
import { BookOpen, Code, Cpu, GraduationCap, Lightbulb, User } from 'lucide-react';
import React from 'react';

const hardSkills = [
  { name: 'Frontend Development', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap'] },
  { name: 'Backend & Database', items: ['MongoDB'] },
  { name: 'Styling & Frameworks', items: ['Tailwind CSS (Expertise)', 'Responsive Web Design'] },
  { name: 'Data Management', items: ['Microsoft Office Suite'] },
];

const softSkills = [
  'Time Management',
  'Professional Discipline',
  'Problem Solving',
  'Fast Learner',
];

const education = [
  {
    title: 'Web Development Certification',
    institution: 'Nouaceur Wings Tech Center',
    status: 'Ongoing',
  },
  {
    title: 'Bachelor’s Degree in Management',
    institution: 'Hassan II University - Ain Chock, Casablanca',
    status: 'Ongoing',
  },
  {
    title: 'Baccalaureate in Physical Sciences (French Option)',
    institution: 'Taha Hussein High School',
    status: 'Class of 2024-2025',
  },
];

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Education */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <GraduationCap className="w-8 h-8 text-primary-orange" />
            <h2 className="text-4xl font-bold tracking-tighter uppercase">Education</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary-orange/20 hover:border-primary-orange transition-colors">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-orange" />
                <h3 className="text-xl font-bold">{edu.title}</h3>
                <p className="text-sm opacity-60">{edu.institution}</p>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-orange/10 text-primary-orange mt-2 inline-block">
                  {edu.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <User className="w-8 h-8 text-primary-orange" />
            <h2 className="text-4xl font-bold tracking-tighter uppercase">About Me</h2>
          </div>
          
          <p className="text-xl leading-relaxed opacity-80 font-light">
            I am <span className="text-primary-orange font-bold">Bilal Nainia</span>, a passionate Web Developer and Management student based in Casablanca. I specialize in building modern, responsive, and user-friendly digital experiences. 
          </p>
          <p className="text-lg leading-relaxed opacity-70">
            With a strong foundation in frontend technologies (React, Tailwind CSS) and a commitment to professional discipline, I focus on delivering high-quality web solutions that blend aesthetics with functionality.
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-3xl font-bold text-primary-orange">Casablanca</h4>
              <p className="text-sm opacity-60">Based in Morocco</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-3xl font-bold text-primary-orange">2+</h4>
              <p className="text-sm opacity-60">Years of Learning</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="mt-32 space-y-16 pb-20">
        <div className="flex flex-col items-center text-center gap-4">
          <Cpu className="w-12 h-12 text-primary-orange" />
          <h2 className="text-5xl font-bold tracking-tighter uppercase">Skills & Tools</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[40px] space-y-8"
          >
            <div className="flex items-center gap-4">
              <Code className="w-6 h-6 text-primary-orange" />
              <h3 className="text-2xl font-bold tracking-tight">Hard Skills</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {hardSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-widest opacity-40">{skill.name}</h4>
                  <ul className="space-y-1">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-sm font-medium">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-10 rounded-[40px] space-y-8"
          >
            <div className="flex items-center gap-4">
              <Lightbulb className="w-6 h-6 text-primary-orange" />
              <h3 className="text-2xl font-bold tracking-tight">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-orange transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary-orange" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="w-6 h-6 text-primary-orange" />
                <h3 className="text-2xl font-bold tracking-tight">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['VS Code', 'Cursor', 'Git', 'GitHub', 'Chrome DevTools', 'Tailwind Play'].map((tool) => (
                  <span key={tool} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
