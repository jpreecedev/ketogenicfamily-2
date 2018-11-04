import * as React from 'react'
import './styles.scss'

const macros = {
  fat: 70,
  protein: 50,
  saturatedFat: 24,
  carbohydrates: 310,
  sugars: 90,
  salt: 2.3,
  fibre: 30
}

class Nutrition extends React.Component {
  getTotal(prop) {
    const { nutritionalData } = this.props
    let result = 0
    nutritionalData.forEach(item => {
      result += item[prop] || 0
    })
    return result
  }

  totalCalories() {
    return this.getTotal('kcal')
  }

  caloriesFromFat() {
    return this.getTotal('fat') * 9
  }

  totalFat() {
    return this.getTotal('fat')
  }

  totalSaturatedFat() {
    return this.getTotal('saturates')
  }

  totalCarbohydrate() {
    return this.getTotal('carbohydrate')
  }

  totalSugar() {
    return this.getTotal('sugars')
  }

  totalFibre() {
    return this.getTotal('fibre')
  }

  totalProtein() {
    return this.getTotal('protein')
  }

  totalSalt() {
    return this.getTotal('salt')
  }

  render() {
    const { title, units } = this.props

    return (
      <section className="performance-facts mt-3" id="nutrition">
        <header className="performance-facts__header">
          <h1 className="performance-facts__title">Nutrition Facts</h1>
          <p>{title}</p>
        </header>
        <table className="performance-facts__table">
          <thead>
            <tr>
              <th colSpan="3" className="small-info">
                Amount per 1
                {' '}
                {units}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="2">
                <b>Calories</b>
                {this.totalCalories()}
              </th>
              <td>
                Calories from Fat
                {this.caloriesFromFat()}
              </td>
            </tr>
            <tr className="thick-row">
              <td colSpan="3" className="small-info">
                <b>% Daily Value*</b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Total Fat</b>
                {this.totalFat()}
g
              </th>
              <td>
                <b>
                  {(100 / macros.fat) * this.totalFat()}
%
                </b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell" />
              <th>
                Saturated Fat
                {this.totalSaturatedFat()}
g
              </th>
              <td>
                <b>
                  {(100 / macros.saturatedFat) * this.totalSaturatedFat()}
%
                </b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Total Carbohydrate</b>
                {this.totalCarbohydrate()}
g
              </th>
              <td>
                <b>
                  {(100 / macros.carbohydrates) * this.totalCarbohydrate()}
%
                </b>
              </td>
            </tr>
            <tr>
              <td className="blank-cell" />
              <th>
                Dietary Fiber
                {this.totalFibre()}
g
              </th>
              <td />
            </tr>
            <tr>
              <td className="blank-cell" />
              <th>
                Sugars
                {this.totalSugar()}
g
              </th>
              <td />
            </tr>
            <tr>
              <th colSpan="2">
                <b>Protein</b>
                {this.totalProtein()}
g
              </th>
              <td>
                <b>
                  {(100 / macros.protein) * this.totalProtein()}
%
                </b>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <b>Salt</b>
                {this.totalSalt()}
g
              </th>
              <td>
                <b>
                  {(100 / macros.salt) * this.totalSalt()}
%
                </b>
              </td>
            </tr>
          </tbody>
        </table>

        <p className="small-info">
          * Percent Daily Values are based on a 2,000 calorie intake.
        </p>
      </section>
    )
  }
}

export default Nutrition
