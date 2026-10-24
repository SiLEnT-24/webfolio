'use client'
import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [ready, setReady] = useState(false)

  // Read saved theme once on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(saved ? saved === 'dark' : prefersDark)
    } catch {
      setIsDarkMode(false)
    }
    setReady(true)
  }, [])

  // Apply + persist theme (only after the initial read, so we don't overwrite it)
  useEffect(() => {
    if (!ready) return
    document.documentElement.classList.toggle('dark', isDarkMode)
    try {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    } catch {}
  }, [isDarkMode, ready])

  // Scroll progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <>
      {/* Animated colour blobs: give the glass something to blur */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="blob w-[420px] h-[420px] bg-violet-300 dark:bg-violet-700 -top-24 -left-24" />
        <div className="blob w-[380px] h-[380px] bg-sky-300 dark:bg-sky-800 top-1/3 -right-20" style={{ animationDelay: '-6s' }} />
        <div className="blob w-[360px] h-[360px] bg-rose-200 dark:bg-fuchsia-900 bottom-0 left-1/4" style={{ animationDelay: '-12s' }} />
      </div>

      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-violet-500 via-sky-400 to-rose-400"
      />

      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main id="top">
        <Header />
        <About isDarkMode={isDarkMode} />
        <Skills />
        <Services />
        <Work isDarkMode={isDarkMode} />
        <Contact />
      </main>
      <Footer isDarkMode={isDarkMode} />
      <MusicPlayer />
    </>
  )
}
