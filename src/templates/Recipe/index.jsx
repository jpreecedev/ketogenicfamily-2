import * as React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import config from '../../../data/SiteConfig'
import Layout from '../../layout'
import Disqus from '../../components/Disqus'
import SEO from '../../components/SEO'
import Recipe from '../../components/Recipe'

import './styles.scss'

function PostTemplate({ data: { recipesJson } }) {
  const recipe = recipesJson

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${recipe.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO />
        <div>
          <h1>{recipe.title}</h1>
          <Recipe recipe={recipe} />
          <Disqus url={recipe.url} title={recipe.title} />
        </div>
      </div>
    </Layout>
  )
}

export default PostTemplate

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
      }
      instructions
      related
    }
  }
`