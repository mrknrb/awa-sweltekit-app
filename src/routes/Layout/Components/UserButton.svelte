<script lang="ts">
	import { isLoggedIn } from '../../user/Store/authStore';
	import { getAuth } from 'firebase/auth';

	let src = '';
	function openPage(src: string) {
		window.open('/' + src, '_self');
	}
	//let name = localStorage.getItem('uid');
	const auth = getAuth();
	console.log(auth);

	//localStorage.getItem('isLoggedIn');
	/*
	$: userData = () => {
		if (!$isLoggedIn) {
			return null;
		} else {
			console.log(getAuth());
			return getAuth();
		}
	};*/
</script>

<div class="h-full hoverClick w-32 hover:bg-blue-300 right-0 float-right">
	{#if $isLoggedIn}
		<h2
			on:click={() => {
				openPage('usersettings');
			}}
		>
			{auth.currentUser.email}
		</h2>
	{:else}
		<h2
			on:click={() => {
				openPage('login');
			}}
		>
			{'Login'}
		</h2>
	{/if}
</div>
