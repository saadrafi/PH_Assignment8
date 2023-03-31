import { useState } from 'react'
import './App.css'
import Blog from './components/Blogs/Blog'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='lg:w-[80%] mx-auto'>
        <Header />
        <Blog></Blog>
    </div>
  )
}

export default App
