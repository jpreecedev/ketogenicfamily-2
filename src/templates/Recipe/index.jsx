import * as React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import config from '../../../data/SiteConfig'
import Layout from '../../layout'
import Disqus from '../../components/Disqus'
import SEO from '../../components/SEO'
import Recipe from '../../components/Recipe'

import './styles.scss'

function getRecipeIngredients(recipe) {
  return recipe.ingredients.map(ingredient => {
    let result = `"${ingredient.quantity} ${ingredient.units} ${ingredient.description}"`
    if (ingredient.groupTitle) {
      result = ingredient.ingredients.map(
        groupedIngredient =>
          `"${groupedIngredient.quantity} ${groupedIngredient.units} ${
            groupedIngredient.description
          }"`
      )
      result
        .toString()
        .trim()
        .replace(/(^,)|(,$)/g, '')
    }
    return result
  })
}
function getRecipeInstructions(recipe) {
  const result = []
  recipe.instructions.forEach((instruction, index) => {
    result.push(`${index + 1}. ${instruction}`)
  })
  return result.join('\n')
}
function getNutrition(recipe) {
  if (!recipe.hasNutritionalData) {
    return ''
  }

  return `"nutrition": {
      "@type": "NutritionInformation",
      "servingSize": "1 ${recipe.servings.nutritionUnits}",
      "calories": "${
        recipe.nutrition.kcal ? recipe.nutrition.kcal.toFixed(0) : 0
      } calories",
      "fatContent": "${recipe.nutrition.fat ? recipe.nutrition.fat.toFixed(0) : 0} g",
      "carbohydrateContent": "${
        recipe.nutrition.carbohydrate ? recipe.nutrition.carbohydrate.toFixed(0) : 0
      } g",
      "fiberContent": "${
        recipe.nutrition.fibre ? recipe.nutrition.fibre.toFixed(0) : 0
      } g",
      "proteinContent": "${
        recipe.nutrition.protein ? recipe.nutrition.protein.toFixed(0) : 0
      } g",
      "saturatedFatContent": "${
        recipe.nutrition.saturates ? recipe.nutrition.saturates.toFixed(0) : 0
      } g",
      "sodiumContent": "${
        recipe.nutrition.salt ? recipe.nutrition.salt.toFixed(2) : 0
      } g",
      "sugarContent": "${
        recipe.nutrition.sugars ? recipe.nutrition.sugars.toFixed(0) : 0
      } g"
    },`
}

function getRecipeStructuredData(recipe) {
  return `{
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "name": "${recipe.title}",
    "image": ["https://ketogenicfamily.com${recipe.imgSrc}"],
    "author": {
      "@type": "Person",
      "name": "${recipe.author}"
    },
    "datePublished": "${recipe.published}",
    "description": "${recipe.description}",
    "recipeIngredient": [${getRecipeIngredients(recipe)}],
    "recipeInstructions": "${getRecipeInstructions(recipe)}",
    "recipeYield": "${recipe.servings.total}",
    ${getNutrition(recipe)}
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "${recipe.rating}",
      "ratingCount": "1"
    },
    "cookTime": "${recipe.cookTime ? recipe.cookTime : ''}",
    "prepTime": "${recipe.prepTime}"
  }`
}

function RecipeTemplate({ pageContext: { next, previous }, data: { recipesJson } }) {
  const recipe = recipesJson
  recipe.next = next
  recipe.previous = previous
  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${recipe.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO />
        <div>
          <Recipe recipe={recipe} />
          <Disqus url={recipe.url} title={recipe.title} />
          <script
            hid="recipe-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: getRecipeStructuredData(recipe) }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default RecipeTemplate

export const pageQuery = graphql`
  query RecipeBySlug($url: String!) {
    recipesJson(url: { eq: $url }) {
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
        ingredients {
          key
          quantity
          units
          description
        }
      }
      instructions
    }
  }
`
