const db = require("../database/connect");

class Diary {
  constructor({ diary_id,title,date,time,text,category }) {
    (this.diary_id = diary_id),
    (this.title = title),
    (this.date = date),
    (this.time = time),
    (this.text = text),
    (this.category = category);
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM diary");
    return response.rows.map((c) => new Diary(c));
  }

  static async getById(id) {
    const response = await db.query("SELECT * FROM diary WHERE diary_id = $1",[parseInt(id)]);
    if (response.rows.length != 1) {
      throw new Error("Unable to locate diary.");
    }
    return new Diary(response.rows[0]);
  }

  static async createEntry(data) {
    const { title, date, time, text, category = "" } = data;   
    const response = await db.query('INSERT INTO diary (title, date, time, text, category) VALUES ($1, $2, $3, $4, $5) RETURNING *;', [title, date, time, text, category]);
    if(response.rowCount != 1) {
        throw new Error("Could not insert new diary into database");
    } 
    return response.rows.map(w => new Diary(w))
}
}

module.exports = Diary;
