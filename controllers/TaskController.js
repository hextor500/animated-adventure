const {
    findAllTasks,
    createTask,
    getTaskId, 
    searchTask,
    deleteId,
} = require('../services/TaskService')

module.exports = {
    getAllTasks: (req, res) => {
        // codigo para conectar
        findAllTasks()
            .then((tasks) => {
                return res.status(200).send(tasks);     
            })
            .catch((err) => {
                console.log('error', err)
                return res.status(500).send('Hubo un error');
            });
    },
    getOneTaskById: (req, res) => {
        const id = req.params.id;
        getTaskId(id)
        .then((task) => {
            return res.status(200).send(task);     
        })
        .catch((err) => {
            console.log('error', err)
            return res.status(500).send('Hubo un error');
        });
    },
    searchTasks: (req, res) => {
        const params = {};
        console.log(req.query);
        if(req.query.isDone){
            params.isDone = req.query.isDone;
        }; 
        if(req.query.end_date){
            params.end_date = { $_gt: req.query.end_date };
        };
        searchTask(params)
        .then((task) => {
            return res.status(200).send(task);     
        })
        .catch((err) => {
            console.log('error', err)
            return res.status(500).send('Hubo un error');
        });
    },
    addTask: (req, res) => {
        const { description, end_date } = req.body;
        createTask({ description, end_date })
        .then((task) => {
            return res.status(201).send(task);     
        })
        .catch((err) => {
            console.log('error', err)
            return res.status(500).send('Hubo un error');
        });
    },
    updateTask: (req, res) => {
        return res.send('updateTask');
    },
    deleteTaskById: (req, res) => {
        const id = { _id: req.params.id };
        deleteId()
        .then((task) => {
            return res.status(200).send(`The task with id ${req.params.id} has been deleted.`);     
        })
        .catch((err) => {
            console.log('error', err)
            return res.status(500).send('Hubo un error');
        });
    }
}