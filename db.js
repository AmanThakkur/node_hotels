const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.DB_URL;

mongoose
  .connect(mongoURL, {
    tls: true, // Ensure TLS is enabled
    tlsAllowInvalidCertificates: false, // Reject invalid certificates
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB server");
});

module.exports = db;
