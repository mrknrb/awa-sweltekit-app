<script lang="ts">
	import DiagramTitle from './DiagramTitle.svelte';
	import { saveDataMainStore, saveDataMainStoreReducers } from '../Store/StoreSaveData';
	import { onMount } from 'svelte';
	import { BrowserStoreReducers } from '../../Browser/Store/BrowserStore';

	let title = '';
	saveDataMainStore.subscribe((value) => {
		title = value.title;
	});
</script>

<DiagramTitle title="Basic Info" />
<div>
	<b> Title </b>

	<input
		type="text"
		class="text-3xl"
		bind:value={title}
		on:change={(event) => {
			saveDataMainStoreReducers.changeTitle(title);
		}}
	/>
</div>
