const { app } = require("./index");
const connect = require("./config/db");

const start = async () => {
  await connect();
  app.listen(8000, () => {
    console.log("hi listning on 8000");
  });
};
start();
