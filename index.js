const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const errorHandler = require('./middleware/errorHandler');
const { connectToServer } = require('./utils/dbConnect');
const chartDataRoutes = require('./routes/data.route')

app.use("/", chartDataRoutes)

connectToServer((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } else {
    console.log(err);
  }
});


app.get('/', (req, res) => {
  res.send('Hello Your data is reade !!')
})

app.all("*", (req, res) => {
  res.send("No route found.")
})

app.use(errorHandler);

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1)
  })
})