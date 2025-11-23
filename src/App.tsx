import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Portfolio } from './pages/Portfolio.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { useLenis } from './hooks/useLenis.ts'

export function to_id(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function App() {
  useLenis();
  const [ready, setReady] = useState(false)

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
      <>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/me" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    )
}

export default App
