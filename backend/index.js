const express = require ("express")
const cors = require ("cors")
const dotenv = require ("dotenv");
const todoroute = require ("./routes/todoroute.js");
const { PrismaClient } = require ("@prisma/client");
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const routes = require('./routes')
dotenv.config();

const app= express();
const port = 8000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(todoroute);

app.get('/', async (req, res) =>{
    res.status(200).send({
        status: true,
        message: 'Hello this API from Prisma and Express'
    })
})

routes(app)

app.listen(port, ()=> {
    console.log('Server up and running...');
});
