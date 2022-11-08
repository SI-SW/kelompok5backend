// Mapping function dari module ke API
const m$user = require ('../modules/user.module')
const { Router } = require('express')
const response = require('../helpers/response')
const jwt = require('jsonwebtoken')

const UserController = Router()

// http://localhost:8000/api/users
UserController.get('/', async (req, res) => {
    const list = await m$user.listUser()

    //response helper
    response.sendResponse(res, list)
})

module.exports = UserController