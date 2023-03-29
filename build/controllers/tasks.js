"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.countTasks = exports.getTask = exports.createTask = exports.getTasks = void 0;
const nanoid_1 = require("nanoid");
const db_1 = require("../db");
const getTasks = (req, res) => {
    const data = (0, db_1.getConnection)().get('tasks').value();
    return res.json(data);
};
exports.getTasks = getTasks;
const createTask = (req, res) => {
    try {
        const { name, description } = req.body;
        const newTask = {
            id: (0, nanoid_1.nanoid)(),
            name,
            description
        };
        (0, db_1.getConnection)().get('tasks').push(newTask).write();
        res.json(newTask);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.createTask = createTask;
const getTask = (req, res) => {
    try {
        const { id } = req.params;
        const task = (0, db_1.getConnection)()
            .get('tasks')
            .find({ id })
            .value();
        if (!task)
            return res.status(404).send({ msg: `Task with id: ${id} was not found` });
        return res.json(task);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.getTask = getTask;
const countTasks = (req, res) => {
    try {
        const tasksLength = (0, db_1.getConnection)().get('tasks').value().length;
        res.json(tasksLength);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.countTasks = countTasks;
const deleteTask = (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = (0, db_1.getConnection)()
            .get('tasks')
            .remove({ id })
            .write()[0];
        if (!deletedTask)
            return res.status(404).send({ msg: `Task with id: ${id} was not found` });
        return res.json(deletedTask);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.deleteTask = deleteTask;
const updateTask = (req, res) => {
    try {
        const { id } = req.params;
        const task = (0, db_1.getConnection)()
            .get('tasks')
            .find({ id })
            .value();
        if (!task)
            return res.status(404).send({ msg: `Task with id: ${id} was not found` });
        const updatedTask = (0, db_1.getConnection)()
            .get('tasks')
            .find({ id })
            .assign(req.body)
            .write();
        return res.json(updatedTask);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.updateTask = updateTask;
