const express = require("express");
const expressHB = require("express-handlebars");
const mysql = require("mysql");
const bodyParser = require("body-parser");
//env vars
require("dotenv").config();

const app = express();
const port = process.env.PORT || 500;

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Litening at port: ${port}`));
