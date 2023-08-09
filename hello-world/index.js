var express = require('express');
var app = express();
const {
    Client
} = require('pg');

app.listen(9001, () => {
    console.log("Server started on port 9001");
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

const client = new Client({
    user: process.env.USER,
    host: process.env.HOST, // Use the PostgreSQL container name as the hostname
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 5432, // PostgreSQL default port
});


const connectDB = async () => {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL database');
        // const result = await client.query('SELECT * FROM users');
        // console.log(result.rows);
        // ... Perform database operations ...
    } catch (err) {
        console.error('Connection error', err);
    } finally {
        await client.end();
    }
}

connectDB();