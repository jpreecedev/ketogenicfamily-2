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
        <button
          className="navbar-toggler mr-1"
          type="button"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    </header>
  )
}

export default Header
