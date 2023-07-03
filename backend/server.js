const express = require( 'express' );
const dotenv = require( 'dotenv' ).config();
const path = require( 'path' );
const connectDB = require( './config/db' );
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', require('./routes/taskRoutes'));

app.get('/', (req, res) => {
    res.end('<h1>Task Logger Home Page</h1>');
});

app.listen( PORT, () => console.log(`Server running on port ${PORT}`) );