const mysql = require('mysql2/promise');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
        const connection = await mysql.createConnection({
            host: 'db5014446249.hosting-data.io', // Укажите хост MySQL
            user: 'dbu916338', // Укажите пользователя MySQL
            password: 'juli6SE0KtmuA#8!DB', // Укажите пароль MySQL
            database: 'julimagineDB', // Укажите имя вашей базы данных
        });

        const { name, email, subject, message } = req.body;
        const createdAt = new Date().toISOString();

        const [results] = await connection.query(
            'INSERT INTO messages (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, ?)',
            [name, email, subject, message, createdAt]
        );

        res.status(200).json({ message: 'Data saved successfully' });
        } catch (error) {
        console.error('Error while saving data:', error);
        res.status(500).json({ message: 'An error occurred while saving data' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
