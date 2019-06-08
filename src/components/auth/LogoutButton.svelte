<script>
	import { auth } from '../../firebase/firebase.js';
	import { goto } from '@sapper/app';

	let active = false

	function logout(){
		active = true
		auth.signOut().then(() => {
			//router -> home
			goto('/');
			active = false
		})
	}

</script>

<button class:is-loading="{active}" class="button" on:click="{logout}">Logout</button>