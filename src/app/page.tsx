'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Commissions } from '@/components/Commissions'

export default function Home() {
  const [showScroll, setShowScroll] = useState(false)
  const [removeScroll, setRemoveScroll] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let canvas = canvasRef.current
  let context = canvas?.getContext('2d')
  const frameCount = 148
  const currentFrame = (index: number) => `/${index.toString().padStart(4, '0')}.jpeg`
  const images = useMemo(() => {
    const images = new Map<string, HTMLImageElement>()
    if (typeof window === 'undefined' || typeof document === 'undefined') return images
    for (let i = 1; i < frameCount; i++) {
      const img = new Image()
      img.src = currentFrame(i)
      images.set(currentFrame(i), img)
    }
    return images
  }, [])

  useEffect(() => {
    canvas = canvasRef.current
    context = canvas?.getContext('2d')
    if (canvas) {
      canvas.height = window.window.innerHeight
      canvas.width = 640
    }
  }, [canvasRef])

  useEffect(() => {
    const updateImage = (index: number) => {
      const img = images.get(currentFrame(index))
      if (context && img) context.drawImage(img, 0, 0)
    }
    const onScroll = () => {
      const html = document.documentElement
      if (showScroll) {
        setShowScroll(false)
        setTimeout(() => setRemoveScroll(true), 200)
      }
      const scrollTop = html.scrollTop
      const scrollBottom = html.scrollHeight - html.clientHeight - scrollTop
      const scrollFraction = scrollTop / (window.innerHeight * 2)
      const frameIndex = Math.max(0, Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount)))
      window.requestAnimationFrame(() => updateImage(frameIndex + 1))
      // is currently in view (overriding scroll behavior)
      if (canvas && scrollBottom > window.innerHeight && canvas?.style.position !== 'fixed') {
        canvas.style.top = '150px'
        canvas.style.position = 'fixed'
      }
      // is going out of view (normal scroll behaviour)
      if (canvas && scrollBottom < window.innerHeight && canvas?.style.position !== 'absolute') {
        canvas.style.position = 'absolute'
        if (scrollBottom < window.innerHeight) {
          canvas.style.top = `${html.scrollHeight - window.innerHeight * 3 + 150}px`
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [canvas, context, images, showScroll])

  useEffect(() => {
    if (!showScroll) {
      const html = document.documentElement
      const scrollTop = html.scrollTop
      const scrollBottom = html.scrollHeight - html.clientHeight - scrollTop
      const img = new Image()
      if (canvas && context) {
        canvas.width = 640
        canvas.height = 770
        if (scrollBottom > window.innerHeight) {
          canvas.style.position = 'fixed'
          canvas.style.top = '150px'
        }
        img.src = currentFrame(1)
        img.onload = function () {
          if (context) context.drawImage(img, 0, 0)
        }
      }
    }
  }, [canvas, context, showScroll])

  useEffect(() => {
    const html = document.documentElement
    const scrollTop = html.scrollTop
    if (scrollTop === 0) {
      const timeout = setTimeout(() => {
        setShowScroll(true)
      }, 1500)
      window.addEventListener('scroll', () => {
        setRemoveScroll(true)
        clearTimeout(timeout)
      })
      return () => clearTimeout(timeout)
    }
    setRemoveScroll(true)
  }, [])

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[640px] flex flex-col items-center">
          <div className="w-full h-screen flex items-center justify-center">
            <div className="font-bold text-4xl tracking-tighter z-10 pb-[50vh]">kidOndrej</div>
          </div>
          <div className="w-full h-[200vh] relative overflow-hidden">
            <canvas ref={canvasRef} />
          </div>
          <Commissions />
        </div>
      </div>
      {!removeScroll && (
        <div
          className={`fixed bottom-0 w-screen p-6 text-center transition-all duration-200 ${
            showScroll ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Scroll
        </div>
      )}
    </>
  )
}
