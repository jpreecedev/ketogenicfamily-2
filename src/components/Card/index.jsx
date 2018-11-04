import * as React from 'react'
import { Link } from 'gatsby'

import StarRating from '../StarRating'
import './styles.scss'

function Card({ recipe }) {
  /* eslint-disable */
  debugger
  return (
    <div className="card mb-3" role="button">
      <Link to={recipe.url}>
        <img src={recipe.imgSrc} alt={recipe.imgAlt} className="card-img-top img-fluid" />
        <div className="card-body">
          <h4 className="card-title">{recipe.title}</h4>
          <p className="card-text">{recipe.text}</p>
          <StarRating rating={recipe.rating} />

          <p className="card-text">
            <small className="text-muted">{recipe.lastUpdated}</small>
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Card
