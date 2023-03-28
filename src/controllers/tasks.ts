import { Handler } from "express"
import { nanoid } from "nanoid";
import { getConnection } from "../db"

export const getTasks: Handler = (req, res) => {
    const data = getConnection().get('tasks').value()
    return res.json(data)
}

export const createTask: Handler = (req, res) => {
    try {
        const { name, description } = req.body

        const newTask = {
            id: nanoid(),
            name,
            description
        }

        getConnection().get('tasks').push(newTask).write()

        res.json(newTask)

    } catch (error: any) {
        res.send(error.message)
    }
}

export const getTask: Handler = (req, res) => {
    try {
        const { id } = req.params

        const task = getConnection()
            .get('tasks')
            .find({ id })
            .value()

        if (!task) return res.status(404).send({ msg: `Task with id: ${id} was not found` })

        return res.json(task)

    } catch (error: any) {
        res.send(error.message)
    }
}

export const countTasks: Handler = (req, res) => {
    try {
        const tasksLength = getConnection().get('tasks').value().length
        res.json(tasksLength)
    } catch (error: any) {
        res.send(error.message)
    }
}

export const deleteTask: Handler = (req, res) => {
    try {
        const { id } = req.params

        const deletedTask = getConnection()
            .get('tasks')
            .remove({id})
            .write()[0]

        if (!deletedTask) return res.status(404).send({ msg: `Task with id: ${id} was not found` })

        return res.json(deletedTask)

    } catch (error: any) {
        res.send(error.message)
    }
}

export const updateTask: Handler = (req, res) => {
    try {
        const { id } = req.params

        const task = getConnection()
            .get('tasks')
            .find({ id })
            .value()

        if (!task) return res.status(404).send({ msg: `Task with id: ${id} was not found` })

        const updatedTask = getConnection()
            .get('tasks')
            .find({ id })
            .assign(req.body)
            .write()

        return res.json(updatedTask)

    } catch (error: any) {
        res.send(error.message)
    }
}