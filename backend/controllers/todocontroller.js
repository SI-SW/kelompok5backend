import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const getTodo = async (req, res) => {
    try {
        const response = await prisma.todo.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getTodoByID = async (req, res) => {
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

export const createTodo = async (req, res) => {
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

export const updateTodo = async (req, res) => {
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

export const deleteTodo = async (req, res) => {
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