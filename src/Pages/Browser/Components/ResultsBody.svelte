<script lang="ts">
	import { onMount } from 'svelte';
	import queryString from 'query-string';
	import { BrowserStoreReducers } from '../Store/BrowserStore';
	import { LifeStyleBasicData } from '../Data/LifeStyleBasicData';
	import Result from './Result.svelte';
	export let name = '';
	export let src = '';
	let lifeStyleList: LifeStyleBasicData[] = [];
	onMount(async () => {
		/*	console.log(location.search);
		const parsed = queryString.parse(location.search);
		console.log(parsed);
		parsed.uu = 234;
		parsed.hgh = 4;
		const stringified = queryString.stringify(parsed);
*/
		lifeStyleList = await BrowserStoreReducers.loadLifestyleList({});
	});
</script>

<div class="h-full hoverClick w-full ">
	{#each lifeStyleList as lifeStyle, i}
		<Result lifeStyleBasicData={lifeStyleList[i]} />
	{/each}
</div>
