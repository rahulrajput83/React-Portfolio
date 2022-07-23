require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const ContactForm = require('./Contact');
const Projects = require('./Data');
const cors = require('cors')

/* Initializes express app. */
const app = express();

const DEFAULT_PORT = 2800;
app.use(cors());
app.use(express.json());
const server = app.listen(process.env.PORT || DEFAULT_PORT, function () {
    // Log a message to indicate that the server was started correctly
    const port = server.address().port;
    console.log(`Server listening on port ${port}!`);
});

mongoose.connect(process.env.connectionString)
    .then(() => {
        console.log('Mongoose Connected')
    })
    .catch(() => {
        console.log('Failed');
    });

app.post('/', (req, res) => {
    const Contact1 = new ContactForm({
        name: req.body.name,
        email: req.body.email,
        Subject: req.body.subject,
        message: req.body.message
    });
    Contact1.save().then((data) => {
        console.log('Submitted');
    });
});

app.get('/', function(req, res) {
    Projects.find({})
        .then((data) => res.send(data))
        .catch((err) => res.send(err));
});