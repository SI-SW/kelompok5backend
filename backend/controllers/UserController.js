// Mapping function dari module ke API
const m$user = require("../modules/user.module");
const { Router } = require("express");
const response = require("../helpers/response");
const jwt = require("jsonwebtoken");
const userSession = require("../helpers/middleware");

const UserController = Router();

// http://localhost:8000/api/users
UserController.get("/", async (req, res) => {
  const list = await m$user.listUser();

  //response helper
  response.sendResponse(res, list);
});

// http://localhost:8000/api/users/register
UserController.post("/register", async (req, res) => {
  const body = req.body;
  const add = await m$user.addUser(body);

  //response helper
  response.sendResponse(res, add);
});

// http://localhost:8000/api/users/login
UserController.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await m$user.loginUser(email, password);
  if (user.status) {
    const token = jwt.sign(user.user, 'secret-code-token', {
      expiresIn: "20m",
    });
    res.cookie("token", token, {
      httpOnly: true,
    });
    user.token = token;
  }

  //response helper
  response.sendResponse(res, user);
});

// http://localhost:8000/api/users/logout
UserController.post("/logout", async (req, res) => {
  res.clearCookie("token");
  data = {
    status: true,
    msg: "User Logged out!",
  };

  //response helper
  response.sendResponse(res, data);
});

// http://localhost:8000/api/users/delete
UserController.delete("/delete", userSession, async (req, res) => {
  const del = await m$user.deleteUser(req.user.id);

  //response helper
  response.sendResponse(res, del);
});

module.exports = UserController;