<script>
	import { loginTest } from '../../firebase/firebase.js';

	let loading = false;

	function login(){
		loading = true;
		loginTest()
		.then(() => {
			loading = false;
		})
		.catch(e => {
			loading = false;
			//todo have some kind of gracefull error handling
		});
	}

</script>

<button class:is-loading="{loading}" class="button" on:click="{login}">Login</button>