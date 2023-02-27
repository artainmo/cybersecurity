const express = require('express');
const partials = require('express-partials');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const PORT = 4001;

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(partials());

app.use(cookieParser());

app.set('trust proxy', 1) 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "/public")));

// Configure csurf middleware here
const csrfMiddleware = csurf({cookie: {
  maxAge: 3000,
  secure: true,
  sameSite: 'none'  
}});
// Use csrf middleware at application level here
app.use(csrfMiddleware);
// Configure error message middleware here
const errorMessage = (err, req, res, next) => {
  if (err.code === "EBADCSRFTOKEN") {
    res.render("csrfError");
  } else {
    next();
  }
}
// Use error message middleware at application level here
app.use(errorMessage);

app.get('/', (req, res) => {
  // Send CSRF token to form
  res.render("order", {csrfToken: req.csrfToken()});
})


app.get('/contact', (req, res) => {
  // Send CSRF token to form
  res.render('contact', {csrfToken: req.csrfToken()});
})

app.post('/submit', (req, res) => {
  res.render('success');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`) );
