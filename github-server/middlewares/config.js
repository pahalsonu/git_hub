const config = {};

config.mongoCloud = `mongodb+srv://sharu24:Dominar@24@bootcamp.i5p6q.gcp.mongodb.net/github?retryWrites=true&w=majority`;

config.options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

module.exports = config;
