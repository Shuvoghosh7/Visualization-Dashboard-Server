const {MongoClient} = require('mongodb');
const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.64tg7jr.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true});

let dbConnection;

module.exports = {
    connectToServer: function (callback) {
      client.connect(function (err, db) {
        if (err || !db) {
          return callback(err);
        }
  
        dbConnection = db.db("data_visualization");
        console.log("Successfully connected to MongoDB.");
  
        return callback();
      });
    },
  
    getDb: function () {
      return dbConnection;
    },
  };