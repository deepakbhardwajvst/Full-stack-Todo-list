"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = __importDefault(require("./models"));
const router = (0, express_1.Router)();
// Get all tasks
router.get("/tasks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield models_1.default.find();
        res.json(tasks);
    }
    catch (error) {
        // Explicitly typing error as 'any'
        res.status(500).json({ message: error.message });
    }
}));
// Create a new task
router.post("/tasks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = new models_1.default({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const newTask = yield task.save();
        res.status(201).json(newTask);
    }
    catch (error) {
        // Explicitly typing error as 'any'
        res.status(400).json({ message: error.message });
    }
}));
exports.default = router;
