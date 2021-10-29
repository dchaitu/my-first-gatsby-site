import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = (props) => {
    const { data } = props


    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>My blog post contents will go here (eventually).</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>

            <p>Posted: {data.mdx.frontmatter.date}</p>
        </Layout>
    )
}

export const query = graphql`

query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }

`


export default BlogPost