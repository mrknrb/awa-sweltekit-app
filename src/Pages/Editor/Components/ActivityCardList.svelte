<script lang="ts">
	import ActivityCard from './ActivityCard.svelte';
	import { saveDataMainStore, saveDataMainStoreReducers } from '../Store/StoreSaveData';
	import MdAdd from 'svelte-icons/md/MdAdd.svelte';
	import { tempDataStoreReducers } from '../Store/StoreTempData';
	import DiagramTitle from './DiagramTitle.svelte';
	import ActivityPicker from './ActivityPicker.svelte';
	import ActivityTimeList from './ActivityTimeList.svelte';

	let firstVisibleActivityNumber = 0;
	let firstVisibleActivityNumberCalculator = (scrollHeight: number) => {};
</script>

<div class="flex flex-row  " style="max-height: 70vh;height: 70vh">
	<ActivityTimeList />
	<div class="   flex flex-wrap overflow-auto" style="">
		{#each $saveDataMainStore.activityList as data, i}
			<ActivityCard activityType={data.activityType} activitySaveData={data} activityNumber={i} />
		{/each}
		<div class=" w-12  float-left   mrkCard ">
			<ActivityPicker />
		</div>
	</div>
</div>
