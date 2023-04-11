const express = require("express");
const router = express.Router();

const postsController = require("../controllers/posts.controller");

router.get("/", postsController.getAllPosts);
router.get("/:id", postsController.getPostById);
router.get("/:id/comments", postsController.getCommentsByPostId);

module.exports = router;
