const express = require('express');
const authRoutes = require('./routes/auth');
const moviesRoutes = require('./routes/movie');
const errorController = require('./controllers/error');

const app = express();

const ports = process.env.PORT || 8080;

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


// REQUEST AUTH
app.use('/auth', authRoutes);

// REQUEST MOVIES
app.use('/movies', moviesRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`listenin on port ${ports}`));
