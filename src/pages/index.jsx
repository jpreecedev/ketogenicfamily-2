import * as React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../layout'
import SEO from '../components/SEO'
import Masonry from '../components/Masonry'
import Jumbotron from '../components/Jumbotron'
import config from '../../data/SiteConfig'

function Index({ data }) {
  const cards = data.allOverviewJson.edges.map(edge => edge.node)
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Jumbotron
        title="Ketogenic Family"
        lead="Free recipes suitable for the modern ketogenic family"
      />
      <div className="container">
        <h2 className="display-2">Latest recipes</h2>
        <Masonry cards={cards} />
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allOverviewJson(limit: 2000, sort: { fields: [lastUpdated], order: DESC }) {
      edges {
        node {
          url
          key
          imgSrc
          imgAlt
          title
          description
          rating
          lastUpdated
          id
        }
      }
    }
  }
`
