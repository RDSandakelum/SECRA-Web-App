import { useState } from 'react'
import RegistrationForm from './Components/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegistrationForm/>
    </>
  )
}

export default App
