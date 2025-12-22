import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import emsi from './assets/emsi.png'
import data from './data.json';

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


function NoteItem({ titre, note }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem auto', width: '300px', borderRadius: '8px', background: '#f9f9f9' }}>
      <h3>{titre}</h3>
      <p>Note : {note}</p>
    </div>
  );
}



function Menu() {
  const items = ["Notes", "Etudiants", "Matières", "A propos"];

  const handleClick = (item) => {
    alert(`Vous avez cliqué sur : ${item}`);
  }

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, padding: '1rem', background: '#eee', borderRadius: '0 0 8px 0' }}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map((item) => (
          <li key={item} style={{ margin: '0.5rem 0', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => handleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}


function App() {
  const [randomNote, setRandomNote] = useState(getRandomItem(data));

  const handleNewNote = () => {
    setRandomNote(getRandomItem(data));
  }

  return (
    <>
      <Menu />
      <Header />
      <MainContent />

      <NoteItem titre={randomNote.titre} note={randomNote.note} />

      <button onClick={handleNewNote} style={{ display: 'block', margin: '1rem auto' }}>
        Nouvelle note aléatoire
      </button>

      <Footer />
    </>
  )
}

export default App
