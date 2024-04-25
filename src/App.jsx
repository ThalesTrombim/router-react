import './App.css'
import { Route, Routes, Link } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to={"/"}>Inicio</Link></li>
          <li><Link to={"/about"}>Sobre</Link></li>
          <li><Link to={"/contact"}>Contato</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
