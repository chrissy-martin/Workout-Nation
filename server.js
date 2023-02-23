/*
 * Dependencies
 * External Modules
 */
const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");

/*
 * Dependencies
 * Local Modules
 */
const routes = require("./controllers");
const sequelize = require("./config/connection");

/*
 * Initialization
 */
const app = express();
const PORT = process.env.PORT || 3001;

/*
 * MVC Template Engine
 *  Handlebars as the default template engine
 */
const hbs = exphbs.create();
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

/*
 * Middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

/*
 * Start Listening
 * Synchronize Database
 */
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
});
