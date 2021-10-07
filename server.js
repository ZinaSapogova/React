const express = require('express');
const mongoose = require('mongoose');
const cookies = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require("passport");

const users = require("./routes/api/users");
const templates = require("./routes/api/templates");
const checks = require("./routes/api/checks");
const likes = require("./routes/api/likes");
const customers = require("./routes/api/customers");
const notes = require("./routes/api/notes");
  
const app = express();

app.use(bodyParser.json({limit: '550mb'}));
app.use(bodyParser.urlencoded({limit: '550mb', extended: true}));

app.use(cookies());

app.use(express.static(__dirname + '/public'));
const db = 'mongodb://localhost/SAM';

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true,
      useFindAndModify: false }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/templates", templates);
app.use("/api/checks", checks);
app.use("/api/likes", likes);
app.use("/api/customers", customers);
app.use("/api/notes", notes);

app.listen(3001, () => {
    console.log(`Listening to http://localhost:3001`);
});