<script lang="ts">
	import { saveDataMainStore, saveDataMainStoreReducers } from '../../../Store/StoreSaveData';
	import { SaveData_Activity } from '../../../Data/SaveData/SaveData_Activity';
	import { StaticData_Activity } from '../../../Data/StaticData/StaticDataTypes/StaticData_Activity';
	import { timeUnitsArray } from '../../../Enums/TimeUnit/timeUnitsArray';
	import UnitChanger from '../../ComponentsGeneral/UnitChanger.svelte';
	import { TimeUnits } from '../../../Enums/TimeUnit/TimeUnits';
	import { TimeFunctions } from '../../../Functions/TimeFunctions';
	import { moneyUnitsArray } from '../../../Enums/MoneyUnit/MoneyUnitsArray';
	import { MoneyUnits } from '../../../Enums/MoneyUnit/MoneyUnits';
	import { MoneyTimeFunctions } from '../../../Functions/MoneyTimeFunctions';

	export let ActivityStaticData: StaticData_Activity;
	export let activitySaveData: SaveData_Activity;

	let basicCost = 0;

	let TimeUnitChangeID = timeUnitsArray[0]._id;
	$: TimeUnitChangeID = activitySaveData?.moneyTimeUnit;

	if (typeof activitySaveData?.money === 'number') {
		basicCost = activitySaveData?.money;
	}

	$: displayedMoney = TimeFunctions.BasicToUnit(activitySaveData?.money, TimeUnitChangeID);

	let changeMoneyTimeUnit = (unit: TimeUnits) => {
		TimeUnitChangeID = unit;

		saveDataMainStoreReducers.changeActivity(activitySaveData.activityId, (saveData) => {
			saveData.moneyTimeUnit = TimeUnitChangeID;
			return saveData;
		});
	};

	let MoneyUnitChangeID = moneyUnitsArray[0]._id;
	$: MoneyUnitChangeID = activitySaveData?.moneyTimeUnit;

	$: displayedWorkTime = TimeFunctions.MinuteToHourMinute(
		MoneyTimeFunctions.moneyToWorkMinutes($saveDataMainStore.earnings, displayedMoney)
	);

	let changeMoneyUnit = (unit: MoneyUnits) => {
		MoneyUnitChangeID = unit;
		saveDataMainStoreReducers.changeActivity(activitySaveData.activityId, (saveData) => {
			saveData.moneyUnit = MoneyUnitChangeID;
			return saveData;
		});
	};

	let changeCost = () => {
		saveDataMainStoreReducers.changeActivity(activitySaveData.activityId, (saveData) => {
			saveData.money = basicCost;
			return saveData;
		});
	};
</script>

<div class="flex flex-col justify-between w-full grow ">
	<div class="flex flex-row  w-full grow ">
		<input
			type="number"
			value={displayedMoney}
			on:keyup={() => {
				changeCost();
			}}
			class="w-14 bg-transparent pl-2 font-bold  ActivityCardElem"
		/>
		<input
			type="text"
			value={displayedWorkTime}
			on:keyup={() => {
				changeCost();
			}}
			class="w-14 bg-transparent  font-bold  ActivityCardElem"
		/>
		<UnitChanger
			unitsData={timeUnitsArray}
			value={TimeUnitChangeID}
			on:changed={(event) => {
				changeMoneyTimeUnit(event.detail.value);
			}}
		/>

		<input
			type="button"
			value="-"
			class="justify-center  w-8 text-2xl font-bold    text-center ActivityCardElem"
			on:click={() => {
				basicCost -= 1;
				changeCost();
			}}
		/>
		<input
			type="button"
			value="+"
			class=" rounded w-8 text-2xl font-bold     text-center ActivityCardElem"
			on:click={() => {
				basicCost += 1;
				changeCost();
			}}
		/>
	</div>
</div>
