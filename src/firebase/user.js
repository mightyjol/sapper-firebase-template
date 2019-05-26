import { readable } from 'svelte/store';
import { auth } from './firebase.js';

export default readable(null, function start(set) {
	auth.onAuthStateChanged(user => {
		set(user);
	});

	return function stop() {};
});
