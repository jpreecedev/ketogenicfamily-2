const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postPage = path.resolve('src/templates/Recipe/index.jsx')
    resolve(
      graphql(
        `
          {
            allRecipesJson {
              edges {
                node {
                  id
                  key
                  url
                  imgSrc
                  title
                  author
                  published
                  prepTimeDisplay
                  prepTime
                  cookTimeDisplay
                  cookTime
                  description
                  rating
                  servings {
                    total
                    units
                    showNutritionalLabel
                    adjustable
                    nutritionUnits
                  }
                  ingredients {
                    key
                    quantity
                    units
                    description
                    groupTitle
                  }
                  instructions
                  related
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allRecipesJson.edges.forEach(edge => {
          createPage({
            path: edge.node.url,
            component: postPage,
            context: {
              url: edge.node.url
            }
          })
        })
      })
    )
  })
}
