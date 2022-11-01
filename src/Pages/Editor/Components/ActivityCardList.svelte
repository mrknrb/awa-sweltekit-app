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

<div class="flex flex-row  " style="max-height: calc(100vh - 50px);calc(100vh - 50px)">
	<ActivityTimeList />
	<div class="   flex flex-wrap overflow-auto content-start " style="">
		{#each $saveDataMainStore.activityList as data, i}
			<ActivityCard activityType={data.activityType} activitySaveData={data} activityNumber={i} />
		{/each}
		<!--	<div class=" w-12  float-left   mrkCard ">
			<ActivityPicker />
		</div>-->
		<div class=" w-12 h-72      " />
	</div>
</div>
