<script lang="ts">
	import { globalStaticData } from '../Store/GlobalStaticData.js';
	import { storeTempData, tempDataStoreReducers } from '../Store/StoreTempData';
	import ActivityPickerCard from './ActivityPickerCard.svelte';

	$: active = $storeTempData.activityPickerActive;
</script>

<div style="display: flex;justify-content:center ;flex-wrap: wrap;flex-direction: column">
	{#each globalStaticData.activities as activity, i}
		<ActivityPickerCard activityType={activity.activityType} />
	{/each}
</div>
