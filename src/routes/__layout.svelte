<script lang="ts">
	import '../app.css';
	import '../scrollbar.css';

	import { storeTempData } from '../Store/StoreTempData';

	function mouseDownUpUpdate(down: boolean) {
		storeTempData.update((data) => {
			let data2 = data;
			data2.mouseDown = down;
			return data2;
		});
	}
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
	</style>
</svelte:head>

<header class="bg-amber-500 h-10">
	<div style="height: 50px" />
</header>

<div
	on:mouseup={() => {
		mouseDownUpUpdate(false);
	}}
	on:mousedown={() => {
		mouseDownUpUpdate(true);
	}}
	style="height: calc(100% - 50px);width: 100%"
	class=""
>
	<slot />
</div>
