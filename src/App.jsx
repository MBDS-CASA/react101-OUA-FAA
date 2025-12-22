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
  const now = new Date();

  const jour = now.getDate();
  const mois = now.getMonth() + 1;
  const annee = now.getFullYear();
  const heure = now.getHours();
  const minute = now.getMinutes();
  const seconde = now.getSeconds();

  return (
    <main style={{ textAlign: 'center', marginBottom: '2rem' }}>
      Bonjour, on est le {jour}/{mois}/{annee} et il est {heure}:{minute}:{seconde}
    </main>
  )
}

function Footer() {
  const annee = new Date().getFullYear();
  return (
    <footer style={{ textAlign: 'center', marginTop: '2rem', position: 'fixed', bottom: 0, width: '100%', padding: '1rem', background: '#f0f0f0' }}>
      © {annee} - Ouafaa.Chafiq, Tous droits réservés.
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
