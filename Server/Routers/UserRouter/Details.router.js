const express = require("express");
const detailsRouter = express.Router();
const detailsController = require("../../Controllers/UserController/UserDetails/PersonalDetails.Controller");
const expectationController = require("../../Controllers/UserController/UserDetails/ExpectationsDetails.Controller");

// PersonalDetails
detailsRouter.post("/prersonalDetails", detailsController.UserPersonalDetails);
detailsRouter.get("/prersonalDetails", detailsController.getUserPersonalDetails);
detailsRouter.get("/prersonalDetails/:userid", detailsController.getSingleUserPersonalDetails);
detailsRouter.put("/prersonalDetails/:userid", detailsController.updateUserPersonalDetails);


// ExpectationsDetails
detailsRouter.post("/expectationsDetails", expectationController.UserExpectationsDetails);
detailsRouter.get("/expectationsDetails", expectationController.getUserExpectationsDetails);
detailsRouter.get("/expectationsDetails/:userid", expectationController.getSingleUserExpectationsDetails);
detailsRouter.put("/expectationsDetails/:userid", expectationController.updateUserExpectationsDetails);

module.exports = detailsRouter;