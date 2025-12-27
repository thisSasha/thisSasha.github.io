import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Portfolio } from './pages/Portfolio.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { useLenis } from './hooks/useLenis.ts'
import { RefsContext } from './context/RefsContext.tsx'

export function to_id(ref: React.RefObject<HTMLElement | null>) {
  if (!ref.current) return;
  requestAnimationFrame(() => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

export function useRefs() {
  const portfolio = useRef<HTMLElement | null>(null);
  const contacts = useRef<HTMLDivElement | null>(null);
  const stack = useRef<HTMLDivElement | null>(null);
  const about = useRef<HTMLElement | null>(null);


  return { portfolio, contacts, about, stack };
}

function App() {
  useLenis();
  const [ready, setReady] = useState(false)
  const refs = useRefs()

  useEffect(() => {
    const imgs = Array.from(document.images)
    if (imgs.length === 0) {
      setReady(true)
      return
    }

    let loaded = 0

    const check = () => {
      loaded += 1
      if (loaded === imgs.length) setReady(true)
    }

    imgs.forEach(img => {
      if (img.complete) check()
      else {
        img.addEventListener("load", check, { once: true })
        img.addEventListener("error", check, { once: true })
      }
    })
  }, [])


  if (!ready)
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-white">
        <span>Loading...</span>
      </div>
    )
  else
    return (
      <RefsContext.Provider value={refs}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/me" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RefsContext.Provider>
    )
}

export default App
