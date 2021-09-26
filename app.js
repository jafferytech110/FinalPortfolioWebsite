const express = require("express");
const router = require("./router");

// using app as name for my application
const app = express();

//for server hosting
let port = process.env.PORT;
if (port == null || "") {
  port = 3000;
}

//adding user submitted data onto our request object so that we can access with req.body
app.use(express.urlencoded({ extended: false }));

//json way of submitting data
app.use(express.json());

//telling app to check browser end files in public folder
app.use(express.static("public"));

//setting views configuration to view in views folder for page rendering
app.set("views", "views");

//setting ejs environment for ejs file tempalates
app.set("view engine", "ejs");

app.use("/", router);

//listening on port 3000
app.listen(port);
