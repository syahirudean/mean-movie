const express = require('express');
const movieRoutes = require('./routes/movie');
const errorController = require('./controllers/error');
const app = express();
const PORT = 8080;
const ports = process.env.PORT || PORT;

// MIDDLEWEAR PARSE JSON DATA
app.use(express.json());

// HEADER ACCESS CONTROL, REQUEST, ROUTES
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Header', 'Content-type, Authorization');
  next();
});

// REQUEST GROCERIES
app.use('/movies', movieRoutes);

// PAGE NOT FOUND
app.use(errorController.get404);

// SERVER NOt RESPONDING
app.use(errorController.get500);

app.listen(PORT, () => {
  console.log(`server started at port ${ports}`);
});
