"use strict";
const express_1 = require('express');
const todos_1 = require('./controllers/todos');
const jwt = require('express-jwt');
const cors = require('cors');
let router = express_1.Router();
// import auth0 config
let auth0ClientSecret;
let auth0ClientId;
let auth0Domain;
if (process.env.NODE_ENV === 'development') {
    const auth0 = require('./auth0.config');
    auth0Domain = auth0.domain;
    auth0ClientId = auth0.clientId;
    auth0ClientSecret = auth0.clientSecret;
}
else {
    auth0Domain = process.env.AUTH0_DOMAIN;
    auth0ClientId = process.env.AUTH0_CLIENT_ID;
    auth0ClientSecret = process.env.AUTH0_CLIENT_SECRET;
}
router.use(cors());
const authCheck = jwt({
    secret: new Buffer(auth0ClientSecret, 'base64'),
    audience: auth0ClientId
});
router.get('/api/config', (req, res) => {
    res.json({ domain: auth0Domain, clientId: auth0ClientId });
});
// API
// todos
router.all('/api/*', authCheck);
router.get('/api/todos/:user_id', todos_1.todos.getAll);
router.get('/api/todo/:id', todos_1.todos.getTodo);
router.post('/api/todo', todos_1.todos.create);
router.put('/api/todo/:id', todos_1.todos.update);
router.put('/api/todos/:user_id', todos_1.todos.updateAll);
router.delete('/api/todo/:id', todos_1.todos.delete);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
