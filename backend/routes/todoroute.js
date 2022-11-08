const express = require  ("express");
const {
    getTodo,
    getTodoByID,
    createTodo,
    updateTodo,
    deleteTodo
} = require ("../controllers/todocontroller.js");

const router = express.Router();

router.get('/todo', getTodo);
router.get('/todo/:id', getTodoByID);
router.post('/todo', createTodo);
router.patch('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

module.exports = router;