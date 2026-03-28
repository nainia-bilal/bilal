import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-12 border-t border-white/10 glass">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-xl font-bold tracking-tighter">BILAL NAINIA</h2>
          <p className="text-sm opacity-60">Frontend Developer | Management Student</p>
        </div>

        <div className="flex items-center gap-8 text-sm font-medium opacity-70">
          <Link to="/" className="hover:text-primary-orange transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary-orange transition-colors">About</Link>
          <Link to="/projects" className="hover:text-primary-orange transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-primary-orange transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/nainia-bilal" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/bilal-nainia/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:nainiabilal@gmail.com" className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://wa.me/212687755912" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-xs opacity-40">
        © {new Date().getFullYear()} Bilal Nainia. All rights reserved.
      </div>
    </footer>
  );
};
