const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const practices = await tables.practice.readAll();

    res.json(practices);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
};
