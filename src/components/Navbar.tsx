import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary-orange",
                  location.pathname === item.path ? "text-primary-orange" : "opacity-70"
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-orange rounded-full"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Toggle Theme"
        >
          <motion.div
            initial={false}
            animate={{ rotate: theme === 'dark' ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-primary-orange" />
            ) : (
              <Moon className="w-5 h-5 text-primary-blue" />
            )}
          </motion.div>
        </button>
      </div>
    </nav>
  );
};
