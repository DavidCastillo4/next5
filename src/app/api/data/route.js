import { getPool } from '@/lib/data/db';

export async function POST() {
 try {
  const pool = await getPool();
  let qry = `SELECT TOP 10 c.ClientId, c.ClientName FROM dbo.Client c ORDER BY c.ClientId`
  const result = await pool.request().query(qry);
  return Response.json(result.recordset);
 } catch (err) { return Response.json({ error: err.message }, { status: 500 }); }
};

