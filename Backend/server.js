require("dotenv").config();
const app = require("./src/app");
const ConnectToDB = require("./src/db/db");

app.listen("3000", () => {
  console.log("Server Created Successfully ✅");
  ConnectToDB();
});
