import * as React from 'react'
import classnames from 'classnames'

import './styles.scss'

function Jumbotron({ slim, title, lead }) {
  const classes = classnames(
    {
      slim
    },
    'jumbotron'
  )
  return (
    <section className={classes}>
      <div className="container">
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </div>
    </section>
  )
}

export default Jumbotron
