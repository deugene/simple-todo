"use strict";
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
;
const todoSchema = new mongoose.Schema({
    todo: String,
    done: Boolean,
    user_id: String,
    added: Number
});
exports.Todo = mongoose.model('Todo', todoSchema);
;
new Date();
