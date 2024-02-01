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

const addPractice = async (req, res, next) => {
  const practice = req.body;

  try {
    const insertId = await tables.practice.create(practice);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};
const destroy = async (req, res, next) => {
  const { id } = req.body;
  console.info(id);

  try {
    const result = await tables.practice.delete(id);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  addPractice,
  destroy,
};
