exports.getAllPosts = function () {
  return posts;
};

exports.getPostById = function (id) {
  return posts.find((post) => post.id === id);
};
exports.getPostsByTagName = function (name) {
  return posts.filter((post) => post.tags.includes(name));
};

const posts = [
  {
    id: 1,
    title: "Post 1",
    headline: "Post 1 headline",
    body: "Post 1 body",
    created_at: "2023-02-11",
    tags: ["Sports"],
  },
  {
    id: 2,
    title: "Post 2",
    headline: "Post 2 headline",
    body: "Post 2 body",
    created_at: "2023-02-10",
    tags: ["Business", "Tech"],
  },
  {
    id: 3,
    title: "Post 3",
    headline: "Post 3 headline",
    body: "Post 3 body",
    created_at: "2023-02-09",
    tags: ["Economy"],
  },
  {
    id: 4,
    title: "Post 4",
    headline: "Post 4 headline",
    body: "Post 4 body",
    created_at: "2023-02-10",
    tags: ["Economy"],
  },
];
