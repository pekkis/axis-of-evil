import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" keywords={[`dictator`, `evil`, `pekkis`]} />
      <h1>Axis of Evil!</h1>

      <div>
        {data.allPosts.edges.map(edge => {
          const { node } = edge
          return (
            <div key={node.id}>
              <h2>{node.name}</h2>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allPosts {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`
