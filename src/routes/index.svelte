<script>
	import user from '../firebase/user.js';
	import LoginButton from '../components/auth/LoginButton.svelte';
	import LogoutButton from '../components/auth/LogoutButton.svelte';
</script>

<svelte:head>
	<title>doctor - home</title>
</svelte:head>

<h1>Home</h1>
{#if $user}
	logged as : {$user.uid}
	<LogoutButton />
{:else}
	<LoginButton />
{/if}
