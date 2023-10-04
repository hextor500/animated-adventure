const User = require('../models/User');

const createUser = async (user) => {
    return await User.create(user);
}

const findUser = async (user) => {
    return await User.findOne(user);
}

module.exports = {
    createUser,
    findUser
};