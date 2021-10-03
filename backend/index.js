/*const express = require('express');
const authRoutes = require('./routes/auth');
// const moviesRoutes = require('./routes/movie');
const errorController = require('./controllers/error');

const app = express();

const PORT = 8080;
const ports = process.env.PORT || PORT;

// MIDDLEWEAR PARSE JSON DATA
app.use(express.json());

// HEADER ACCESS CONTROL, REQUEST, ROUTES
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, X-Custom-Header, Authorization'
  );
  // if (req.method === 'OPTIONS') {
  //   return res.status(200).end();
  // }
  next();
});

// AUTH
app.use('/auth', authRoutes);

// // REQUEST MOVIES
// app.use('/movies', moviesRoutes);

// PAGE NOT FOUND
app.use(errorController.get404);

// SERVER NOT RESPONDING
app.use(errorController.get500);

app.listen(PORT, () => {
  console.log(`server started at port ${ports}`);
});*/

// PART 2
const express = require('express');

const authRoutes = require('./routes/auth');

const errorController = require('./controllers/error');

const app = express();

const ports = process.env.PORT || 8080;

app.use(express.json());

app.unsubscribe((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POSTS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
});

app.use('/auth', authRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`listenin on port ${ports}`));
