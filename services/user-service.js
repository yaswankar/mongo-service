const Users = require('../models/users');

const getUsers = async(req, res) => {res.send(res.user)};

const createUser = async (req, res) => {
    const user = new Users({
        name: req.body.name,
        age: req.body.age,
        createdDate: Date.now()
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateUser = async(req, res) => {
    if(req.body.name !== '') {
        res.user.name = req.body.name;
    }
    if(req.body.age !== '') {
        res.user.age = req.body.age;
    }
    try {
        const updatedUser = await res.user.save();
        res.status(200).json(updatedUser)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

const deleteUser = async(req, res) => {
    try {
        await res.user.remove();
        res.status(202).json("User Deleted successfully")
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports =  {
    getUsers: getUsers,
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser
}