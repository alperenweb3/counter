import useCounter from './hooks/useCounter'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Dont forget to use {} instead of [] in custom hooks
  const {count, increment, decrement} = useCounter()
  const isMultipleOfTen = count !== 0 && count % 10 === 0;


  return (
    <>
      <h1>Counter with Custom Hook</h1>
      {isMultipleOfTen ? (
        <div>
          <h2>Woow, Congratulations!!!</h2>
          <p>Counter is {count} multiple of 10</p>
        </div>
      ): count === 0 ? (
        <p>Counter is 0. You cannot decrease anymore.</p>
      ) : (
        <p>Counter is {count}</p>
      )}
      <div className="card">
        <button onClick={increment}>
          increase
        </button>
        <button onClick={decrement}>
          decrease
        </button>
      </div>
    </>
  )
}

export default App
