import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Portfolio } from './pages/Portfolio.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { useLenis } from './hooks/useLenis.ts'

function App() {
  useLenis();
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const onReady = () => setReady(true)
    if (document.readyState === "complete") onReady()
    else window.addEventListener("load", onReady, { once: true })
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
