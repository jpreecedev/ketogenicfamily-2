import * as React from 'react'
import './styles.scss'

import Card from '../Card'

function Masonry({ cards }) {
  return (
    <div className="card-columns">
      {cards.map(card => (
        <Card key={card.key} recipe={card} />
      ))}
    </div>
  )
}

export default Masonry
