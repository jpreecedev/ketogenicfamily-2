import * as React from 'react'

function Jumbotron({ title, slim, lead }) {
  return (
    <section className={`jumbotron ${slim ? 'slim' : ''}`}>
      <div className="container">
        <h1>{{ title }}</h1>
        {lead && <p>{{ lead }}</p>}
      </div>
    </section>
  )
}

export default Jumbotron
