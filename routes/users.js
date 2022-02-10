const express = require('express');
const userRouter = express.Router();
const dataMassager = require('../helpers/user-data-massage');
const userService = require('../services/user-service')
const cors = require('cors');
userRouter.use(cors({
    origin: ['http://localhost:8080']
}));

// Get users
userRouter.get('/', dataMassager.getUsers, userService.getUsers)

// Create an user
userRouter.post('/', userService.createUser)

// Updating an user
userRouter.patch('/', dataMassager.getUsers, userService.updateUser)

// delete an user
userRouter.delete('/', dataMassager.getUsers, userService.deleteUser)

module.exports = userRouter;
