import Todo from "../models/todo.js";
import User from "../models/user.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find({}).limit(req.query._end);
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTodoDetail = async (req, res) => {
  //   const { id } = req.params;
  //   const propertyExists = await Property.findOne({ _id: id }).populate(
  //     "creator"
  //   );
  //   if (propertyExists) {
  //     res.status(200).json(propertyExists);
  //   } else {
  //     res.status(404).json({ message: "Property not found" });
  //   }
};

const createTodo = async (req, res) => {
  try {
    const { title, description, status, priority, email } = req.body;
    const session = await mongoose.startSession();
    const user = await User.findOne({ email }).session(session);
    if (!user) throw new Error("User not found");
    const newTodo = await Todo.create({
      title,
      description,
      status,
      priority,
      creator: user._id,
    });
    user.allTodos.push(newTodo._id);
    await user.save({ session });
    res.status(200).json({ message: "Todo created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const { title, description, propertyType, location, price, photo } =
  //       req.body;
  //     const photoUrl = await cloudinary.uploader.upload(photo);
  //     await Property.findByIdAndUpdate(
  //       { _id: id },
  //       {
  //         title,
  //         description,
  //         propertyType,
  //         location,
  //         price,
  //         photo: photoUrl.url || photo,
  //       }
  //     );
  //     res.status(200).json({ message: "Property updated successfully" });
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
};

const deleteTodo = async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const propertyToDelete = await Property.findById({ _id: id }).populate(
  //       "creator"
  //     );
  //     if (!propertyToDelete) throw new Error("Property not found");
  //     const session = await mongoose.startSession();
  //     session.startTransaction();
  //     propertyToDelete.remove({ session });
  //     propertyToDelete.creator.allProperties.pull(propertyToDelete);
  //     await propertyToDelete.creator.save({ session });
  //     await session.commitTransaction();
  //     res.status(200).json({ message: "Property deleted successfully" });
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
};

export { getAllTodos, getTodoDetail, createTodo, updateTodo, deleteTodo };
