import auth from './auth.js'

export const loginWithEmail = async (email, password) => {
    console.log('logging in under ', email, password);

	let promise = auth.signInWithEmailAndPassword(email, password)

	promise
	.then(data => console.log('finished logging in:', data))
    .catch(e => console.error(e))
   
	return promise;
}

export const logout = () => {
    console.log('logging out');
	return auth.signOut();
}

