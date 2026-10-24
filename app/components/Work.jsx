import Image from 'next/image'
import { assets, workData } from '@/assets/assets'
import React from 'react'
import { motion } from 'motion/react'

const Work = ({ isDarkMode }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
      id="work"
      className="w-full px-[8%] sm:px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">My webfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my webfolio! Here is a collection of projects I have built, from AI tools to web
        apps.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5">
        {workData.map((project, index) => {
          // Optional fields: add `link` and `tags` to items in assets.js to use them
          const Wrapper = project.link ? 'a' : 'div'
          const wrapperProps = project.link
            ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.04 }}
            >
              <Wrapper
                {...wrapperProps}
                aria-label={project.title}
                className="block aspect-square bg-no-repeat bg-cover bg-center rounded-2xl relative cursor-pointer group overflow-hidden"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                <div
                  className="glass-strong w-10/12 rounded-xl absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-4
                  flex items-center justify-between gap-3 duration-500 group-hover:bottom-7 dark:text-white"
                >
                  <div className="min-w-0">
                    <h3 className="font-semibold leading-6 truncate">{project.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-white/80 leading-5">
                      {project.description}
                    </p>
                    {project.tags && (
                      <ul className="flex flex-wrap gap-1 mt-2">
                        {project.tags.map((tag) => (
                          <li key={tag} className="text-xs px-2 rounded-full bg-white/60 dark:bg-white/10">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div
                    className="shrink-0 border rounded-full border-black dark:border-white w-9 aspect-square
                    flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff]
                    group-hover:bg-lime-300 dark:group-hover:bg-lime-300 transition"
                  >
                    <Image src={assets.send_icon} alt="" className="w-5 dark:group-hover:invert-0 dark:invert" />
                  </div>
                </div>
              </Wrapper>
            </motion.div>
          )
        })}
      </div>

      <motion.a
        whileHover={{ scale: 1.05 }}
        href="https://github.com/SiLEnT-24"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-max items-center justify-center gap-2 glass glass-hover rounded-full py-3 px-10 mx-auto my-20"
      >
        Show more on GitHub
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt=""
          className="w-4"
        />
      </motion.a>
    </motion.section>
  )
}

export default Work
