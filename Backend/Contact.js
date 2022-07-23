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