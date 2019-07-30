import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ReactMarkdown from "react-markdown"

const ArticleTemplate = ({data}) => (
    <Layout>
        <h1>XXXXXXX</h1>
        <p>by <Link to={`/authors/User_${data.strapiArticle.authora.id}`}>{data.strapiArticle.authora.username}</Link>
        </p>
        <Img fluid={data.strapiArticle.image.childImageSharp.fluid}/>
            <h1>testttttt</h1>
            <ReactMarkdown source={data.strapiArticle.content} />

    </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      content
      image {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      authora {
        id
        username
      }
    }
  }
`