import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
          <li key={node.frontmatter.seo}>
            <Link to={node.frontmatter.slug}>
            {node.frontmatter.title}
            </Link>
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            seo
            slug
            title
          }
        }
      }
    }
  }
`

export default BlogPage