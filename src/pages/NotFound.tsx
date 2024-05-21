import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Página não encontrada</p>
      <Link to="/">Voltar para home</Link>
    </div>
  )
}