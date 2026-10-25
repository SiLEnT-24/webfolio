import React, { useEffect, useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'My Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#top')

  useEffect(() => {
    const onScroll = () => setIsScroll(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close the mobile menu on Escape and lock body scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <nav
      className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition duration-300 ${
        isScroll ? 'glass shadow-sm' : ''
      }`}
    >
      <a href="#top" aria-label="Go to top">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-28 cursor-pointer mr-14"
        />
      </a>

      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-3 glass">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={`font-Ovo relative pb-1 transition ${
                active === href ? 'accent-text' : ''
              }`}
            >
              {label}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-current transition-all duration-300 ${
                  active === href ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsDarkMode((prev) => !prev)}
          aria-label="Toggle dark mode"
          className="glass rounded-full p-2 hover:scale-110 transition"
        >
          <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-5" />
        </button>

        <a
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-10 py-2.5 glass rounded-full ml-2 font-Ovo hover:scale-105 transition"
        >
          Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
        </a>

        <button
          className="block md:hidden ml-1 glass rounded-full p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-5" />
        </button>
      </div>

      {/* ------ mobile menu ------ */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <ul
        className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen
        glass-strong rounded-l-3xl transition-transform duration-500 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          className="absolute right-6 top-6"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt=""
            className="w-5 cursor-pointer"
          />
        </button>
        {links.map(({ label, href }) => (
          <li key={href}>
            <a className="font-Ovo" onClick={() => setMenuOpen(false)} href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
