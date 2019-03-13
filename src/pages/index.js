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

      <div>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role:{" "}
              <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
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
