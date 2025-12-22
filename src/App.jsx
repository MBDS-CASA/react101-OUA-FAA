import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import emsi from './assets/emsi.png'


function Header() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <img 
        src={emsi} 
        alt="Logo Formation" 
        style={{ width: '200px', height: 'auto' }}
      />
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </div>
  )
}



  function Content() {
   const [count, setCount] = useState(0)

   return (

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      ) 
      }

      function App() {
       return ( 
       <> 
       <Header />

  
      <Content />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
