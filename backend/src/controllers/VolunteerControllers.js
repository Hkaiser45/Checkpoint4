const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const volunteers = await tables.volunteer.readAll();

    res.json(volunteers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseDesc = async (req, res, next) => {
  try {
    const volunteers = await tables.volunteer.readAllDesc();

    res.json(volunteers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// The R of BREAD - Read operation

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const volunteer = req.body;
  console.info(volunteer);

  try {
    const insertId = await tables.volunteer.create(volunteer);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  browseDesc,

  // edit,
  add,
  // destroy,
};
