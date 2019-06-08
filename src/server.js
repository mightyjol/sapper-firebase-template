import express from 'express';
import sirv from 'sirv';
//import { v4 as uuid } from 'uuid';
import session from 'express-session';
import bodyParser from 'body-parser';

import admin from './firebase/admin.js';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const server = express(); // You can also use Express

if(dev) server.use(sirv('static', { dev }));

server.use(
	//compression({ threshold: 0 }),
	bodyParser.json(),
	session({
		secret: 'test',
		resave: false,
		saveUninitialized: false
	}),
	sapper.middleware({
		session: (req, res) => {
			return {}
		}
	})
);

if(dev){
	// only listen when started in dev
	server.listen(PORT, err => {
	    if (err) console.log('error', err);
	});
}

export { server };
