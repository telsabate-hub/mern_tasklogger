const express = require( 'express' );
const dotenv = require( 'dotenv' ).config();
const path = require( 'path' );
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.end('<h1>Task Logger Home Page</h1>');
});

app.listen( PORT, () => console.log(`Server running on port ${PORT}`) );