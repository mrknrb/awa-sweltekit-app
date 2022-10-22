<script lang="ts">
	export let name = '';
	export let src = '';
	function openPage(src: string) {
		window.open('/' + src, '_self');
	}
</script>

<div class="h-full hoverClick w-32 hover:bg-blue-300" on:click={openPage(src)}>
	<h2>{name}</h2>
</div>
