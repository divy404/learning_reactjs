import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppStore } from './store'

function UpdateUserForm() {
  const {username, email, setUsername, setEmail} = useAppStore();
  return <div>
    <input type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)} />
    <input type="text"
    value={email}
    onChange={(e) => setEmail(e.target.value)} >
    </input>
  </div>
}

function App() {
    const {username, email, setUsername, setEmail} = useAppStore();
   

  return (
    <>
    <div> {username} </div>
    <div> {email}</div> 
    <UpdateUserForm />
     </>
  )
}

export default App
