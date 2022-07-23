/* Imports Mongoose */
const mongoose = require('mongoose');

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