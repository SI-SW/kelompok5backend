const { PrismaClient } = require ("@prisma/client")

const prisma = new PrismaClient();

class _todo{
    getTodo = async (req, res) => {
        try {
            const response = await prisma.todo.findMany();
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }
    
    getTodoByID = async (req, res) => {
        try {
            const response = await prisma.todo.findUnique({
                where:{
                    id: Number(req.params.id)
                }
            });
            res.status(200).json(response);
        } catch (error) {
            res.status(404).json({msg: error.message});
        }
    }
    
    createTodo = async (req, res) => {
        const {uang, desc } = req.body;
        try {
                const todo = await prisma.todo.create({
                    data:{
                        uang: uang,
                        desc: desc
                    }
                });
                res.status(201).json(todo);
        } catch (error) {
                res.status(404).json({msg: error.message});
        }
    }
    
    updateTodo = async (req, res) => {
        const {uang, desc} = req.body;
        try {
                const todo = await prisma.todo.update({
                    where: {
                        id: Number(req.params.id)
                    },
                    data:{
                        uang: uang,
                        desc: desc
                    }
                });
                res.status(200).json(todo);
        } catch (error) {
                res.status(404).json({msg: error.message});
        }
    }
    
    deleteTodo = async (req, res) => {
        try {
                const todo = await prisma.todo.delete({
                    where: {
                        id: Number(req.params.id)
                    },
                });
                res.status(200).json(todo);
        } catch (error) {
                res.status(404).json({msg: error.message});
        }
    }
}

module.exports = new _todo()