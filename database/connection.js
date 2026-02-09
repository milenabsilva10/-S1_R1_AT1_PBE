import mysql from "mysql2/promise"
import env from "../config/env.js"

const pool = mysql.createPool(env.db)

console.log("Poll MySQL criado");

export default pool;