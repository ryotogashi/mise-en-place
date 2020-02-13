const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(`${__dirname}/dist`));
app.use(express.static(`${__dirname}/storybook-static`));

app.get("/", (_, res) => res.sendFile(path.resolve(__dirname, "dist/index.html")));

app.get("/story", (_, res) => res.sendFile(path.resolve(__dirname, "storybook-static/index.html")));

app.listen(port);
