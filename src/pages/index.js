import React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
 
  return (
    <article>
      <h2>Page 1</h2>
      <section dangerouslySetInnerHTML={{__html:data.wpPage.content}} />
    </article>
  )
}


export default IndexPage

export const query = graphql`
query Page1Query {
  wpPage(databaseId: {eq: 9}) {
    content
  }
}
`