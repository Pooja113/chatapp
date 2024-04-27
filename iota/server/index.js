import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/connect.js";
import userRouter from "./routes/user.routes.js";
import todoRouter from "./routes/todo.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/todos", todoRouter);

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(8000, () =>
      console.log("Server started on port http://localhost:8000")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
