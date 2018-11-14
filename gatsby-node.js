exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type == 'Json') {
    let parent = getNode(node.parent);
    node.actualPath = parent.relativePath;
    node.repoName = parent.relativeDirectory;
  }
};
