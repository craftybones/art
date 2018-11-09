import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"

export default ({data}) => {
  let images=data.images.edges.map(e=><div>
    <p>{e.node.author.name}</p>
    <Img fluid={e.node.image.childImageSharp.fluid} title={e.node.title}></Img>
    </div>)
  return <div style={{width:"800px"}}><ul>{images}{images}{images}</ul></div>
}

export const pageQuery = graphql`
  query {
    images:allMergedImagesJson {
      edges {
        node {
          title,
          author {
            name
          }
          image {
            childImageSharp {
              fluid(maxWidth:800, traceSVG: {blackOnWhite:false}) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
              original {
                src
              }
            }
          }
        }
      }
    }  
  }
`;
