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
 * 
 *     TaskNotFound:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: A message for the not found task
 *       example:
 *         msg: Task with id {id} was not found
 *
 * 
 *   parameters:
 *     taskId:
 *       in: path
 *       name: id
 *       required: true
 *       description: The task id
 *       schema:
 *         type: string
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

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Creates a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description:
 *         content:  
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task' 
 *       500:
 *         description: Server error
 */
router.post('/tasks', createTask)

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Gets a specific task by id
 *     tags: [Tasks]
 *     parameters:
 *       - $ref: '#/components/parameters/taskId'
 *     responses:
 *       200:
 *         description: The task was found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The task was not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskNotFound'
 */
router.get('/tasks/:id', getTask)

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Deletes a task by id
 *     tags: [Tasks]
 *     parameters:
 *       - $ref: '#/components/parameters/taskId'
 *     responses:
 *       200:
 *         description: The task was deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The task was not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskNotFound'
 */
router.delete('/tasks/:id', deleteTask)

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Updates a task by id
 *     tags: [Tasks]
 *     parameters:
 *       - $ref: '#/components/parameters/taskId'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'     
 *     responses:
 *       200: 
 *         description: The updated task
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The task was not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TaskNotFound'
 */
router.put('/tasks/:id', updateTask)


export default router