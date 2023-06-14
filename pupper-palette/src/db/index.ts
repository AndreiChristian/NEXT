import { Pool } from "pg";

const { PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } = process.env;

const pool = new Pool({
  user: PGUSER,
  host: PGHOST,
  database: PGDATABASE,
  password: PGPASSWORD,
  port: +PGPORT!,
});

export const query = (text: string, params: any[]) => pool.query(text, params);
