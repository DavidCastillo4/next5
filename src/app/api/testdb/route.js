

/*
import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export async function getData() {
 try {
  const pool = await getPool();
  let qry=`SELECT TOP 10 c.ClientId, c.ClientName FROM dbo.Client c`;
  const result = await pool.request().query(qry);
  console.log(result)
  return NextResponse.json(result.recordset);
 } catch (err) {  
  return NextResponse.json({ error: 'DB Error', message: err.message }, { status: 500 });
 }
}


import { getPool } from '@/lib/db';

export async function getData() {
 let pool = await getPool();
 let qry = `SELECT TOP 10 c.ClientId, c.ClientName FROM dbo.Client c`;
 let result = await pool.request().query(qry);
 //console.log(result)
 return result.recordset;
}
*/