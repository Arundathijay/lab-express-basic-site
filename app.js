const express = require("express");

const hbs = require("hbs");

//give the absolute path to the partials directory
hbs.registerPartials(__dirname + "/views/partials");

const app = express();

//tell express to use handlebars
app.set("view engine", "hbs");

app.set("views", __dirname + "/views");

app.use(express.static("public"));

app.get("/", (request, respone) => {
  respone.render(__dirname + "/views/Home.hbs");
});

app.get("/home", (request, respone) => {
  respone.render(__dirname + "/views/Home.hbs");
});

app.get("/about", (request, respone) => {
  respone.render(__dirname + "/views/About.hbs");
});

app.get("/adoption", (request, respone) => {
  respone.render(__dirname + "/views/adoption.hbs");
});

app.listen(3020);
