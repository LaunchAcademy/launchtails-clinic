const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const hbsMiddleware = require("express-handlebars");
const fs = require("fs");
const _ = require("lodash");
const express = require("express");

const app = express();

// You should not need to change the code in this file

app.set("views", path.join(__dirname, "../views"));
app.engine(
  "hbs",
  hbsMiddleware({
    defaultLayout: "default",
    extname: ".hbs"
  })
);

app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET ARTICLES FROM DRINKS.JSON
const drinksPath = path.join(__dirname, "../data/drinks.json");

const getDrinks = () => {
  return JSON.parse(fs.readFileSync(drinksPath).toString());
};

const newDrinkId = () => {
  const drinks = getDrinks();
  const maxDrink = _.maxBy(drinks, drink => drink.id);
  return maxDrink.id + 1;
};

const updateDrinkDataJson = drinks => {
  fs.writeFileSync(drinksPath, JSON.stringify(drinks));
};

// API ENDPOINTS
app.get("/api/v1/drinks", (req, res) => {
  res.json(getDrinks());
});

app.get("/api/v1/drinks/:id", (req, res) => {
  const drink = getDrinks().find(drink => {
    return drink.id == req.params.id;
  });
  if (drink) {
    res.json(drink);
  } else {
    res.status(404);
  }
});

app.post("/api/v1/drinks", (req, res) => {
  const { title, content } = req.body;
  if (title && content) {
    const newDrink = {
      id: newDrinkId(),
      title: title,
      content: content
    };
    let drinks = getDrinks();
    drinks.push(newDrink);
    updateDrinkDataJson(drinks);
    res.status(201).json({ drink: newDrink });
  } else {
    res.status(422).json({ name: ["Fields can't be blank"] });
  }
});

// Express routes
app.get("*", (req, res) => {
  res.render("home");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is listening...");
});

module.exports = app;
