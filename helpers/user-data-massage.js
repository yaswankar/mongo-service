const Users = require('../models/users');

const getUsers = async(req, res, next) => {
    let user;
    if(req.query.id) {
        try {
            user = await Users.findById(req.query.id);
            if(user == null) return res.status(404).json({message: "User not found"})
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    } else {
        try {
            user = await Users.find();
            if(user.length == 0) return res.status(404).json({message: "User not found"})
        } catch (error) {
            return res.status(500).json({message: error.message});
        } 
    }
    res.user = user;
    next();
}

module.exports = {
    getUsers: getUsers
}