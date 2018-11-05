import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"

const mapImages = (imageList) => imageList[0].filename;
export default ({data}) => {
  let list = data.imagesJson.edges.map(e=><Img src={"/images/" + e.node.repoName +"/"+ mapImages(e.node.images)}></img>);
  return <ul>{foo}</ul>
}

export const pageQuery = graphql`{
  allFile(filter:{sourceInstanceName: {eq: "images"}}) {
    edges {
      node {
        name
      }
    }
  }

  imagesJson:allJson(filter: {actualPath: {regex: "/images.json$/"}}) {
    edges {
      node {
        repoName
        images {
          filename
        }
      }
    }
  }  
}`