import config from '../config/firebase.js'
 
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

let app = firebase.initializeApp(config)

export const userKey = {};
export const auth = app.auth()
export const db = app.firestore()

export const login = (email, password) => {
    console.log('logging in under ', email, password);
	return auth.signInWithEmailAndPassword(email, password)
    .then(data => console.log('finished logging in:', data))
    .catch(e => console.error(e))
}

export const loginTest = () => {
    return login('test@test.com', 'testing')
}

export const signup = (email, password) => {
	//TODO call to server
	return auth.createUserWithEmailAndPassword(email, password)
}