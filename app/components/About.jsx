import React from 'react'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

const highlights = [
  { value: '3+', label: 'AI projects built' },
  { value: '2', label: 'LLM APIs integrated' },
  { value: '5+', label: 'Core technologies' },
]

const About = ({ isDarkMode }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
      id="about"
      className="w-full px-[8%] sm:px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About</h2>

      <div className="flex w-full flex-col lg:flex-row items-start gap-12 lg:gap-20 my-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 max-w-none mx-auto lg:mx-0 p-2 rounded-3xl glass-strong"
        >
          <Image src={assets.user_image} alt="Alok Kumar" className="w-full rounded-2xl" />
        </motion.div>

        <div className="flex-1">
          <p className="mb-8 max-w-2xl font-Ovo glass rounded-2xl p-6">
            B.Tech CSE student with hands-on experience in Python, Java, JavaScript, Node.js, MySQL,
            and LLM APIs. Built practical projects involving AI Resume Analysis, AI Agents, and email
            automation, with experience integrating OpenAI and Google Gemini APIs. Interested in
            AI/ML, backend development and Data Structures &amp; Algorithms, with a strong focus on
            building practical software solutions and continuously improving technical skills.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mb-8">
            {highlights.map(({ value, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass rounded-xl py-4 text-center"
              >
                <p className="text-3xl font-semibold leading-9">{value}</p>
                <p className="text-xs text-gray-600 dark:text-white/70 leading-4 px-2">{label}</p>
              </motion.div>
            ))}
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass glass-hover rounded-xl p-6 cursor-pointer"
              >
                <Image src={isDarkMode ? iconDark : icon} alt="" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools I use</h4>

          <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square glass rounded-xl cursor-pointer"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

export default About
