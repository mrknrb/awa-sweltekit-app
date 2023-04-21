<!--<link href="https://unpkg.com/mono-icons@1.3.1/iconfont/icons.css" rel="stylesheet">-->
<script lang="ts">
	import TopBar from './Components/TopBar.svelte';
	import DiagramBody from './Components/DiagramBody.svelte';
	import { onMount } from 'svelte';
	import { BrowserStoreReducers } from '../browser/Store/BrowserStore';
	import queryString from 'query-string';
	import { saveDataMainStoreReducers } from './Store/StoreSaveData';

	onMount(async () => {
		const parsed = queryString.parse(location.search);

		if (parsed.id) {
			await saveDataMainStoreReducers.loadData(JSON.stringify(parsed.id));
		}
	});
</script>

<div class="h-full max-h-full w-full max-w-full min-h-full min-w-full relative">
	<DiagramBody />
</div>
<TopBar />
