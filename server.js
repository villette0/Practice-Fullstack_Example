const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware allows connection to front end, public
app.use(express.static('public'));
app.use(express.json());


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Fghul34$',
        database: 'books_db'
    },
    console.log('Connected to the db.')
);

app.get('/books', (req,res) => {
    db.query('Select * from favorite_books', (err, results) => {
        console.log(results);
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}.`)
})