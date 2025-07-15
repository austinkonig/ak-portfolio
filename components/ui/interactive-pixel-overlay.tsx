'use client'
import { useEffect, useRef, useState } from 'react'

export function InteractivePixelOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const dotSize = 8
      const dotRadius = 2.5
      const lightRadius = 100 // Distance from mouse where dots light up
      
      // Get current theme
      const isDark = document.documentElement.classList.contains('dark')
      
      for (let x = 0; x < canvas.width; x += dotSize) {
        for (let y = 0; y < canvas.height; y += dotSize) {
          const distance = Math.sqrt(
            Math.pow(x - mousePos.x, 2) + Math.pow(y - mousePos.y, 2)
          )
          
          // Calculate opacity based on distance from mouse
          let opacity = 0.02
          if (distance < lightRadius) {
            const intensity = 1 - (distance / lightRadius)
            opacity = 0.02 + (intensity * 0.6) // Base opacity + intensity boost
          }
          
          // Set color based on theme
          const color = isDark ? '255, 255, 255' : '0, 0, 0'
          
          ctx.fillStyle = `rgba(${color}, ${opacity})`
          ctx.beginPath()
          ctx.arc(x + dotSize/2, y + dotSize/2, dotRadius, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      
      animationRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePos])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1000]"
      style={{ mixBlendMode: 'multiply' }}
    />
  )
}
