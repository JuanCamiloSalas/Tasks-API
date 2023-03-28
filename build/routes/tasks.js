"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_1 = require("../controllers/tasks");
const router = (0, express_1.Router)();
router.get('/tasks', tasks_1.getTasks);
router.get('/tasks/count', (req, res) => res.send('Hello world!'));
router.post('/tasks', (req, res) => res.send('Hello world!'));
router.get('/tasks/:id', (req, res) => res.send('Hello world!'));
router.delete('/tasks/:id', (req, res) => res.send('Hello world!'));
router.put('/tasks/:id', (req, res) => res.send('Hello world!'));
exports.default = router;
