<script lang="ts">
	import ActivityGroup from './ActivityGroup.svelte';
	import { globalStaticData } from '../Store/GlobalStaticData.js';
	import {
		storeTempData,
		storeTempDataActual,
		tempDataStoreReducers
	} from '../Store/StoreTempData';

	$: active = $storeTempData.activityPickerActive;
	$: activeText = active ? 'fixed' : 'hidden';
</script>

<div
	class="h-full   w-full bg-gray-500 bg-opacity-60 {activeText} "
	on:click={() => {
		tempDataStoreReducers.activityPickerActivate(false);
	}}
>
	<div class="h-5/6 float-left overflow-auto absolute w-9/12 m-auto mt-10 left-0 right-0 ">
		{#each globalStaticData.activityGroups as group, i}
			<ActivityGroup groupData={group} />
		{/each}
	</div>
</div>
