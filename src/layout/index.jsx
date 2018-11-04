import * as React from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'

import '../styles/bootstrap.scss'
import '../styles/app.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({ children }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
