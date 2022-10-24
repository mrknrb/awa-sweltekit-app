<script lang="ts">
	import DiagramTitle from './DiagramTitle.svelte';
	import { saveDataMainStore, saveDataMainStoreReducers } from '../Store/StoreSaveData';
	import { onMount } from 'svelte';
	import { BrowserStoreReducers } from '../../Browser/Store/BrowserStore';

	$: title = $saveDataMainStore.title;
</script>

<DiagramTitle title="Basic Info" />
<div>
	<b> Title </b>

	<input
		type="text"
		class="text-3xl"
		value={title}
		on:change={() => {
			saveDataMainStoreReducers.changeTitle(title);
		}}
	/>
</div>
