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

function MainContent() {
  return (
    <main style={{ textAlign: 'center', marginBottom: '2rem' }}>
      Ici, nous afficherons des informations interessantes :)
    </main>
  )
}

function Footer() {
  return (
    <footer style={{ textAlign: 'center', marginTop: '2rem', position: 'fixed', bottom: 0, width: '100%', padding: '1rem', background: '#f0f0f0' }}>
      Tous droits réservés - Ouafaa Chafiq
    </footer>
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
