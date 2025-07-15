'use client'
import { useEffect, useState } from 'react'

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA', 'Enter'
]

export function KonamiCode() {
  const [sequence, setSequence] = useState<string[]>([])
  const [epicMode, setEpicMode] = useState(false)
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const newSequence = [...sequence, event.code].slice(-KONAMI_CODE.length)
      setSequence(newSequence)

      // Check if the sequence matches the Konami code
      if (newSequence.length === KONAMI_CODE.length && 
          newSequence.every((key, index) => key === KONAMI_CODE[index])) {
        activateEpicMode()
        setSequence([]) // Reset sequence
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [sequence])

  const activateEpicMode = () => {
    if (epicMode) return // Already activated

    setEpicMode(true)
    setShowBubble(true)

    // Add custom cursor style
    document.body.style.cursor = `url('https://static.wikia.nocookie.net/nintendo/images/1/12/1upshroom.png/revision/latest?cb=20160922033647&path-prefix=en') 8 8, auto`
  }

  const deactivateEpicMode = () => {
    setEpicMode(false)
    setShowBubble(false)
    document.body.style.cursor = 'auto'
  }

  return (
    <>
      {/* Epic Mode Display */}
      {showBubble && (
        <div className="fixed top-4 right-4 z-[9999] animate-in slide-in-from-top-2 duration-500">
          <a 
            href="https://resed.stanford.edu/neighborhoods/rowan/rowan-houses/enchanted-broccoli-forest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center font-['PPMondwest','PPNeueBit',Arial,sans-serif] cursor-pointer hover:scale-110 transition-transform duration-200"
          >
            <span className="text-4xl">🥦</span>
          </a>
        </div>
      )}
    </>
  )
}
