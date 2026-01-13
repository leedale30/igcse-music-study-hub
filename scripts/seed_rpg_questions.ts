
import { Client } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

const args = process.argv.slice(2);
const password = args[0];

if (!password) {
    console.error("❌ Error: Please provide the database password as the first argument.");
    console.error("Usage: npx tsx scripts/seed_rpg_questions.ts <YOUR_PASSWORD>");
    process.exit(1);
}

const connectionString = `postgresql://postgres.kgbfftdqqhqzbvoimhen:${password}@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres`;

console.log("Connecting to Supabase...");

const client = new Client({
    connectionString: connectionString,
    ssl: { rejectUnauthorized: false }
});

async function run() {
    try {
        await client.connect();
        console.log("✅ Connected.");

        const scriptDir = path.join(process.cwd(), 'scripts');
        // Natural sort ensures part1, part2, ... part10 order strictly
        const files = fs.readdirSync(scriptDir)
            .filter(f => f.startsWith('rpg_questions_seed_part') && f.endsWith('.sql'))
            .sort((a, b) => {
                const numA = parseInt(a.match(/part(\d+)/)?.[1] || '0');
                const numB = parseInt(b.match(/part(\d+)/)?.[1] || '0');
                return numA - numB;
            });

        if (files.length === 0) {
            console.error("❌ No seed files found matching 'rpg_questions_seed_part*.sql' in scripts directory.");
            process.exit(1);
        }

        console.log(`Found ${files.length} seed files.`);

        // First, verify we can query
        try {
            await client.query('SELECT NOW()');
        } catch (e) {
            console.error("❌ Connection failed. Please check your password.");
            throw e;
        }

        for (const file of files) {
            console.log(`Executing ${file}...`);
            const startTime = Date.now();
            const sql = fs.readFileSync(path.join(scriptDir, file), 'utf8');

            await client.query(sql);

            const duration = ((Date.now() - startTime) / 1000).toFixed(2);
            console.log(`✅ ${file} done in ${duration}s.`);
        }

        console.log("\n🎉 All questions imported successfully!");

    } catch (err) {
        console.error("\n❌ Fatal Error:", err);
    } finally {
        await client.end();
    }
}

run();
