import * as React from 'react'
import './styles.scss'

class StarRating extends React.Component {
  constructor(props) {
    super(props)

    const { rating } = props
    this.state = {
      rating: rating || null
    }
  }

  rate(rating) {
    this.setState({
      rating
    })
  }

  render() {
    const { rating } = this.state
    const stars = []

    for (let i = 0; i < 5; i++) {
      let klass = 'star-rating__star'

      if (i < rating) {
        klass += ' is-selected'
      }

      stars.push(
        <span key={i} className={klass}>
          ★
        </span>
      )
    }

    return <div className="star-rating">{stars}</div>
  }
}

export default StarRating
