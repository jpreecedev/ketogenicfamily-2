import * as React from 'react'
import classnames from 'classnames'

import './styles.scss'

class Ingredients extends React.Component {
  constructor(props) {
    super(props)

    const { servings } = this.props

    this.state = {
      currentNumberOfServings: servings ? servings.total : 1,
      startingNumberOfServings: servings ? servings.total : 1
    }
  }

  render() {
    const { currentNumberOfServings, startingNumberOfServings } = this.state
    const { servings, ingredients } = this.props

    return (
      <div>
        {servings &&
          servings.adjustable && (
            <React.Fragment>
              <h3 className="display-2">Servings</h3>
              <form className="form-inline">
                <label className="sr-only" htmlFor="servingUnits">
                  {servings.units}
                </label>
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                  <input
                    type="number"
                    className="form-control"
                    id="servingUnits"
                    min="1"
                    max="30"
                    onChange={event =>
                      this.setState({ currentNumberOfServings: event.target.value })
                    }
                    value={currentNumberOfServings}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">{servings.units}</span>
                  </div>
                </div>
              </form>
            </React.Fragment>
          )}
        {
          <ul className="bullets--hidden">
            {ingredients.map((ingredient, index) => (
              <li key={ingredient.key}>
                {ingredient.groupTitle ? (
                  <React.Fragment>
                    <h3 className={classnames('display-2', { 'mt-4': index > 0 })}>
                      {ingredient.groupTitle}
                    </h3>
                    <ul className="bullets--hidden mt-1">
                      {ingredient.ingredients.map(groupIngredient => (
                        <li key={groupIngredient.key}>
                          {(groupIngredient.quantity / startingNumberOfServings) *
                            currentNumberOfServings}
                          {groupIngredient.units === 'g'
                            ? 'g'
                            : ` ${groupIngredient.units}`}
                          {' '}
                          {groupIngredient.description}
                        </li>
                      ))}
                    </ul>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {(ingredient.quantity / startingNumberOfServings) *
                      currentNumberOfServings}
                    {ingredient.units === 'g' ? 'g' : ` ${ingredient.units}`}
                    {' '}
                    {ingredient.description}
                  </React.Fragment>
                )}
              </li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

export default Ingredients
