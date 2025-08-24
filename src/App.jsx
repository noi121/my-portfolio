import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-dvh grid place-items-center bg-gray-50">
      <section className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Tailwind v4 is <span className="text-blue-600">on</span> ✨
        </h1>
        <p className="text-gray-600">React + Vite + GitHub-first setup</p>
      </section>
    </main>
  );
}

export default App
