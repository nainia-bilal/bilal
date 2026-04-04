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

const menuVariants = {
  closed: { opacity: 0, y: -40, scale: 0.95, transition: { duration: 0.2 } },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.08 }
  }
};

const itemVariants = { closed: { opacity: 0, y: -10 }, open: { opacity: 1, y: 0 } };

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState("up"); // up or down
  const [lastScroll, setLastScroll] = useState(0);

  // Smooth hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: scrollDir === "down" ? -120 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
    >
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg">

        {/* LOGO */}
        <Link
          to="/"
          className={cn(
            "font-bold text-lg md:text-xl",
            theme === 'dark' ? "text-orange-400" : "text-primary-blue"
          )}
        >
          Bilal.N
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6">
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

        {/* RIGHT SIDE */}
        <div className="ml-auto flex items-center gap-2">

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <motion.div
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-orange-400" />
              ) : (
                <Moon className="w-5 h-5 text-primary-blue" />
              )}
            </motion.div>
          </button>

          {/* BURGER TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
          >
            <motion.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? (
                <X className={cn(
                  "w-5 h-5",
                  theme === 'dark' ? "text-orange-400" : "text-primary-blue"
                )} />
              ) : (
                <Menu className={cn(
                  "w-5 h-5",
                  theme === 'dark' ? "text-orange-400" : "text-primary-blue"
                )} />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-20 left-1/2 -translate-x-1/2 w-full glass rounded-2xl p-6 flex flex-col items-center gap-6 md:hidden shadow-xl"
          >
            {navItems.map(item => (
              <motion.div key={item.path} variants={itemVariants}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary-orange",
                    location.pathname === item.path ? "text-primary-orange" : "opacity-80"
                  )}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};