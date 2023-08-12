const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");

// config
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(helmet());

// env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
