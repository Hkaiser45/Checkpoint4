const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import VolunteerControllers module for handling item-related operations
const VolunteerControllers = require("./controllers/VolunteerControllers");
const PracticeControllers = require("./controllers/PracticeControllers");

// Route to get a list of items
router.get("/volunteers", VolunteerControllers.browse);
router.get("/practices", PracticeControllers.browse);

// Route to get a specific item by ID

// Route to add a new item
router.post("/volunteers", VolunteerControllers.add);

/* ************************************************************************* */

module.exports = router;
