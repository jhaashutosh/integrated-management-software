const express = require("express");
const dotenv = require("dotenv");
const {
  notFoundHandler,
  errorHandler,
} = require("./middleware/errorMiddleware");
const connectDB = require("./utils/db");
const path = require("path");
const cors = require('cors');

const app = express();

app.use(cors({
  origin: ["https://integrated-management-software.vercel.app/"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}))

// Load environment variables from a .env file
dotenv.config();

// Define the port (you can use a default value if it's not specified in the environment)
const port = process.env.PORT || 5001;

// Define a function to start the server
function startServer() {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}

// Connect to the database
connectDB()
  .then(() => {
    console.log("Connected to the database");

    // Add middleware for parsing JSON and URL-encoded data
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Define your API routes
    app.use("/api/units", require("./routes/unitRoutes"));
    app.use("/api/users", require("./routes/userRoutes"));
    app.use("/api/bills", require("./routes/billRoutes"));

    if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.join(__dirname, "../client/build")));
      app.get("*", (req, res) =>
        res.sendFile(path.join(__dirname, "../client/build/index.html"))
      );
    }

    app.get("/", (req, res) => res.send("API is running"));

    // Error handling middleware
    app.use(notFoundHandler);
    app.use(errorHandler);

    // Start the server
    startServer();
  })
  .catch((error) => {
    console.error(`Database connection error: ${error.message}`);
  });
