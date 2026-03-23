require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const formRoutes = require("./routes/formRoutes");
app.use("/api", formRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});