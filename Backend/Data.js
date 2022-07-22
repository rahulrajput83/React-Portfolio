/* Imports Mongoose */
const mongoose = require('mongoose');

/* Mongoose Schema */
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    Subject: String,
    message: String
});

/* Creates Mongoose Model */
const ContactForm = mongoose.model("Contact Form", contactSchema);

/* Export Module */
module.exports = ContactForm;

const getPost = new mongoose.Schema({
    title: String,
    cover: String,
    description: String,
    codelink: String,
    demolink: String
});

/* Creates Mongoose Model */
const Projects = mongoose.model("Projects", getPost);

/* Export Module */
module.exports = Projects;