import * as React from 'react'

import './styles.scss'
import Card from '../Card'

function Lead({ data }) {
  return (
    <div className="row">
      {data.map(
        card =>
          card && (
            <div className="col-xs-12 col-md-4" key={card.key}>
              <Card recipe={card} />
            </div>
          )
      )}
    </div>
  )
}

export default Lead
