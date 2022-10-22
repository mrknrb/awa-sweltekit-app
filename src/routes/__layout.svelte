<script lang="ts">
	import '../app.css';
	import '../scrollbar.css';
	import PageButton from '../Pages/Layout/Components/PageButton.svelte';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
	</style>
</svelte:head>

<header class="bg-amber-500 h-10">
	<div style="height: 50px" class="flex flex-row">
		<PageButton name="DIY LifeStyle" src="" />
		<PageButton name="Editor" src="editor" />
	</div>
</header>

<div style="height: calc(100% - 50px);width: 100%" class="">
	<slot />
</div>
