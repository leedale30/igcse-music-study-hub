
import { Client } from 'pg';
import * as path from 'path';

const args = process.argv.slice(2);
const password = args[0];

if (!password) {
    console.error("❌ Error: Please provide the database password as the first argument.");
    process.exit(1);
}

const connectionString = `postgresql://postgres.kgbfftdqqhqzbvoimhen:${password}@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres`;

const client = new Client({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false }
});

async function run() {
    try {
        await client.connect();
        console.log("✅ Connected to Supabase.");

        console.log("🗑️  Deleting all existing RPG questions...");
        // Using TRUNCATE if possible for speed, fallback to DELETE
        try {
            await client.query('TRUNCATE TABLE rpg_questions CASCADE;');
        } catch (e) {
            console.log("⚠️  TRUNCATE failed (likely due to FKs), falling back to DELETE...");
            await client.query('DELETE FROM rpg_questions;');
        }

        console.log("✅ rpg_questions table cleared.");

    } catch (err) {
        console.error("\n❌ Error:", err);
    } finally {
        await client.end();
    }
}

run();
