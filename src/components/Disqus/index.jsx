import * as React from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import urljoin from 'url-join'
import config from '../../../data/SiteConfig'

function Disqus({ url, title, identifier = title }) {
  if (!config.disqusShortname) {
    return null
  }
  return (
    <ReactDisqusComments
      shortname={config.disqusShortname}
      identifier={identifier}
      title={title}
      url={urljoin(config.siteUrl, config.pathPrefix, url)}
    />
  )
}

export default Disqus
