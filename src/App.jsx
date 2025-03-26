import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'


function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    console.log("Envio")
  }

  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App
