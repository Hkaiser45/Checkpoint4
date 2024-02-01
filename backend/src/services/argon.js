const argon2 = require("argon2");
const tables = require("../tables");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hashPwd = async (req, res, next) => {
  try {
    const hash = await argon2.hash(req.body.password, hashingOptions);

    /**
     *
     * Soit on créer un req.user en reprenant le body + mdp hashé.
     *
     * req.user = {...req.body, password: hash}
     *
     * soit on écrase la valeur avec le mdp hashé.
     *
     */

    req.body.password = hash;

    next();
  } catch (err) {
    next(err);
  }
};

const verifyPwd = async (req, res, next) => {
  try {
    const userHash = await tables.user.readUserByEmail(req.body.email);

    if (!userHash) {
      res.status(401).json({ error: "il y a une erreur" });
    }

    if (await argon2.verify(userHash.password, req.body.password)) {
      delete userHash.password;
      req.user = userHash;
      next();
    } else {
      res.status(422).json({
        error: "il y a une erreur",
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  hashPwd,
  verifyPwd,
};