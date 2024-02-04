const db = require("../models");
const Employee = db.employees;
const Op = db.Sequelize.Op;

// Create and Save a new Employee
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.teamname || !req.body.role || !req.body.status) {
    res.status(400).send({
      message: "All fields are required!"
    });
    return;
  }

  // Create an Employee
  const employee = {
    name: req.body.name,
    teamname: req.body.teamname,
    status: req.body.status
  };

  // Save Employee in the database
  Employee.create(employee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Employee."
      });
    });
};

// Retrieve all Employees from the database.
exports.findAll = (req, res) => {
  Employee.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving employees."
      });
    });
};

// Find a single Employee with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Employee.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Employee with id ${id} not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error retrieving Employee with id ${id}.`
      });
    });
};

// Update an Employee by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Employee.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was updated successfully."
        });
      } else {
        res.status(404).send({
          message: `Cannot update Employee with id ${id}. Employee not found or request body is empty.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error updating Employee with id ${id}.`
      });
    });
};

// Delete an Employee with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Employee.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was deleted successfully!"
        });
      } else {
        res.status(404).send({
          message: `Cannot delete Employee with id ${id}. Employee not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error deleting Employee with id ${id}.`
      });
    });
};

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {
  Employee.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({
        message: `${nums} Employees were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error deleting all employees."
      });
    });
};

// Find all published Employees
exports.findAllPublished = (req, res) => {
  Employee.findAll({ where: { status: 'published' } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error retrieving published employees."
      });
    });
};


