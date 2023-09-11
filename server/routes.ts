import express from 'express';
import cors from 'cors';
import db from '../database/db';

const app = express();
app.use(cors()); // Используйте cors

app.post('/submit-form', (req, res) => {
    const { name, email, subject, message } = req.body;

    const sql = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
    const values = [name, email, subject, message];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error when executing SQL query:', err);
            res.status(500).send('An error occurred while processing data');
        } else {
            console.log('Data has been successfully added to the messages table');
            res.status(200).send('Data has been successfully added to the database');
        }
    });
});

export default app;