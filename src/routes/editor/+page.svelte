<!--<link href="https://unpkg.com/mono-icons@1.3.1/iconfont/icons.css" rel="stylesheet">-->
<script lang="ts">
	import TopBar from '../../Pages/Editor/Components/TopBar.svelte';
	import DiagramBody from '../../Pages/Editor/Components/DiagramBody.svelte';
	import { onMount } from 'svelte';
	import { BrowserStoreReducers } from '../../Pages/Browser/Store/BrowserStore';
	import queryString from 'query-string';
	import { saveDataMainStoreReducers } from '../../Pages/Editor/Store/StoreSaveData';

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
