const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: "mongodb+srv://PiyushNegi:VvbfK9sdUUu6gfUt@cluster0.bzkdi.mongodb.net/Cluster0?retryWrites=true&w=majority"
  // process.env.MONGODB_URI ||
  //   process.env.MONGO_HOST ||
  //   'mongodb://' + (process.env.IP || 'localhost') + ':' +
  //   (process.env.MONGO_PORT || '27017') +
  //   '/mernproject'
};

export default config;