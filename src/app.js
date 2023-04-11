const express = require("express");
const path = require("path");

const app = express();

const postsRoutes = require("./routes/posts.route");
const tagsRoutes = require("./routes/tags.route");

const url = path.resolve(__dirname, "../public");
app.use(express.static(url));

app.use("/posts", express.static(url));
app.use("/posts/:id", express.static(url));
app.use("/tags/:id", express.static(url));
app.use("/requirements", express.static(url));

app.use("/api/posts", postsRoutes);
app.use("/api/tags", tagsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
