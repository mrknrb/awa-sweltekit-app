<script lang="ts">
	import { saveDataMainStoreReducers } from '../../../Store/StoreSaveData';
	import { SaveData_Activity } from '../../../Data/SaveData/SaveData_Activity';
	import { StaticData_Activity } from '../../../Data/StaticData/StaticDataTypes/StaticData_Activity';
	import UnitChanger from '../../ComponentsGeneral/UnitChanger.svelte';
	import { timeUnitsArray } from '../../../Enums/TimeUnit/timeUnitsArray';
	import { TimeFunctions } from '../../../Functions/TimeFunctions';
	import { TimeUnits } from '../../../Enums/TimeUnit/TimeUnits';

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
	<div class="flex flex-row  w-full grow">
		<input
			type="text"
			pattern="[0-9]{2}:[0-9]{2}"
			value={displayedTime}
			on:keyup={() => {
				changeTime();
			}}
			class="w-14 bg-transparent  pl-2 font-bold  ActivityCardElem"
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
			class="justify-center  w-8 text-2xl font-bold    text-center ActivityCardElem"
			on:click={() => {
				basicTime -= 15;
				changeTime();
			}}
		/>
		<input
			type="button"
			value="+"
			class="  w-8 text-2xl font-bold     text-center ActivityCardElem"
			on:click={() => {
				basicTime += 15;
				changeTime();
			}}
		/>
	</div>
</div>
