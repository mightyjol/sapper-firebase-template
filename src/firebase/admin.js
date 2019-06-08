import serviceAccount from '../../config/serviceAccount.js';
import config from './config.js'
import * as admin from 'firebase-admin'

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: config.databaseURL
});

export default admin