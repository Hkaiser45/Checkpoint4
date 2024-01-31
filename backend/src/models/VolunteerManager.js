const AbstractManager = require("./AbstractManager");

class volunteerManager extends AbstractManager {
  constructor() {
    super({ table: "volunteer" });
  }

  // The C of CRUD - Create operation

  async create(volunteer, practiceId) {
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, email,practice_id) values (?,?,?,?)`,
      [volunteer.firstname, volunteer.lastname, volunteer.email, practiceId]
    );

    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select volunteer.firstname, volunteer.lastname, volunteer.email, practice.name from ${this.table} join practice on practice_id=practice.id`
    );

    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = volunteerManager;
