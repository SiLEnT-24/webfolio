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
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-lime-400 via-violet-500 to-lime-300"
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
