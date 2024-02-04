module.exports = app => {
  const assets = require("../controllers/asset.controller.js");
  const employees = require("../controllers/emp.controller.js");

  var router = require("express").Router();

  // Create a new Asset
  router.post("/", assets.create);

  // Retrieve all Assets
  router.get("/", assets.findAll);

  // Retrieve all published Assets
  router.get("/published", assets.findAllPublished);

  // Retrieve a single Asset with id
  router.get("/:id", assets.findOne);

  router.put("/issue/:aid/:eid", assets.issue);


  router.put("/return/:aid/:eid", assets.return);

  router.put("/:id", assets.update);

  // Delete an Asset with id
  router.delete("/:id", assets.delete);

  // Delete all Assets
  router.delete("/", assets.deleteAll);

  app.use('/api/assets', router);
};
