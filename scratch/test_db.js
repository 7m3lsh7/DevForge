const postgres = require('postgres');
const env = require('dotenv').config();

const sql = postgres(process.env.DATABASE_URL);

async function testConnection() {
  try {
    const result = await sql`SELECT 1 as connected`;
    console.log('SUCCESS:', result);
  } catch (err) {
    console.error('FAILED:', err);
  } finally {
    process.exit();
  }
}

testConnection();
