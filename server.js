// {==================== Dependencies: Include External Modules ====================}
const path = require("path");
const express = require("express");

// {==================== Dependencies: Importing a local module ====================}
const routes = require("./controllers");

// {==================== Initialization ====================}
const app = express();
const PORT = process.env.PORT || 3001;

// {==================== Middleware ====================}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// {==================== Synchronize All Models & Start Listening ====================}
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
