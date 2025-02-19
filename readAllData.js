const mongoose = require('mongoose');

// Replace 'YourModel' with the actual name of your Mongoose model
const YourModel = require('./models/alerts'); // Adjust the path to your model file

// Replace 'your_database_url' with your actual MongoDB connection string
const dbURI = 'mongodb://localhost:27017/authDB';

// Connect to the database
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');

    // Fetch all documents from the collection
    YourModel.find({})
      .then(docs => {
        console.log('All documents in the collection:');
        console.log(JSON.stringify(docs, null, 2)); // Log documents in a readable format
      })
      .catch(err => {
        console.error('Error fetching documents:', err);
      })
      .finally(() => {
        // Close the database connection
        mongoose.connection.close();
      });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });