import { Router, Request, Response } from "express";
import Task, { ITask } from "./models";

const router = Router();

// Get all tasks
router.get("/tasks", async (req: Request, res: Response) => {
  try {
    const tasks: ITask[] = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new task
router.post("/tasks", async (req: Request, res: Response) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newTask: ITask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
