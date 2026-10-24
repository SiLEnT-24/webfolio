import Image from 'next/image'
import { assets } from '@/assets/assets'
import React from 'react'

const socials = [
  { label: 'GitHub', href: 'https://github.com/SiLEnT-24' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alok-kumar-8a6350281' },
  { label: 'Twitter', href: 'https://x.com/Alok_2410' },
]

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="mt-20 pb-24">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Alok Kumar logo"
          className="w-36 mx-auto mb-2"
        />

        <a
          href="mailto:ak0144709@gmail.com"
          className="w-max flex items-center gap-2 mx-auto hover:underline"
        >
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
          ak0144709@gmail.com
        </a>
      </div>

      <div className="glass rounded-2xl text-center sm:flex items-center justify-between mx-[8%] sm:mx-[10%] mt-12 py-6 px-6">
        <p>© {new Date().getFullYear()} Alok Kumar. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                className="hover:underline underline-offset-4"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
