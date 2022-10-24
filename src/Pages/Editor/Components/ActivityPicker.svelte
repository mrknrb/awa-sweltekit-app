<script lang="ts">
	import ActivityGroup from './ActivityGroup.svelte';
	import { globalStaticData } from '../Store/GlobalStaticData.js';
	import { storeTempData, tempDataStoreReducers } from '../Store/StoreTempData';

	$: active = $storeTempData.activityPickerActive;
	$: activeText = active ? 'fixed' : 'hidden';
</script>

<div
	class=" absolute  bg-gray-500 bg-opacity-60 {activeText} backdrop-blur-md z-50 w-full h-full "
	on:click={() => {
		tempDataStoreReducers.activityPickerActivate(false);
	}}
>
	<div class="fixed h-5/6 float-left overflow-auto  m-auto mt-10 w-full max-w-max">
		{#each globalStaticData.activityGroups as group, i}
			<ActivityGroup groupData={group} />
		{/each}
	</div>
</div>
