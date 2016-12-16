import { Router } from 'express';

import { todos } from './controllers/todos';

import * as jwt        from 'express-jwt';
import * as cors       from 'cors';

let router = Router();

// import auth0 config
let auth0ClientSecret: string;
let auth0ClientId: string;
let auth0Domain: string;

if (process.env.NODE_ENV === 'development') {
  const auth0 = require('./auth0.config');
  auth0Domain = auth0.domain;
  auth0ClientId = auth0.clientId;
  auth0ClientSecret = auth0.clientSecret;
} else {
  auth0Domain = process.env.AUTH0_DOMAIN;
  auth0ClientId = process.env.AUTH0_CLIENT_ID;
  auth0ClientSecret = process.env.AUTH0_CLIENT_SECRET;
}

router.use(cors());

const authCheck = jwt({
  secret: new Buffer(auth0ClientSecret, 'base64'),
  audience: auth0ClientId
});

router.get ('/api/config', (req, res) => {
  res.json({ domain: auth0Domain, clientId: auth0ClientId });
});

// API

// todos

router.all   ('/api/*',              authCheck);
router.get   ('/api/todos/:user_id', todos.getAll);
router.get   ('/api/todo/:id',       todos.getTodo);
router.post  ('/api/todo',           todos.create);
router.put   ('/api/todo/:id',       todos.update);
router.put   ('/api/todos/:user_id', todos.updateAll);
router.delete('/api/todo/:id',       todos.delete);

export default router;
