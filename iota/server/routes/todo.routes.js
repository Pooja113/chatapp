import express from "express";

import {
  getAllTodos,
  getTodoDetail,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.route("/").get(getAllTodos);
router.route("/:id").get(getTodoDetail);
router.route("/").post(createTodo);
router.route("/:id").patch(updateTodo);
router.route("/:id").delete(deleteTodo);

export default router;
