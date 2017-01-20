import { Router } from 'express';

import { todos } from './controllers/todos';

import * as jwt from 'express-jwt';
import * as cors from 'cors';

let router = Router();

// auth
const auth0ClientId = process.env.AUTH0_CLIENT_ID;
const auth0ClientSecret = process.env.AUTH0_CLIENT_SECRET;

router.use(cors());

const authCheck = jwt({
  secret: new Buffer(auth0ClientSecret, 'base64'),
  audience: auth0ClientId
});

router.all ('/api/*', authCheck);

// API

// todos
router.get('/api/todos/:user_id', todos.getAll);
router.get('/api/todo/:id', todos.getTodo);
router.post('/api/todo', todos.create);
router.put('/api/todo/:id', todos.update);
router.put('/api/todos/:user_id', todos.updateAll);
router.delete('/api/todo/:id', todos.delete);

export default router;
