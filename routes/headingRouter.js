const express = require("express");
const headingController = require("../controllers/headingController");
const headingRouter = express.Router();

headingRouter.use("/getAll", headingController.getAll);
headingRouter.use("/get", headingController.get);
headingRouter.use("/post", headingController.post);
headingRouter.use("/put", headingController.put);
headingRouter.use("/delete", headingController.delete);

/*headingRouter.use("/init", headingController.init)*/

module.exports = headingRouter;