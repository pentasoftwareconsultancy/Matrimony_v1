require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// user Router
const router = require("./Routers/UserRouter/Auth.router");
const detailsRouter = require("./Routers/UserRouter/Details.router");


const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connected!"))
  .catch((error) => console.log("DB failed to connect", error));

app.get("/api/health", (req, res) => {
  res.json({
    service: "Backend Joblisting server",
    status: "active",
    time: new Date(),
  });
});

// user routers
app.use("/api/v1/auth", router);
app.use("/api/v1/details", detailsRouter);


app.use("*", (req, res) => {
  res.status(404).json({ errorMessage: "Route not found!" });
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ errorMessage: "Something went wrong!" });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Backend server running at port ${PORT}`);
});
