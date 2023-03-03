/*
 * Dependencies
 * External Modules
 */
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const cloudinary = require("cloudinary").v2;
const cors = require("cors");

/*
 * Dependencies
 * Local Modules
 */
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");
// const { User, Task, Profile } = require("./models");

/*
 * Initialization
 */
const app = express();
const PORT = process.env.PORT || 3001;

/*
 * Configure and link a session object with the sequelize store
 */
const sessOptions = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

/*
 * Configure for cloudinary
 */
const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPIKEY,
  api_secret: process.env.CLOUDINARYSECRET,
});

/*
 * MVC Template Engine
 * Handlebars as the default template engine
 * Register Block Helpers #ifCond
 */
const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

hbs.handlebars.registerHelper("ifCond", function (v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

/*
 * Middleware
 */
app.use(cors());
app.use(session(sessOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
app.post("/upload/cloud", (req, res) => {
  const file = req.body.imageUrl;
  const result = cloudinary.uploader.upload(file);

  result
    .then((data) => {
      console.log(data);
      console.log(data.secure_url);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

/*
 * Start Listening
 * Synchronize Database
 */
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});
