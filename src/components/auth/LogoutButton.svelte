<script>
	import { auth } from '../../firebase/firebase.js';
	import { goto } from '@sapper/app';

	function logout(){
		auth.signOut().then(() => {
			//router -> home
			goto('/');
		})
	}

</script>

<button class="button" on:click="{logout}">Logout</button>