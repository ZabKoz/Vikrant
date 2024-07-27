const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.json({
        success: 'OK!'
    });
});

// Momentary port setup
const PORT = 3001;

if (!process.env.MONGODB_URL) {
    // Displaying an error that there is no configuration set in the '.env' file
    throw new Error('MONGODB_URL request in .env!');
}

// Create a connection to the mongoose database
mongoose.connect(process.env.MONGODB_URL).then(() => {
    // Setting the page response on the port
    app.listen(PORT, () => {
        // Displaying information that the page responds on the port specified in the configuration
        console.log(`Listening on porty ${PORT}`);
    });
});
