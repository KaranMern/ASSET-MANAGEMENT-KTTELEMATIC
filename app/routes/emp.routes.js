module.exports = app => {
    const employees = require("../controllers/emp.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Employee
    router.post("/", employees.create);
  
    // Retrieve all Employees
    router.get("/", employees.findAll);
  
    // Retrieve all published Employees
    
  
    // Retrieve a single Employee with id
    router.get("/:id", employees.findOne);
  
  
    // Update an Employee with id
    router.put("/:id", employees.update);
  
    // Delete an Employee with id
    router.delete("/:id", employees.delete);
  
    // Delete all Employees
    router.delete("/", employees.deleteAll);
  
    app.use('/api/employees', router);
  };
  