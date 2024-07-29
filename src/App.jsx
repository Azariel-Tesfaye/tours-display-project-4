import { useState } from 'react'
import './App.css'
import Tours from './Sections/Tours'

function App() {
  const [count, setCount] = useState(0)

  return (
      <section>
        <Tours />
      </section>
  )
}

export default App
