<script lang="ts">
	import '../app.css';
	import '../scrollbar.css';
	import PageButton from './Layout/Components/PageButton.svelte';

	import { onMount } from 'svelte';

	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { isLoggedIn } from './user/Store/authStore';
	import UserButton from './Layout/Components/UserButton.svelte';
	import firebaseApp from '../Egyebek/FirebaseInit';

	firebaseApp;
	onMount(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('Logged in');
				isLoggedIn.update(() => true);
			} else {
				isLoggedIn.update(() => false);
				//	goto('/login');
				//	window.open('/login', '_blank');
			}
		});
	});
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
	</style>
</svelte:head>

<header class=" sticky ">
	<div style="height: 50px" class="  flex flex-row overflow-hidden">
		<div
			class="h-full  w-24  flex flex-row justify-center flex-wrap content-center hover:backdrop-brightness-110"
			on:click={() => {
				window.open('/', '_self');
			}}
		>
			<img src="images/logo3.png" class="" />
		</div>

		<PageButton name="Life Browser" src="browser" />
		<PageButton name="New Life" src="editor" />
		<PageButton name="Handbook" src="handbook" />
		<UserButton />
	</div>
</header>

<div class="justify-center m-auto">
	<slot />
</div>
