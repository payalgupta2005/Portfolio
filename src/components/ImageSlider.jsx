import { useEffect, useState } from 'react'
import '../styles/ImageSlider.css'

export default function ImageSlider({ images = [], alt = '', interval = 3000 }) {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  // Auto-slide: hover pe ruk jata hai
  useEffect(() => {
    if (paused || images.length < 2) return
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), interval)
    return () => clearInterval(t)
  }, [paused, images.length, interval])

  if (!images.length) return null

  return (
    <div
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="slider-track"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} screenshot ${i + 1}`}
            loading="lazy"
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="slider-dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === idx ? 'active' : ''}
              aria-label={`Show slide ${i + 1}`}
              onClick={(e) => {
                e.stopPropagation()
                setIdx(i)
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}