process.env.MONGODB_URL = "mongodb+srv://Iseni:Learn123+@cluster0-bf7qe.mongodb.net/test?retryWrites=true&w=majority";
process.env.PORT = 3000;

console.log(`
configging -->
  MONGODB_URL: ${process.env.MONGODB_URL}
  PORT: ${process.env.PORT}
`);

// you'll need to make a new file next to this one called "config.js"
// paste in these lines and replace them with whatever you need