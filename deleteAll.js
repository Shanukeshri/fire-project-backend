const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/authDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
  console.log('All documents deleted from collections');
  mongoose.connection.close();
}).catch(err => console.error(err));
