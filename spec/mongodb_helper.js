var mongoose = require('mongoose');
require('dotenv/config');

beforeAll(function(done) {
  mongoose.connect(process.env.TEST_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.on('open', function() {
    done();
  });
});

afterAll(function(done) {
  mongoose.connection.close(true, function() {
    done();
  });
});