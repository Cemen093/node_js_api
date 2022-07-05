const express = require("express");
const regionController = require("../controllers/regionController");
const regionRouter = express.Router();

regionRouter.use("/getAll", regionController.getAll);
regionRouter.use("/get", regionController.get);
regionRouter.use("/post", regionController.post);
regionRouter.use("/put", regionController.put);
regionRouter.use("/delete", regionController.delete);

/*regionRouter.use("/init", regionController.init)*/

module.exports = regionRouter;