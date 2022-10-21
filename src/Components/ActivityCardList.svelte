<script lang="ts">
	import ActivityCard from './ActivityCard.svelte';
	import { saveDataMainStore, saveDataMainStoreReducers } from '../Store/StoreSaveData';
</script>

<div class=" w-full  flex flex-wrap " style="">
	{#each $saveDataMainStore.activityList as data, i}
		<ActivityCard activityType={data.activityType} activitySaveData={data} />
	{/each}
</div>
