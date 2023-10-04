const Task = require('../models/Tasks');

const findAllTasks = async () => {
    return await Task.find(); 
};

const createTask =  async (task) => {
    return await Task.create(task);
}

const getTaskId = async (taskID) => {
    return await Task.findById(taskID);
}

const searchTask = async (search) => {
    return await Task.find(search);
}

const deleteId = async (taskID) => {
    return await Task.deleteOne(taskID);
}

const updateId = async (taskID) => {
    return await Task.findByIdAndUpdate(taskID);
}

module.exports = {
    findAllTasks,
    createTask,
    getTaskId,
    searchTask,
    deleteId,
};