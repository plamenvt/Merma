/* globals __dirname */

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");


const app = require("./app/app").application();
const { port } = require("./app/config");
// const data = require("./data");

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use(morgan("combined"));

const libsPath = path.join(__dirname, '../node_modules');
app.use('/node_modules', express.static(libsPath));
const staticPath = path.join(__dirname, './public');
app.use('/public', express.static(staticPath));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require("./app/auth")(app, data);

app.get("/api/ping", (req, res) => res.send(true));

app.get("/", (req, res) => res.render("home"));

// app.use("/api/questions", require("./app/routers/books.router")(data));
// app.use("/api/auth", require("./app/routers/auth.router")(data));

const server = app.listen(port, () => {
  const address = server.address().address;
  console.log(`App started at ${address}:${port}`);
});
