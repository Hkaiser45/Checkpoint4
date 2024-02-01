const express = require("express");

const router = express.Router();
const { hashPwd, verifyPwd } = require("./services/argon");

const userController = require("./controllers/UserControllers");
const { verifyToken } = require("./services/jwt");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import VolunteerControllers module for handling item-related operations
const VolunteerControllers = require("./controllers/VolunteerControllers");
const PracticeControllers = require("./controllers/PracticeControllers");

// Route to get a list of items
router.get("/volunteersAdmin", verifyToken, VolunteerControllers.browse);
router.get("/volunteers", VolunteerControllers.browseDesc);
router.get("/practices", PracticeControllers.browse);

// Route to add a new item
router.post("/volunteers", VolunteerControllers.add);
router.post("/users", verifyToken, userController.add);
router.post("/register", hashPwd, userController.createUser);
router.post("/login", verifyPwd, userController.login);
router.post("/practices", verifyToken, PracticeControllers.addPractice);
router.post("/practices/delete", verifyToken, PracticeControllers.destroy);
router.get("/refresh", userController.refresh);

/* ************************************************************************* */

module.exports = router;
