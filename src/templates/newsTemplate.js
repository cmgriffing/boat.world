import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { title, date } = frontmatter
  return (
    <Layout>
      <SEO title={title} />
      <div>
        <h1>{title}</h1>
        <h2>{date}</h2>
      </div>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
