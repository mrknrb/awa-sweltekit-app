<script lang="ts">
	import ActivityCard from './ActivityCard.svelte';
	import { saveDataMainStore, saveDataMainStoreReducers } from '../Store/StoreSaveData';
	import MdAdd from 'svelte-icons/md/MdAdd.svelte';
	import { tempDataStoreReducers } from '../Store/StoreTempData';
	import DiagramTitle from './DiagramTitle.svelte';
</script>

<DiagramTitle title="Activity list" />
<div class=" w-11/12  flex flex-wrap" style="">
	{#each $saveDataMainStore.activityList as data, i}
		<ActivityCard activityType={data.activityType} activitySaveData={data} />
	{/each}
	<div
		class="h-12 w-12 bg-blue-300 m-auto"
		on:click={() => {
			tempDataStoreReducers.activityPickerActivate(true);
		}}
	>
		<MdAdd />
	</div>
</div>
