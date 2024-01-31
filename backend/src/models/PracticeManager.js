const AbstractManager = require("./AbstractManager");

class PracticeManager extends AbstractManager {
  constructor() {
    super({ table: "practice" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = PracticeManager;
