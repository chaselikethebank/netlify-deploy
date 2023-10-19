import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <h1>🦌</h1>
     
        <button onClick={() => setCount((count) => count + 19832749587)}>
          Current win streak: {count}
        </button>
        
    </>
  )
}

export default App
