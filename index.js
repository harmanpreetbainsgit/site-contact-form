require("dotenv").config();
const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact");

const app = express();

/*
  CORS CONFIG
  - Allows localhost (dev)
  - Allows your live domain
  - Prevents CORS confusion during 502
*/
const allowedOrigins = [
  "http://localhost:5173",
  "https://codezapsolutions.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/contact", contactRoutes);

app.get("/", (_, res) => {
  res.status(200).send("Contact API running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});