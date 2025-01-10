import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseForm from './components/courseForm'
import CourseList from './components/CourseList'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='main-container'>
      <h1 style={{
        fontSize: "2.5rem",
        marginBottom: "2rem"
      }}> My Course list </h1>
      <CourseForm /> 
      <CourseList />
      


    </div>
    
  )
}

export default App
