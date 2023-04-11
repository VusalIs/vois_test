const express = require("express");
const router = express.Router();

const tagsController = require("../controllers/tags.controller");

router.get("/:name", tagsController.getPostsByTagName);

module.exports = router;
