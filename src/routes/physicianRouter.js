const express = require("express");
const physicianRouter = express.Router();
const physiciansController = require("../controllers/physiciansController");

physicianRouter.get("/listAllPhysicians", physiciansController.listAllPhysicians);
physicianRouter.post("/newPhysician", physiciansController.newPhysician);
physicianRouter.delete("/deletePhysician/:id", physiciansController.deletePhysician);
physicianRouter.patch("/updatePhysician", physiciansController.updatePhysician);

module.exports = physicianRouter;
