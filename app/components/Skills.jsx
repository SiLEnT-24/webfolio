import React from 'react'
import { motion } from 'motion/react'

const skillGroups = [
  {
    title: 'Languages',
    description: 'What I write most of my code in.',
    items: ['Python', 'Java', 'JavaScript'],
  },
  {
    title: 'Backend & Data',
    description: 'Building APIs and storing data.',
    items: ['Node.js', 'MySQL', 'REST APIs'],
  },
  {
    title: 'AI & LLMs',
    description: 'Integrating language models into real apps.',
    items: ['OpenAI API', 'Google Gemini API', 'AI Agents', 'Resume Analysis'],
  },
  {
    title: 'Computer Science',
    description: 'Fundamentals I keep sharpening.',
    items: ['Data Structures', 'Algorithms', 'AI / ML'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="w-full px-[8%] sm:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I work with</h4>
      <h2 className="text-center text-5xl font-Ovo">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 max-w-4xl mx-auto">
        {skillGroups.map(({ title, description, items }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass glass-hover rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-white/70 mb-4">{description}</p>
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="px-4 py-1 text-sm rounded-full leading-6 bg-white/50 border border-white/70 dark:bg-white/10 dark:border-white/20"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
