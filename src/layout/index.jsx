import React from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'

import '../styles/bootstrap.scss'
import '../styles/app.scss'

function MainLayout({ children }) {
  return (
    <div>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>
      {children}
    </div>
  )
}

export default MainLayout
