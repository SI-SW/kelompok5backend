import express from "express";
import {
    getTodo,
    getTodoByID,
    createTodo,
    updateTodo,
    deleteTodo
} from"../controllers/todocontroller.js";

const router = express.Router();

router.get('/todo', getTodo);
router.get('/todo/:id', getTodoByID);
router.post('/todo', createTodo);
router.patch('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

export default router;