'use client'
import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// Put your audio file in  /public/music/ambient.mp3  (or change this path)
const TRACK_SRC = '/music/ambient.mp3'
const TRACK_NAME = 'Ambient focus'

const MusicPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.4)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)

  // Restore saved volume
  useEffect(() => {
    try {
      const saved = parseFloat(localStorage.getItem('music-volume'))
      if (!Number.isNaN(saved)) setVolume(saved)
    } catch {}
  }, [])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
    try {
      localStorage.setItem('music-volume', String(volume))
    } catch {}
  }, [volume])

  // Browsers block autoplay, so playback always starts from a click
  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      if (audio.paused) {
        await audio.play()
        setIsPlaying(true)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    } catch {
      setError(true)
      setIsPlaying(false)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      <audio
        ref={audioRef}
        src={TRACK_SRC}
        loop
        preload="none"
        onError={() => setError(true)}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="glass-strong rounded-2xl px-4 py-3 flex flex-col gap-2 w-56"
          >
            <p className="text-sm font-semibold leading-5">{TRACK_NAME}</p>
            {error ? (
              <p className="text-xs leading-4 text-rose-600 dark:text-rose-300">
                Audio file not found. Add it to public/music/ambient.mp3.
              </p>
            ) : (
              <label className="flex items-center gap-2 text-xs">
                Volume
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="flex-1 accent-violet-500"
                  aria-label="Music volume"
                />
              </label>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="glass-strong rounded-full flex items-center gap-1 p-1.5">
        <button
          onClick={toggle}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          aria-pressed={isPlaying}
          className="primary-button w-11 h-11 rounded-full flex items-center justify-center hover:scale-105 transition"
        >
          {isPlaying ? (
            <span className="flex items-end gap-[3px] h-4" aria-hidden="true">
              <span className="eq-bar" style={{ animationDelay: '0s' }} />
              <span className="eq-bar" style={{ animationDelay: '0.2s' }} />
              <span className="eq-bar" style={{ animationDelay: '0.4s' }} />
            </span>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Music settings"
          aria-expanded={open}
          className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default MusicPlayer
