/* Imports Mongoose */
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    feedback: String,
});

/* Creates Mongoose Model */
const Feedback = mongoose.model("Feedback", feedbackSchema);

/* Export Module */
module.exports = Projects;