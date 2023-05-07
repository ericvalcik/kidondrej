'use client'

import { useEffect, useMemo, useRef } from 'react'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const html = document.documentElement
  let canvas = canvasRef.current
  let context = canvas?.getContext('2d')
  const frameCount = 148
  const currentFrame = (index: number) =>
    `https://kidondrej.s3.eu-north-1.amazonaws.com/output/${index.toString().padStart(4, '0')}.jpeg`
  const images = useMemo(() => {
    const images = new Map<string, HTMLImageElement>()
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
      if (context) {
        context.font = '50px monospace'
      }
    }
  }, [canvasRef])

  useEffect(() => {
    const updateImage = (index: number) => {
      const img = images.get(currentFrame(index))
      if (context && img) context.drawImage(img, 0, 0)
    }
    const onScroll = () => {
      const scrollTop = html.scrollTop
      const scrollBottom = html.scrollHeight - html.clientHeight - scrollTop
      const scrollFraction = (scrollTop - window.innerHeight) / (window.innerHeight * 4)
      const frameIndex = Math.max(0, Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount)))
      window.requestAnimationFrame(() => updateImage(frameIndex + 1))
      // is currently in view (overriding scroll behavior)
      if (
        canvas &&
        scrollTop > window.innerHeight &&
        scrollBottom > window.innerHeight &&
        canvas?.style.position !== 'fixed'
      ) {
        canvas.style.top = '0'
        canvas.style.position = 'fixed'
      }
      // is going out of view (normal scroll behaviour)
      if (
        canvas &&
        (scrollTop < window.innerHeight || scrollBottom < window.innerHeight) &&
        canvas?.style.position !== 'absolute'
      ) {
        canvas.style.position = 'absolute'
        if (scrollBottom < window.innerHeight) {
          canvas.style.top = `${html.scrollHeight - window.innerHeight * 3}px`
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [canvas, context, html.clientHeight, html.scrollHeight, html.scrollTop, images])

  useEffect(() => {
    const img = new Image()
    img.src = currentFrame(1)
    if (canvas && context) {
      canvas.width = 640
      canvas.height = 770
      img.onload = function () {
        if (context) context.drawImage(img, 0, 0)
      }
    }
  }, [canvas, context])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[640px] flex flex-col items-center">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="font-bold text-4xl tracking-tighter">kidOndrej</div>
        </div>
        <div className="w-full h-[500vh] relative overflow-hidden">
          <canvas ref={canvasRef} />
        </div>
        <div className="w-full h-screen flex items-center justify-center bg-amber-300">
          <div className="font-bold text-4xl tracking-tighter">end form</div>
        </div>
      </div>
    </div>
  )
}
