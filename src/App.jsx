import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Heading } from './components/heading'
import { Footer } from './components/footer'
import Content from './components/content'
import { people } from './data/people'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Heading />
        <Content people={people}/>
        <Footer isShowName={true} />
      </div>
    </>
  )
}

export default App
