const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.find()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ 
      message: 'Failed to get projects' 
    });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
  .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ 
        message: 'Could not find project with given id.' 
      })
    }
  })
  .catch(err => {
    res.status(500).json({ 
      message: 'Failed to get project' 
    });
  });
});

router.get('/:id/task', (req, res) => {
  const { id } = req.params;

  Projects.findTask(id)
})
module.exports = router;