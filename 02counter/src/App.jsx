import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  // let counter = 15

  const addValue = () => {
    setCounter(counter+1)
    
  }

  const removeValue = () => {
    
    setCounter(counter-1)
  }
  

  return (
    <>
    <h1>react course with hitesh sir {counter}</h1>
    <h2>counter value : {counter} </h2>
    <button
      onClick={addValue} >Add value</button> {" "}
    <button
    onClick={removeValue}>remove value</button> 
    <p>footer: {counter} </p>
    </>
  )
}

export default App
