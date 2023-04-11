const { getPostsByTagName } = require("../repositories/posts.repository");

exports.getPostsByTagName = function (req, res) {
  const tagName = req.params.name;
  const taggedPosts = getPostsByTagName(tagName);

  if (taggedPosts.length === 0) {
    res.status(400).json({ message: `No posts found for tag ${tagName}` });
  } else {
    res.json({ data: taggedPosts });
  }
};
