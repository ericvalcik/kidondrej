'use client'

import { useEffect, useMemo, useRef } from 'react'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const html = document.documentElement
  let canvas = canvasRef.current
  let context = canvas?.getContext('2d')
  const frameCount = 148
  const img = useMemo(() => new Image(), [])

  const currentFrame = (index: number) =>
    `https://kidondrej.s3.eu-north-1.amazonaws.com/output/${index.toString().padStart(4, '0')}.jpeg`

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
      img.src = currentFrame(index)
      if (context) context.drawImage(img, 0, 0)
    }
    const onScroll = () => {
      const scrollTop = html.scrollTop
      const scrollBottom = html.scrollHeight - html.clientHeight - scrollTop
      const scrollFraction = (scrollTop - 108) / (window.innerHeight * 4)
      const frameIndex = Math.max(0, Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount)))
      window.requestAnimationFrame(() => updateImage(frameIndex + 1))
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
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [canvas, context, html.clientHeight, html.scrollHeight, html.scrollTop, img])

  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image()
        img.src = currentFrame(i)
      }
    }
    img.src = currentFrame(1)
    if (canvas && context) {
      canvas.width = 1158
      canvas.height = 770
      img.onload = function () {
        if (context) context.drawImage(img, 0, 0)
      }
    }
    preloadImages()
  }, [canvas, img, context])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-[640px] flex flex-col items-center">
        <div className="w-full  text-[72px]">This placeholder</div>
        <div className="w-full h-[500vh] relative overflow-hidden">
          <canvas ref={canvasRef} />
        </div>
        <div className="w-full text-[72px]">This placeholder</div>
      </div>
    </div>
  )
}
