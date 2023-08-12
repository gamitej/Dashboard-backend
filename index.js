const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const kpiRoutes = require("./routes/kpi.js");

/* CONFIGURATIONS */
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());

/* ENV  */
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

/* MONGO-DB CONNECTION */
async function connectToMongoDb() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    /* SERVER */
    app.listen(PORT, () => {
      console.log(`Connected to MongoDB ✅ & listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
  }
}

connectToMongoDb();

/* ROUTES */
app.use("/kpi", kpiRoutes);
