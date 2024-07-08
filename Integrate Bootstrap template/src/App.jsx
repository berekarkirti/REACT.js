import { useState } from 'react'
import './App.css'
import Template from './components/Template'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Template />
    </>
  )
}

export default App;
