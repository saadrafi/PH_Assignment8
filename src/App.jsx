import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='lg:w-[85%] mx-auto'>
        <Header />
        <Blogs></Blogs>
    </div>
  )
}

export default App
