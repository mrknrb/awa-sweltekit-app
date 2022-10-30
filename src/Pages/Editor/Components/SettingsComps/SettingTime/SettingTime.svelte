<script lang="ts">
	import { saveDataMainStoreReducers } from '../../../Store/StoreSaveData';
	import { SaveData_Activity } from '../../../Data/SaveData/SaveData_Activity';
	import { StaticData_Activity } from '../../../Data/StaticData/StaticDataTypes/StaticData_Activity';
	import UnitChanger from '../../ComponentsGeneral/UnitChanger.svelte';
	import { timeUnitsArray } from '../../../../../Egyebek/TimeUnit/timeUnitsArray';
	import { TimeFunctions } from '../../../../../Functions/TimeFunctions';
	import { TimeUnits } from '../../../../../Egyebek/TimeUnit/TimeUnits';

	export let ActivityStaticData: StaticData_Activity;
	export let activitySaveData: SaveData_Activity;

	let basicTime = 0;
	let units = timeUnitsArray;
	let changeUnit_id = units[0]._id;
	$: changeUnit_id = activitySaveData?.timeUnit;
	if (typeof activitySaveData?.time === 'number') {
		basicTime = activitySaveData?.time;
	}
	$: displayedTime = TimeFunctions.MinuteToHourMinute(
		TimeFunctions.BasicToUnit(activitySaveData?.time, changeUnit_id)
	);
	//	$: basicTime = TimeFunctions.UnitToBasic(displayedTime, changeUnit_id);
	let changeUnit = (unit: TimeUnits) => {
		changeUnit_id = unit;
		console.log(unit);
		saveDataMainStoreReducers.changeActivity(activitySaveData.activityId, (saveData) => {
			saveData.timeUnit = changeUnit_id;
			return saveData;
		});
	};

	let changeTime = () => {
		saveDataMainStoreReducers.changeActivity(activitySaveData.activityId, (saveData) => {
			saveData.time = basicTime;
			return saveData;
		});
	};
</script>

<div class="flex flex-col justify-between w-full grow ">
	<b class=" ml-2">Duration</b>
	<div class="flex flex-row justify-between w-full grow ">
		<input
			type="text"
			pattern="[0-9]{2}:[0-9]{2}"
			value={displayedTime}
			on:keyup={() => {
				changeTime();
			}}
			class="w-16 bg-transparent pl-4 font-bold rounded"
		/>

		<UnitChanger
			unitsData={timeUnitsArray}
			value={changeUnit_id}
			on:changed={(event) => {
				changeUnit(event.detail.value);
			}}
		/>
		<input
			type="button"
			value="-"
			class="justify-center rounded w-8 text-2xl font-bold    text-center cursor-pointer hoverClick"
			on:click={() => {
				basicTime -= 15;
				changeTime();
			}}
		/>
		<input
			type="button"
			value="+"
			class=" rounded w-8 text-2xl font-bold     text-center cursor-pointer hoverClick"
			on:click={() => {
				basicTime += 15;
				changeTime();
			}}
		/>
	</div>
</div>
