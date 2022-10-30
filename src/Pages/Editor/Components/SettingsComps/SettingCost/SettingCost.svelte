<script lang="ts">
	import { saveDataMainStoreReducers } from '../../../Store/StoreSaveData';
	import { SaveData_Activity } from '../../../Data/SaveData/SaveData_Activity';
	import { StaticData_Activity } from '../../../Data/StaticData/StaticDataTypes/StaticData_Activity';

	export let ActivityStaticData: StaticData_Activity;
	export let activitySaveData: SaveData_Activity;

	let cost = 0;

	if (typeof activitySaveData?.cost === 'number') {
		cost = activitySaveData?.cost;
	}
	let changeCost = () => {
		saveDataMainStoreReducers.changeActivity(activitySaveData.activityId, (saveData) => {
			saveData.cost = cost;
			return saveData;
		});
	};
</script>

<div class="flex flex-col justify-between w-full grow ">
	<b class=" ml-2">Cost</b>
	<div class="flex flex-row justify-between w-full grow ">
		<input
			type="number"
			bind:value={cost}
			on:keyup={() => {
				changeCost();
			}}
			class="w-20 bg-transparent pl-4 font-bold rounded"
		/>
		<input
			type="button"
			value="-"
			class="justify-center rounded w-8 text-2xl font-bold    text-center cursor-pointer hoverClick"
			on:click={() => {
				cost -= 5;
				changeCost();
			}}
		/>
		<input
			type="button"
			value="+"
			class=" rounded w-8 text-2xl font-bold     text-center cursor-pointer hoverClick"
			on:click={() => {
				cost += 5;
				changeCost();
			}}
		/>
	</div>
</div>
