import { Router } from "express"

import { getTasks, createTask, getTask, deleteTask, updateTask, countTasks } from '../controllers/tasks'

const router = Router()

/** 
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The identifier of each task
 *         name:
 *           type: string
 *           description: The title of the task
 *         description:
 *           type: string
 *           description: Most especific description of the task
 *       required:
 *         - name
 *         - description
 *       example:
 *         id: DyCMpGCLXWwMJJEXZCVnt
 *         name: Make my math homework
 *         description: Solve algebra and trigonometry problems
*/       

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Returns a list of tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: A list of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
*/
router.get('/tasks', getTasks)

/** 
 * @swagger
 * /tasks/count:
 *   get: 
 *     summary: Returns the total amount of the tasks
 *     tags: [Tasks]
 *     responses: 
 *       200:
 *         description: The total number of the amount 
 *         content: 
 *           text/plain:
 *             schema:          
 *               type: integer
 *               example: 15
 *           
*/
router.get('/tasks/count', countTasks)

router.post('/tasks', createTask)

router.get('/tasks/:id', getTask)

router.delete('/tasks/:id', deleteTask)

router.put('/tasks/:id', updateTask)


export default router