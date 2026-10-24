import Image from 'next/image'
import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
      id="services"
      className="w-full px-[8%] sm:px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I design and develop fast, well-structured websites and AI-powered tools. I also solve data
        structure problems and keep building on my development skills.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ scale: 1.03 }}
            className="glass glass-hover rounded-2xl px-8 py-12 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-xl bg-white/60 dark:bg-white/10 flex items-center justify-center">
              <Image src={icon} alt="" className="w-8" />
            </div>
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{description}</p>
            <a href={link || '#contact'} className="flex items-center gap-2 text-sm mt-5 hover:gap-3 transition-all">
              Read more <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Services
