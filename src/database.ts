import { createPool } from 'mysql2/promise';

export async function connect() {
    const connection = createPool({
        host: '',
        user: '',
        database: '',
        connectionLimit: 10,
        multipleStatements: true,
        supportBigNumbers: true,
        bigNumberStrings: true,
        typeCast: true
    })
    return connection;
}