const express = require("express");
const adController = require("../controllers/adController");
const adRouter = express.Router();

adRouter.use("/getAll", adController.getAll);
adRouter.use("/get", adController.get);
adRouter.use("/post", adController.post);
adRouter.use("/put", adController.put);
adRouter.use("/delete", adController.delete);

/*adRouter.use("/init", adController.init)*/

module.exports = adRouter;