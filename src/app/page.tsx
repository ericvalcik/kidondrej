'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const html = document.documentElement
  let canvas = canvasRef.current
  let context = canvas?.getContext('2d')

  const onScroll = () => {
    const scrollTop = html.scrollTop
    const scrollBottom = html.scrollHeight - html.clientHeight - scrollTop
    const frameCount = 148
    const scrollFraction = (scrollTop - 108) / (window.innerHeight * 4)
    const frameIndex = Math.max(0, Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount)))
    window.requestAnimationFrame(() => {
      context?.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0)
      context?.fillText(`Frame ${frameIndex}`, 200, window.innerHeight / 2)
    })
    // is currently in view (overriding scroll behavior)
    if (canvas && scrollTop > 108 && scrollBottom > 108 && canvas?.style.position !== 'fixed') {
      canvas.style.left = `${window.innerWidth / 2 - 290}px`
      canvas.style.top = '0'
      canvas.style.position = 'fixed'
    }
    // is going out of view (normal scroll behaviour)
    if (canvas && (scrollTop < 108 || scrollBottom < 108) && canvas?.style.position !== 'absolute') {
      canvas.style.left = '0'
      canvas.style.position = 'absolute'
      if (scrollBottom < 108) {
        canvas.style.top = `${html.scrollHeight - 216 - canvas.height}px`
      }
    }
  }

  useEffect(() => {
    canvas = canvasRef.current
    context = canvas?.getContext('2d')
    if (canvas) {
      canvas.height = window.window.innerHeight
      canvas.width = 640
      if (context) {
        context.fillStyle = 'white'
        context.font = '50px monospace'
      }
    }
  }, [canvasRef])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  useEffect(() => {
    window.requestAnimationFrame(() => {
      context?.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0)
      context?.fillText(`Frame 0`, 200, window.innerHeight / 2)
    })
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-[640px] flex flex-col items-center">
        <div className="w-full text-white text-[72px]">This placeholder</div>
        <div className="w-full h-[500vh] relative overflow-hidden">
          <canvas ref={canvasRef} />
        </div>
        <div className="w-full text-white text-[72px]">This placeholder</div>
      </div>
    </div>
  )
}
