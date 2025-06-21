import sql from 'mssql';

let config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
  pool: {
    max: 100,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

let pool;

export let getPool = async () => {
  if (!pool) {
    pool = await sql.connect(config);
    console.log('MSSQL pool created');
  }
  return pool;
};