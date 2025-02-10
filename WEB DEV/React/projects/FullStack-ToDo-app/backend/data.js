//creating the schema for database and data storage
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shubham:Ankush%402508@ankush.qm41n.mongodb.net/todos');
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed:Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
} 