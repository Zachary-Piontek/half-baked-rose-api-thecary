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

  static async insert({ detail, character_id, episode_id }) {
    // implement insert to add new quote
    const { rows } = await pool.query('insert into quotes (detail, character_id, episode_id) values ($1, $2, $3) returning*;',
      [detail, character_id, episode_id]);
    console.log(rows[0]);
    return new Quote(rows[0]);
  }
}

module.exports = { Quote };
