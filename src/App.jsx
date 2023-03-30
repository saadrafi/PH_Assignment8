import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='lg:w-[80%] mx-auto'>
        <Header />
    </div>
  )
}

export default App
