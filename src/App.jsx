import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showResetMessage, setShowResetMessage] = useState(false)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  useEffect (() => {
   if (count === 0 ) {
      setShowResetMessage(true)

      const timer = setTimeout(() => {
        setShowResetMessage(false)
      }, 2000)

      return () => {
        clearTimeout(timer)
   }


   }
  }, [count])

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      {showResetMessage && 
      <p className="reset-message">Counter has been reset to zero!</p>} 

      <div className="counter-display">
        <p className="count-value">{count}</p>
      </div>
      <div className="button-group">
        <button onClick={decrement} className="btn btn-decrement">
          Decrement
        </button>
        <button onClick={reset} className="btn btn-reset">
          Reset
        </button>
        <button onClick={increment} className="btn btn-increment">
          Increment
        </button>
      </div>
    </div>
  )
}

export default App
