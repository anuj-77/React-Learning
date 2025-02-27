import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/form'

function App() {
  const [count, setCount] = useState(0)

  // let channel = "Rahul Mewatiyaan";
  let myObj ={
    name : "Nitish Rana",
    age: 21
  }
  

  return (
    <>
      <h1 className='bg-blue-400 text-black p-4 rounded-4xl' >Tailwind Test</h1>
      <Card channel = "ANuj" myObj={myObj} btnClickMe ="Click Me" btnVisitMe = "Visit Me"></Card>
    </>
  )
}

export default App
 