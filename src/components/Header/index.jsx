import * as React from 'react'
import { Link } from 'gatsby'

import './styles.scss'

function Header() {
  return (
    <header className="fixed-top">
      <nav className="container navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo">
            <img src="/img/ketogenicfamily.jpg" alt="Ketogenic Family" />
          </div>
          <div className="navbar-title">
            <h1>Ketogenic Family</h1>
            <p className="lead">Our ketogenic lifestyle learnings</p>
          </div>
        </Link>
      </nav>
    </header>
  )
}

export default Header
