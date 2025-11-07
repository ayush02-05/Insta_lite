const { default: mongoose } = require("mongoose");

function ConnectToDB() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to DataBase ✅");
    })
    .catch((err) => {
      console.log("Error : ", err);
    });
}

module.exports = ConnectToDB;
