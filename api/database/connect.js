const { Pool } = require("pg")
require("dotenv").config()

const db = new Pool ({
    connectionString: process.env.DB_URL
})

module.exports = db