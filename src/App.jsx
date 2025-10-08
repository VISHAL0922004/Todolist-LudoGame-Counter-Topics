import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todolist from './todolist'
import LikeButton from './LikeButton'
import LudoBoard from './LudoBoard' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Content</h1>

      
      <LikeButton />
      <LudoBoard />
      <Todolist />
    </>
  )
}

export default App
