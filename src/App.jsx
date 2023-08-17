import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increament = () => {
    setCount(count + 1) ;
  }

  const decreament = () => {
    if(!count == 0 || count > 0){
      setCount(count - 1) ;
    }
  }

  return (
    <>
      <h1>Counter</h1>
      <p>Counter is {count}</p>
      <div className="card">
        <button onClick={increament}>
          increase
        </button>
        <button onClick={decreament}>
          decrease
        </button>
      </div>
    </>
  )
}

export default App
