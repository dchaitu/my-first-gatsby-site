import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = (props) => {
    const { data } = props


    return (
        <Layout pageTitle="My Blog Posts">
            <p>My cool posts will go in here</p>
            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            {/* <MDXRenderer>
                                {node.body}
                            </MDXRenderer> */}

                            <p>Posted: {node.frontmatter.date}</p>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

// export const query = graphql`
//   query {
//     allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
//       nodes {
//         name
//       }
//     }
//   }
// `
export const query = graphql`
query  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
            }
            id
            slug
            body
        }
    }
}
`


export default BlogPage