import React from "react"
import { graphql } from "gatsby"

const Page2 = ({ data }) => {
 
  return (
    <article>
      <h2>Page 2</h2>
      <section dangerouslySetInnerHTML={{__html:data.wpPage.content}} />
    </article>
  )
}


export default Page2

export const query = graphql`
query Page2Query {
  wpPage(databaseId: {eq: 13}) {
    content
  }
}
`