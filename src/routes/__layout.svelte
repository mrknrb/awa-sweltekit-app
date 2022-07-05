<script>
	import '../app.css';
	import '../scrollbar.css';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
	</style>
</svelte:head>

<header class="bg-amber-500 h-10">
	<div style="height: 50px" />
</header>

<div style="height: calc(100% - 50px);width: 100%" class="">
	<slot />
</div>
