import { useState } from 'react'
import StudentForm from './components/StudentForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentForm />
    </>
  )
}

export default App;
