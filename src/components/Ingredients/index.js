import * as React from 'react'

class Ingredients extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentNumberOfServings: props.servings ? props.servings.total : 1,
      startingNumberOfServings: props.servings ? props.servings.total : 1,
    }
  }

  render() {
    const { servings, ingredients } = this.props
    const { currentNumberOfServings, startingNumberOfServings } = this.state

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
                    value={currentNumberOfServings}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">{servings.units}</span>
                  </div>
                </div>
              </form>
            </React.Fragment>
          )}
        <ul className="bullets--hidden">
          {ingredients.map((ingredient, index) => (
            <li key={ingredient}>
              {ingredient.groupTitle ? (
                <React.Fragment>
                  <h3 className={`display-2 ${index > 0 ? 'mt-4' : ''}`}>
                    {ingredient.groupTitle}
                  </h3>
                  <ul className="bullets--hidden mt-1">
                    {ingredient.ingredients.map(groupIngredient => (
                      <li key={groupIngredient}>
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
      </div>
    )
  }
}

export default Ingredients
