import './App.css'
import { Route, Routes, Link, NavLink } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to={"/"}>Inicio</Link></li>
          <li><Link to={"/about"}>Sobre</Link></li>
          <li><Link to={"/contact"}>Contato</Link></li>
          <li>
            <NavLink 
              to={"/contact"}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contato
            </NavLink>
          </li>
          <li><Link to={"/login"}>Login</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
