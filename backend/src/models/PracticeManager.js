const AbstractManager = require("./AbstractManager");

class PracticeManager extends AbstractManager {
  constructor() {
    super({ table: "practice" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async create(practice) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [practice.name]
    );

    return result.insertId;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = PracticeManager;
