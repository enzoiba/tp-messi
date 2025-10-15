import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
      <nav >
        <Link href="/" className="nav-link">Inicio</Link>
        <Link href="/caracteristicas" className="nav-link">Características</Link>
        <Link href="/historia" className="nav-link">Historia</Link>
        <Link href="/logros" className="nav-link">Logros</Link>
      </nav>
  )
}

export default Nav
