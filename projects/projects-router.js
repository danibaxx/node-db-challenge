const express = require('express');
const projectModel = require('./projects-model.js');
// const taskRouter = require('../task/task-router');
// const db = require('../data/db-config');

const router = express.Router();

// router.use('/:id/task', taskRouter);

router.get('/', async (req, res, next) => {
  try {
    // res.json(await db('projects'))
    res.json(await projectModel.find())
  } catch(err) {
    next (err)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;

    const project = await projectModel.findById(id)

    if (project) {
      res.json(project)
    } else {
      res.status(404).json({
        message: 'Could not find project with givn Id.'
      })
    }
  } catch(err) {
    next (err)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newProject = await projectModel.add(req.body)
    res.status(201).json(newProject)
  } catch(err) {
    next (err)
  }
});

module.exports = router;