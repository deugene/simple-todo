"use strict";
const express_1 = require('express');
const todos_1 = require('./controllers/todos');
const jwt = require('express-jwt');
const cors = require('cors');
let router = express_1.Router();
// auth
const auth0ClientId = process.env.AUTH0_CLIENT_ID;
const auth0ClientSecret = process.env.AUTH0_CLIENT_SECRET;
router.use(cors());
const authCheck = jwt({
    secret: new Buffer(auth0ClientSecret, 'base64'),
    audience: auth0ClientId
});
router.all('/api/*', authCheck);
// API
// todos
router.get('/api/todos/:user_id', todos_1.todos.getAll);
router.get('/api/todo/:id', todos_1.todos.getTodo);
router.post('/api/todo', todos_1.todos.create);
router.put('/api/todo/:id', todos_1.todos.update);
router.put('/api/todos/:user_id', todos_1.todos.updateAll);
router.delete('/api/todo/:id', todos_1.todos.delete);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
