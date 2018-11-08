import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"

const mapImages = (imageList) => imageList[0].filename;
export default ({data}) => {
  let images=data.images.edges.map(e=><li><Img fluid={e.node.image.childImageSharp.fluid} title={e.node.title}></Img></li>)
  return <div style={{width:"800px"}}><ul>{images}{images}{images}</ul></div>
}

export const pageQuery = graphql`
  query {
    authors:allMergedAuthorsJson {
      edges {
        node {
          name,
          author
        }
      }  	
    }
    images:allMergedImagesJson {
      edges {
        node {
          title,
          author
          image {
            childImageSharp {
              fluid(maxWidth:800) {
                ...GatsbyImageSharpFluid
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
