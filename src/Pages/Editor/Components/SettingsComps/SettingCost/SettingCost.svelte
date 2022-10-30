<script lang="ts">
	import { saveDataMainStoreReducers } from '../../../Store/StoreSaveData';
	import { SaveData_Activity } from '../../../Data/SaveData/SaveData_Activity';
	import { StaticData_Activity } from '../../../Data/StaticData/StaticDataTypes/StaticData_Activity';
	import { timeUnitsArray } from '../../../../../Egyebek/TimeUnit/timeUnitsArray';
	import UnitChanger from '../../ComponentsGeneral/UnitChanger.svelte';
	import { TimeUnits } from '../../../../../Egyebek/TimeUnit/TimeUnits';
	import { TimeFunctions } from '../../../../../Functions/TimeFunctions';
	import { moneyUnitsArray } from '../../../../../Egyebek/MoneyUnit/MoneyUnitsArray';
	import { MoneyUnits } from '../../../../../Egyebek/MoneyUnit/MoneyUnits';

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
		console.log(unit);
		saveDataMainStoreReducers.changeActivity(activitySaveData.activityId, (saveData) => {
			saveData.moneyTimeUnit = TimeUnitChangeID;
			return saveData;
		});
	};

	let MoneyUnitChangeID = moneyUnitsArray[0]._id;
	$: MoneyUnitChangeID = activitySaveData?.moneyTimeUnit;

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
	<b class=" ml-2">Cost</b>
	<div class="flex flex-row justify-between w-full grow ">
		<input
			type="number"
			value={displayedMoney}
			on:keyup={() => {
				changeCost();
			}}
			class="w-20 bg-transparent pl-4 font-bold rounded"
		/>
		<UnitChanger
			unitsData={timeUnitsArray}
			value={TimeUnitChangeID}
			on:changed={(event) => {
				changeMoneyTimeUnit(event.detail.value);
			}}
		/>
		<UnitChanger
			unitsData={moneyUnitsArray}
			value={TimeUnitChangeID}
			on:changed={(event) => {
				changeMoneyUnit(event.detail.value);
			}}
		/>
		<input
			type="button"
			value="-"
			class="justify-center rounded w-8 text-2xl font-bold    text-center cursor-pointer hoverClick"
			on:click={() => {
				basicCost -= 5;
				changeCost();
			}}
		/>
		<input
			type="button"
			value="+"
			class=" rounded w-8 text-2xl font-bold     text-center cursor-pointer hoverClick"
			on:click={() => {
				basicCost += 5;
				changeCost();
			}}
		/>
	</div>
</div>
