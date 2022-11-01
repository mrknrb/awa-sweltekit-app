<script lang="ts">
	import { globalStaticData } from '../Store/GlobalStaticData.js';
	import { storeTempData, tempDataStoreReducers } from '../Store/StoreTempData';
	import ActivityPickerCard from './ActivityPickerCard.svelte';
	import { staticDataActivityGroups } from '../Data/StaticData/StaticDataActivityGroups';
	import { staticDataActivities } from '../Data/StaticData/StaticDataActivities';

	$: active = $storeTempData.activityPickerActive ? 'flex' : 'hidden';
</script>

<div
	class="fixed w-full h-full  {active} z-50 bg-gray-600 bg-opacity-80 "
	style="flex-wrap: wrap;flex-direction: column"
	on:click={() => {
		tempDataStoreReducers.activityPickerActivate(false);
	}}
>
	<div class="w-full h-5/6 flex flex-col overflow-auto">
		{#each staticDataActivityGroups as activityGroup, i}
			<div style="background-color: {staticDataActivityGroups[i].color}">
				{#each staticDataActivities as activity, e}
					{#if staticDataActivities[e].activityGroup === staticDataActivityGroups[i].activityGroupType}
						<ActivityPickerCard activityType={activity.activityType} />
					{/if}
				{/each}
			</div>
		{/each}
	</div>
</div>
