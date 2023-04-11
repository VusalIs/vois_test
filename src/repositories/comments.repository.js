const comments = [
  {
    post_id: 1,
    id: 1,
    created_at: "2023-02-13",
    author: "Test User A",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    post_id: 1,
    id: 2,
    created_at: "2023-02-12",
    author: "Test User B",
    body: "Etiam tincidunt fermentum felis, quis luctus lectus suscipit nec.",
  },
];

exports.getCommentsByPostId = function (postId) {
  return comments.filter((comment) => comment.post_id === postId);
};
