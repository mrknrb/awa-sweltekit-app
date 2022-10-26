<script lang="ts">
	import '../app.css';
	import '../scrollbar.css';
	import PageButton from '../Pages/Layout/Components/PageButton.svelte';

	import firebaseApp from './fb';

	import { onMount } from 'svelte';

	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '../Pages/User/Store/authStore';
	import UserButton from '../Pages/Layout/Components/UserButton.svelte';

	onMount(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('Welcome to NGFX');
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

<header class="bg-blue-200 sticky">
	<div style="height: 50px" class="flex flex-row">
		<PageButton name="Freebird Academy" src="" />
		<PageButton name="Browser" src="browser" />
		<PageButton name="Editor" src="editor" />
		<UserButton />
	</div>
</header>

<div class="justify-center m-auto">
	<slot />
</div>
