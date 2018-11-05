exports.onCreateNode = ({ node, getNode }) => {
	if (node.internal.type == "Json") {
    let parent = getNode(node.parent);
    node.actualPath = parent.relativePath;
    node.repoName = parent.relativeDirectory;
  }
}

// exports.createPages = ({graphql,actions}) => {
//   const {createPage} = actions;
//   return new Promise((resolve,reject)=> {
//     console.log("am I here?");
//     graphql(`{
//       imagesJson:allJson(filter: {actualPath: {regex: "/images.json$/"}}) {
//         edges {
//           node {
//             repoName
//             images {
//               filename
//             }
//           }
//         }
//       }  
//     }`).then(result=>{
//       console.log(JSON.stringify(result));
//       resolve();
//     })
//   })
// }