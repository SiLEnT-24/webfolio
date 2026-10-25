import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

// Move the key into .env.local:  NEXT_PUBLIC_WEB3FORMS_KEY=your-key
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'e1ce3145-2e2e-4fa7-95c4-50a1cdf84d9b'

const fieldClass =
  'w-full p-3 outline-none rounded-xl glass focus:ring-2 focus:ring-violet-400 placeholder:text-gray-500 dark:placeholder:text-white/50 transition'

const Contact = () => {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [message, setMessage] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    setMessage('Sending...')

    try {
      const formData = new FormData(form)
      formData.append('access_key', ACCESS_KEY)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setMessage('Thanks! Your message was sent. I will reply soon.')
        form.reset()
      } else {
        setStatus('error')
        setMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Check your connection and try again.')
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="w-full px-[8%] sm:px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I would be happy to hear from you! If you have any questions, comments, or feedback, please
        use the form below.
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto glass-strong rounded-3xl p-6 sm:p-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <label className="block">
            <span className="sr-only">Your name</span>
            <input type="text" name="name" placeholder="Enter your name" required className={fieldClass} />
          </label>
          <label className="block">
            <span className="sr-only">Your email</span>
            <input type="email" name="email" placeholder="Enter your email" required className={fieldClass} />
          </label>
        </div>

        <label className="block mb-6">
          <span className="sr-only">Your message</span>
          <textarea
            rows="6"
            name="message"
            placeholder="Enter your message"
            required
            className={`${fieldClass} resize-none`}
          />
        </label>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={status === 'sending'}
          className="primary-button py-3 px-8 flex items-center gap-2 rounded-full mx-auto
          duration-500 disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : 'Submit now'}
          <Image src={assets.right_arrow_white} alt="" className="w-4 invert" />
        </motion.button>

        <p
          role="status"
          aria-live="polite"
          className={`mt-4 text-center min-h-[2rem] ${
            status === 'success'
              ? 'text-emerald-600 dark:text-emerald-300'
              : status === 'error'
              ? 'text-rose-600 dark:text-rose-300'
              : ''
          }`}
        >
          {status !== 'idle' && message}
        </p>
      </form>
    </motion.section>
  )
}

export default Contact
