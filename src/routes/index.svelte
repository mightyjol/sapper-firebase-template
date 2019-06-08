<script>
	import { stores } from "@sapper/app"
	import { onMount } from "svelte"

	const { session } = stores()
	$:user = $session.user

	let client;

	onMount(async () => {
		if(process.browser){
			client = await import("../firebase/firebase.js") 
			console.error(client)
		}
	})
	
	function login(){
		console.error(client)
		client.loginWithEmail('test@test.com', 'testing').then((u) => {
			console.error('logged', $session.user)
		})
	}

	function logoutNow(){
		client.logout().then(() => {
			console.error('logged out')
		});		 
	}
</script>

<h1>Home</h1>
<button on:click="{login}" class="button">Login</button>

{#if user}
	You are logged in as : {user.uid}
	<br>
	<button on:click="{logoutNow}" class="button">Logout</button>
{:else}
	You are not logged in
{/if}