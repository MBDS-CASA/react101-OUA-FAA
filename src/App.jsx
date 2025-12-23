import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import emsi from './assets/emsi.png'
import data from './data/data.json';
import Notes from './components/Notes';
import Etudiants from './components/Etudiants';
import Matieres from './components/Matieres';
import Apropos from './components/Apropos';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css"; // contient les classes fade-*

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


function getRandomItem(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}


function NoteItem({ note }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      margin: '1rem auto',
      width: '300px',
      borderRadius: '8px',
      background: '#f9f9f9'
    }}>
      <h3>{note.titre}</h3>
      <p>Note : {note.note}</p>
      {/* Affiche les autres champs dynamiquement */}
      {note.nomEtudiant && <p>Étudiant : {note.nomEtudiant}</p>}
      {note.matiere && <p>Matière : {note.matiere}</p>}
      {note.id && <p>ID : {note.id}</p>}
    </div>
  );
}




function Menu({ activeMenu, setActiveMenu }) {
  const items = ["Notes", "Etudiants", "Matières", "A propos"];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '180px',
      height: '100vh',
      background: '#2c3e50',
      color: '#fff',
      padding: '1rem'
    }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => setActiveMenu(item)}
            style={{
              padding: '0.75rem',
              marginBottom: '0.5rem',
              cursor: 'pointer',
              borderRadius: '6px',
              background: activeMenu === item ? '#1abc9c' : 'transparent',
              fontWeight: activeMenu === item ? 'bold' : 'normal'
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}



function Content({ activeMenu }) {
  let Component;
  switch (activeMenu) {
    case "Notes":
      Component = Notes;
      break;
    case "Etudiants":
      Component = Etudiants;
      break;
    case "Matières":
      Component = Matieres;
      break;
    case "A propos":
      Component = Apropos;
      break;
    default:
      return null;
  }

return <div key={activeMenu}><Component /></div>;
}








function App() {
  const [activeMenu, setActiveMenu] = useState("Notes");

  return (
    <>
      <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      <div style={{
        marginLeft: '200px',
        padding: '2rem',
        maxWidth: '800px',
      }} >
        <Header />
        <MainContent />

        <Content activeMenu={activeMenu} />

        <Footer />
      </div>
    </>
  );
}
export default App

