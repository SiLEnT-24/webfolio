import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const roles = ['AI Engineer', 'Backend Developer', 'LLM App Builder', 'Problem Solver']

const Header = () => {
  // Simple typewriter effect
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = roles[roleIdx]
    const speed = deleting ? 40 : 90
    const t = setTimeout(() => {
      if (!deleting && text === full) {
        setTimeout(() => setDeleting(true), 1200)
      } else if (deleting && text === '') {
        setDeleting(false)
        setRoleIdx((i) => (i + 1) % roles.length)
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, roleIdx])

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-20">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        className="p-1.5 rounded-full glass-strong"
      >
        <Image src={assets.profile_img} alt="Alok Kumar" className="rounded-full w-32" priority />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-1 font-Ovo"
      >
        Hi! I am Alok Kumar <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo leading-tight min-h-[1.2em]"
        aria-label="AI Engineer"
      >
        {text}
        <span className="inline-block w-[3px] h-[0.9em] bg-current ml-1 align-middle animate-pulse" />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo glass rounded-2xl px-6 py-4"
      >
        B.Tech CSE student skilled in Python, LLM APIs, and backend development. Built AI-powered
        applications using OpenAI and Google Gemini APIs, with a focus on AI/ML, DSA, and practical
        software development.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 rounded-full bg-black/85 text-white flex items-center gap-2 shadow-lg dark:bg-white/10 dark:border dark:border-white/30 dark:backdrop-blur-xl"
        >
          Contact <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/RESUME.pdf"
          download
          className="px-10 py-3 rounded-full glass-strong flex items-center gap-2"
        >
          My resume <Image src={assets.download_icon} alt="" className="w-4 dark:invert" />
        </motion.a>
      </div>

      {/* scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 8, 0] }}
        transition={{ delay: 2, y: { repeat: Infinity, duration: 1.6 } }}
        className="mt-6 text-sm"
      >
        Scroll
      </motion.a>
    </div>
  )
}

export default Header
