const {
  getCommentsByPostId: getCommentByPostId,
} = require("../repositories/comments.repository");
const {
  getAllPosts,
  getPostById,
} = require("../repositories/posts.repository");

exports.getAllPosts = function (req, res) {
  const posts = getAllPosts();

  res.json({ data: posts });
};

exports.getPostById = function (req, res) {
  const postId = parseInt(req.params.id);
  console.log(postId);
  const post = getPostById(postId);
  console.log("Post", post);
  if (!post) {
    res.status(400).json({ message: `Post with ID ${postId} not found` });
  } else {
    res.json({ data: post });
  }
};

exports.getCommentsByPostId = function (req, res) {
  const postId = parseInt(req.params.id);
  const postComments = getCommentByPostId(postId);

  res.json({ data: postComments });
};
