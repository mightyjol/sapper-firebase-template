const config = {
	"apiKey": "AIzaSyB_1TQvku6kRj1xGgNgyu9aA-RwlK-HOsA",
    "authDomain": "doctor-84be5.firebaseapp.com",
    "databaseURL": "https://doctor-84be5.firebaseio.com",
    "projectId": "doctor-84be5",
    "storageBucket": "doctor-84be5.appspot.com",
    "messagingSenderId": "516365878545",
    "appId": "1:516365878545:web:86f90e0690b44b82"
};
 
import { authState } from 'rxfire/auth';
import { map } from 'rxjs/operators';
 
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let app = firebase.initializeApp(config);

export const auth = firebase.auth(app);
export const db = firebase.firestore(app);
export const user = authState(app).pipe(map( u => u ? u : null));

export const logout = () => auth.logout();
export const login = (email, password) => {
	return auth.signInWithEmailAndPassword(email, password);
};

export const signup = (email, password) => {
	//TODO call to server
	return auth.createUserWithEmailAndPassword(email, password);
}
