

// const app = require('./app');
// const path = require('path');
// const connectDatabase = require('./config/database');

// connectDatabase();

// const server = app.listen(process.env.PORT,()=>{
//     console.log(`My Server listening to the port: ${process.env.PORT} in  ${process.env.NODE_ENV} `)
// })

// process.on('unhandledRejection',(err)=>{
//     console.log(`Error: ${err.message}`);
//     console.log('Shutting down the server due to unhandled rejection error');
//     server.close(()=>{
//         process.exit(1);
//     })
// })

// process.on('uncaughtException',(err)=>{
//     console.log(`Error: ${err.message}`);
//     console.log('Shutting down the server due to uncaught exception error');
//     server.close(()=>{
//         process.exit(1);
//     })
// })






const app = require("./app");
const path = require("path");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`❌ Error: ${err.message}`);
  console.log("Shutting down the server due to uncaught exception");
  process.exit(1);
});

// Connect Database
connectDatabase();

// Server Start
const server = app.listen(process.env.PORT, () => {
  console.log(
    `✅ Server is running on PORT: ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`❌ Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});














