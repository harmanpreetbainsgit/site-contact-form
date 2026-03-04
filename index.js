require("dotenv").config();
const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contact");

const app = express();

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://your-vue-site.onrender.com",
            "https://yourdomain.com",
        ],
    }),
);

app.use(express.json());
app.use("/contact", contactRoutes);

app.get("/", (_, res) => res.send("Contact API running"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running at: http://localhost:${PORT}`);
});
