const express = require  ("express");
const {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
} = require ("../controllers/todocontroller.js");
const userSession = require('../helpers/middleware')

const router = express.Router();

router.get('/todo', userSession, getTodo);
router.post('/todo', userSession ,createTodo);
router.patch('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

module.exports = router;