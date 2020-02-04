/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
  >
         {/* Primary Meta Tags */}
        <title>Bot Land - free automated strategy game</title>
        <meta name="title" content="Bot Land - free automated strategy game"/>
        <meta name="description" content="Bot Land is an automated strategy game. Create bots, write scripts, and battle other players! Try it today for free on your computer or mobile device!"/>

         {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://bot.land/"/>
        <meta property="og:title" content="Bot Land - free automated strategy game"/>
        <meta property="og:description" content="Bot Land is an automated strategy game. Create bots, write scripts, and battle other players! Try it today for free on your computer or mobile device!"/>
        <meta property="og:image" content="https://bot.land/dist/open_graph.png"/>

         {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://bot.land/"/>
        <meta property="twitter:title" content="Bot Land - free automated strategy game"/>
        <meta property="twitter:description" content="Bot Land is an automated strategy game. Create bots, write scripts, and battle other players! Try it today for free on your computer or mobile device!"/>
        <meta property="twitter:image" content="https://bot.land/dist/open_graph.png"/>

  </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
