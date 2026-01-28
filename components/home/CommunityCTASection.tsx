  'use client';

  import * as React from 'react';
  import { motion } from 'framer-motion';
  import { Twitter, MessageCircle, Users, Instagram, ArrowRight } from 'lucide-react';

  declare global {
    namespace JSX {
      interface IntrinsicElements {
        [elemName: string]: any;
      }
    }
  }

  export default function CommunityCTASection() {
    const socialLinks = [
      { image: '/icons/twitter.png', href: '#', label: 'Twitter', count: '25.5K' },
      { image: '/icons/telegram.png', href: '#', label: 'Telegram', count: '18.2K' },
      { image: '/icons/discord.png', href: '#', label: 'Discord', count: '12.8K' },
      { image: '/icons/instagram.png', href: '#', label: 'Instagram', count: '8.9K' },
    ];

    return (
      <React.Fragment>
        <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.4&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
                JOIN THE PACK
              </h2>
              <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
                Connect with thousands of diamond hands in our vibrant community. 
                Stay updated on the latest news, participate in discussions, and never miss important announcements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/20 backdrop-blur-sm
                  rounded-2xl p-6 text-center
                  hover-lift hover:bg-white/50 transition-all
                  border-2 border-brand-primary
                  hover:border-brand-accent"
                >
                  <div className="bg-white/70 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <img
                      src={social.image}
                      alt={social.label}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  
                  <h3 className="text-white font-bold text-2xl md:text-3xl text-brand-secondary mb-2">
                    {social.label}
                  </h3>
                  
                  <div className="text-brand-accent font-bold text-xl mb-2">
                    {social.count}
                  </div>
                  
                  <p className="text-brand-primary text-sm">
                    Followers
                  </p>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(254, 127, 45, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-accent text-white px-8 py-4 rounded-full text-xl font-bold flex items-center space-x-2 hover:bg-opacity-90 transition-all shadow-lg mx-auto"
              >
                <span>START YOUR JOURNEY</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              
              <p className="text-brand-primary mt-4">
                Ready to become part of the strongest pack in crypto?
              </p>
            </motion.div>
          </div>    
        </section>
      </React.Fragment>
    );
  }