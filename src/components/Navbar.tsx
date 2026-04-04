import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
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
  const [open, setOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState("up");
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollDir(currentScroll > lastScroll && currentScroll > 50 ? "down" : "up");
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const toggleColor = theme === 'dark' ? 'text-orange-400' : 'text-primary-blue';
  const menuBg = theme === 'dark' ? 'bg-black/30' : 'bg-white/30'; // glass effect

  return (
    <motion.nav
      initial={{ y: -120, opacity: 0 }}
      animate={{
        y: scrollDir === "down" ? -120 : 0,
        opacity: scrollDir === "down" ? 0.8 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="flex items-center justify-between glass rounded-full px-6 py-3 shadow-lg backdrop-blur-md">
        {/* Logo ثابت على اليسار */}
        <Link to="/" className={cn("font-bold text-lg md:text-xl transition-all duration-300", toggleColor)}>
          Bilal.N
        </Link>

        {/* Center links (desktop only) */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navItems.map(item => (
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

        {/* Right side: Dark/Light toggle (desktop) or toggle + burger (mobile) */}
        <div className="flex items-center gap-4">
          {/* Dark/Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <motion.div animate={{ rotate: theme === 'dark' ? 180 : 0 }} transition={{ type: "spring", stiffness: 200, damping: 10 }}>
              {theme === 'dark' ? <Sun className={cn("w-5 h-5", toggleColor)} /> : <Moon className={cn("w-5 h-5", toggleColor)} />}
            </motion.div>
          </button>

          {/* Mobile burger */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="p-2">
              <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
                {open ? <X className={cn("w-5 h-5", toggleColor)} /> : <Menu className={cn("w-5 h-5", toggleColor)} />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute top-[70px] left-1/2 -translate-x-1/2 w-full rounded-full p-6 flex flex-col items-center gap-6 md:hidden shadow-xl backdrop-blur-md",
              menuBg
            )}
          >
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary-orange",
                  location.pathname === item.path ? "text-primary-orange" : "opacity-80"
                )}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};