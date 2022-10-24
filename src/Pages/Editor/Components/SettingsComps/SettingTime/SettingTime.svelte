<script lang="ts">
	import { saveDataMainStoreReducers } from '../../../Store/StoreSaveData';
	import { SaveData_Activity } from '../../../Data/SaveData/SaveData_Activity';
	import { StaticData_Activity } from '../../../Data/StaticData/StaticDataTypes/StaticData_Activity';
	import { ProductiveTypes } from '../../../Enums/ProductiveTypes';

	export let ActivityStaticData: StaticData_Activity;
	export let activitySaveData: SaveData_Activity;

	console.log(ActivityStaticData.productive);
	let changeDuration = () => {
		saveDataMainStoreReducers.changeDuration(
			activitySaveData.activityId,
			activitySaveData.duration
		);
	};
</script>

<div class="flex flex-col justify-between w-full grow ">
	<b class=" ml-2">Duration</b>
	<div class="flex flex-row justify-between w-full grow ">
		<input
			type="number"
			bind:value={activitySaveData.duration}
			on:keyup={() => {
				changeDuration();
			}}
			class="w-20 bg-transparent pl-4 font-bold rounded"
		/>
		<input
			type="button"
			value="-"
			class="justify-center rounded w-8 text-2xl font-bold    text-center cursor-pointer hoverClick"
			on:click={() => {
				activitySaveData.duration -= 15;
				changeDuration();
			}}
		/>
		<input
			type="button"
			value="+"
			class=" rounded w-8 text-2xl font-bold     text-center cursor-pointer hoverClick"
			on:click={() => {
				activitySaveData.duration += 15;
				changeDuration();
			}}
		/>
	</div>
</div>
