const express = require("express");
require("dotenv").config();
const {
  notFoundHandler,
  errorHandler,
} = require("./middleware/errorMiddleware");
const connectDB = require("./utils/db");
const path = require("path");

const port = process.env.PORT;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/units", require("./routes/unitRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billRoutes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("API is running"));
}

app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.port || 5001;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
