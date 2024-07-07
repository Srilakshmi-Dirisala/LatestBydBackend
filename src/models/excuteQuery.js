const { sql } = require("../../database")
const executeQuery = async (query) => {
    try {
        let pool = await sql;
        return await pool.query(query);
        
    } catch (err) {
        console.error("Database error:", err);
        throw new Error(err);
    }
}

module.exports={executeQuery}   