import * as React from 'react'
import classnames from 'classnames'

import './styles.scss'

import Disqus from '../Disqus'
import Lead from '../Lead'
import Nutrition from '../Nutrition'
import StarRating from '../StarRating'
import Social from '../Social'
import Ingredients from '../Ingredients'

function Recipe({ recipe }) {
  return (
    <div>
      <div className="recipe-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="img-container">
                <div
                  className="img-underlay"
                  style={{ backgroundImage: `url(${recipe.imgSrc})` }}
                />
                <img
                  src={recipe.imgSrc}
                  alt={recipe.title}
                  className="img-fluid img-thumbnail"
                />
              </div>
            </div>
            <div className="col-xs-12 col-md-6 d-flex justify-content-center align-items-center">
              <div>
                <h1 className="display-4 mt-4 mt-md-0">{recipe.title}</h1>
                <p className="lead mb-2">{recipe.description}</p>
                <p className="mb-2 small">
                  {recipe.prepTimeDisplay && (
                    <span className={classnames({ 'mr-3': recipe.cookTimeDisplay })}>
                      Prep time:
                      {' '}
                      {recipe.prepTimeDisplay}
                    </span>
                  )}
                  {recipe.cookTimeDisplay && (
                    <span>
                      Cook time:
                      {recipe.cookTimeDisplay}
                    </span>
                  )}
                </p>
                <div className="star-rating-container">
                  <StarRating rating={recipe.rating} />
                </div>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container body">
        <div className="row">
          <div className="col-12 col-md-4">
            <section className="mt-3" id="ingredients">
              <h2 className="display-2">Ingredients</h2>
              <Ingredients ingredients={recipe.ingredients} servings={recipe.servings} />
            </section>
            {recipe.hasNutritionalData && (
              <Nutrition
                title={recipe.title}
                units={recipe.servings.nutritionUnits}
                nutritionalData={recipe.ingredients.map(item => item.nutrition)}
              />
            )}
          </div>
          <div className="col-12 col-md-8">
            <section className="mt-5 mt-md-3" id="instructions">
              <h2 className="display-2">Instructions</h2>
              <ul className="bullets--numbered">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        {recipe.related && (
          <section className="mt-5" id="related">
            <h2 className="display-2">Related Recipes</h2>
            <Lead data={recipe.related} />
          </section>
        )}

        <section className="mt-5" id="comments">
          <h2 className="display-2">Discussion</h2>
          <Disqus identifier={recipe.key} url={recipe.key} />
        </section>
      </div>
    </div>
  )
}

export default Recipe
