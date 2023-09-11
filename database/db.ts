import mysql, { Connection } from 'mysql2';

const connection: Connection = mysql.createConnection({
    host: 'db5014446249.hosting-data.io',
    user: 'dbu916338',
    password: 'juli6SE0KtmuA#8!DB',
    database: 'dbs12012481',
});

connection.connect((err) => {
    if (err) {
        console.error('Eror:', err);
    } else {
        console.log('Connection succeeded');
    }
});

export default connection;
