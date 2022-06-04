const functions = require("firebase-functions");
const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.json({message: "Welcome to Vanguardia application."});
});

require("./app/routes/user.routes.js")(app);
app.listen();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

exports.app = functions.https.onRequest(app);
