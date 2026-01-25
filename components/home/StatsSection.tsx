'use client';

import { motion } from 'framer-motion';

export default function StatsSection() {
  const stats = [
    {
      title: 'Total Supply',
      value: '1,000,000,000',
      subtitle: '$MBONE Tokens'
    },
    {
      title: 'Community Driven',
      value: '100%',
      subtitle: 'No Team Allocation'
    },
    {
      title: 'Auto Burn',
      value: '2%',
      subtitle: 'Every Transaction'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
            BY THE NUMBERS
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            Transparent, community-focused tokenomics designed for long-term sustainability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center hover-lift shadow-lg border"
            >               
              <h3 className="text-brand-primary font-bold text-3xl mb-2">
                {stat.title}
              </h3>
              
              <div className="text-3xl md:text-4xl font-black text-brand-accent mb-2">
                {stat.value}
              </div>
              
              <p className="text-brand-secondary font-medium">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}