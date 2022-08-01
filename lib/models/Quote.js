const pool = require('../utils/pool');

class Quote {
  id;
  detail;
  character_id;

  constructor(row) {
    this.id = row.id;
    this.detail = row.detail;
    this.character_id = row.character_id;
  }

  static async count() {
    const { rows } = await pool.query('SELECT COUNT(*) FROM quotes');
    return Number(rows[0].count);
  }

  static async insert({ episode_id, character_id, detail }) {
    // implement insert to add new quote
    const { rows } = await pool.query('insert into quotes (episode_id, character_id, detail) values ($1, $2, $3) returning*;',
      [episode_id, character_id, detail]);
    console.log(rows[0]);
    return new Quote(rows[0]);
  }
}

module.exports = { Quote };
