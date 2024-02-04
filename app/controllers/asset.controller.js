const db = require("../models");
const Asset = db.assets;
const Employee = db.employees; 
const Op = db.Sequelize.Op;

// Create and Save a new Asset
exports.create = (req, res) => {
  // Validate request
  if (!req.body.assetname || !req.body.assetcategoryname) {
    res.status(400).send({
      message: "Both 'assetname' and 'assetcategoryname' are required!"
    });
    return;
  }

  // Create an Asset
  const asset = {
    assetname: req.body.assetname,
    assetcategoryname: req.body.assetcategoryname
  };


  // Save Asset in the database
  Asset.create(asset)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Asset."
      });
    });
};

// Retrieve all Assets from the database.
exports.findAll = (req, res) => {
  Asset.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving assets."
      });
    });
};

// Find a single Asset with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Asset.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Asset with id ${id} not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error retrieving Asset with id ${id}.`
      });
    });
};

// Update an Asset by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Asset.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Asset was updated successfully."
        });
      } else {
        res.status(404).send({
          message: `Cannot update Asset with id ${id}. Asset not found or request body is empty.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error updating Asset with id ${id}.`
      });
    });
};

// Delete an Asset with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Asset.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Asset was deleted successfully!"
        });
      } else {
        res.status(404).send({
          message: `Cannot delete Asset with id ${id}. Asset not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || `Error deleting Asset with id ${id}.`
      });
    });
};

// Delete all Assets from the database.
exports.deleteAll = (req, res) => {
  Asset.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({
        message: `${nums} Assets were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error deleting all assets."
      });
    });
};

// Find all published Assets
exports.findAllPublished = (req, res) => {
  Asset.findAll({ where: { status: 'published' } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error retrieving published assets."
      });
    });
};

exports.issue = (req, res) => {
  const aid = req.params.aid;
  
  Asset.update(req.body, {
    where: { id: aid }
  })
    .then(num => {
      if (num == 1) {
        console.log("asset succesfully");
      } else {
        console.log("404");
      }
    })
    .catch(err => {
      console.log("500");
    });
    
    const eid = req.params.eid;

    Employee.update(req.body, {
      where: { id: eid }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Employee was granted successfully."
          });
        } else {
          res.status(404).send({
            message: `Cannot update Asset with id ${id}. Asset not found or request body is empty.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || `Error updating Asset with id ${id}.`
        });
      });
      
}


exports.return = (req, res) => {
  const aid = req.params.aid;
  
  Asset.update(req.body, {
    where: { id: aid }
  })
    .then(num => {
      if (num == 1) {
        console.log("asset  return succesfully");
      } else {
        console.log("404");
      }
    })
    .catch(err => {
      console.log("500");
    });
    
    const eid = req.params.eid;

    Employee.update(req.body, {
      where: { id: eid }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Employee was  successfully."
          });
        } else {
          res.status(404).send({
            message: `Cannot update Asset with id ${id}. Asset not found or request body is empty.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || `Error updating Asset with id ${id}.`
        });
      });
      
}