<script lang="ts">
	import ActivityCard from './ActivityCard.svelte';
	import { saveDataMainStore, saveDataMainStoreReducers } from '../Store/StoreSaveData';
	import MdAdd from 'svelte-icons/md/MdAdd.svelte';
	import { tempDataStoreReducers } from '../Store/StoreTempData';
	import DiagramTitle from './DiagramTitle.svelte';
	import ActivityTimeList from './ActivityTimeList.svelte';
</script>

<DiagramTitle title="Activity list" />
<div class="flex flex-row  " style="max-height: 70vh">
	<ActivityTimeList />
	<div class=" w-11/12  flex flex-wrap overflow-auto" style="">
		{#each $saveDataMainStore.activityList as data, i}
			<ActivityCard activityType={data.activityType} activitySaveData={data} activityNumber={i} />
		{/each}
		<div
			class=" w-12 bg-gray-300 float-left  hover:brightness-110  mrkCard opacity-60"
			on:click={() => {
				tempDataStoreReducers.activityPickerActivate(true);
			}}
		>
			<MdAdd />
		</div>
	</div>
</div>
