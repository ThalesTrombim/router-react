import './App.css'
import { Route, Routes, Link, NavLink } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { Profile } from './pages/Profile'
import { Settings } from './pages/Settings'
import { TaskDetails } from './pages/TaskDetails'
import { NotFound } from './pages/NotFound'

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
          <li><Link to={"/dashboard"}>dashboard</Link></li>

           
        </ul>

        <div>
          <h2>Tarefas</h2>
          <Link to="/tasks/1">Tarefa 1</Link>
          <Link to="/tasks/2">Tarefa 2</Link>
          <Link to="/tasks/3">Tarefa 3</Link>
        </div>
        
        <div>
          <h2>Itens</h2>
          <Link to="/items/1">Item 1</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path='/tasks/:taskId' element={<TaskDetails />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path='profile' element={<Profile/> }/>
          <Route path='settings' element={<Settings /> }/>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
