import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import React, { useState } from 'react';

const socialLinks = [
  { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/212687755912', color: 'text-green-500' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/bilal-nainia/', color: 'text-blue-600' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/nainia-bilal', color: 'text-gray-800 dark:text-white' },
  { name: 'Email', icon: Mail, url: 'mailto:nainiabilal@gmail.com', color: 'text-red-500' },
];

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto pb-20">
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-6xl font-bold tracking-tighter uppercase mb-4">Get In Touch</h2>
        <p className="text-xl opacity-60 max-w-2xl">Have a project in mind or just want to say hello? I'd love to hear from you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h3 className="text-4xl font-bold tracking-tight">Let's connect</h3>
            <p className="text-lg opacity-70 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-8 rounded-[32px] group hover:border-primary-orange transition-all duration-300"
              >
                <link.icon className={`w-10 h-10 mb-4 transition-transform group-hover:scale-110 ${link.color}`} />
                <h4 className="text-xl font-bold">{link.name}</h4>
                <p className="text-sm opacity-40">Connect with me</p>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-[40px] shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest opacity-40">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-orange transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest opacity-40">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-orange transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest opacity-40">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary-orange transition-colors resize-none"
                placeholder="How can I help you?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-orange text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isSuccess ? (
                "Message Sent Successfully!"
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
