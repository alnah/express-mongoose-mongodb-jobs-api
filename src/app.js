require("dotenv").config();
require("express-async-errors");
const express = require("express");

const authRoutes = require("./routes/auth");
const jobsRoutes = require("./routes/jobs");
const routeNotFoundMiddleware = require("./middlewares/route-not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

const app = express();
const port = process.env.PORT || 3000;

// parser
app.use(express.json());

// routes
app.use("/api/v1", authRoutes);
app.use("/api/v1", jobsRoutes);

// middlewares
app.use(routeNotFoundMiddleware);
app.use(errorHandlerMiddleware);

// start
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
