<script lang="ts">
	import { SaveData_Activity } from '../Data/SaveData/SaveData_Activity';
	import { storeTempData, tempDataStoreReducers } from '../Store/StoreTempData';
	import { createEventDispatcher } from 'svelte';
	import { MoneyTimeFunctions } from '../Functions/MoneyTimeFunctions';
	import { saveDataMainStore } from '../Store/StoreSaveData';

	export let activitySaveData: SaveData_Activity;
	export let activityNumber = 0;
	$: highlighted = () => {
		if ($storeTempData.highlightedActivitityNumber === activityNumber) {
			scroll();
			return 'backdrop-brightness-110  border-t-amber-600 border-t-4';
		} else {
			return 'backdrop-brightness-110 ';
		}
	};

	//	$: WorkMinutes = MoneyTimeFunctions.moneyToWorkMinutes(10 / 60, activitySaveData.money);

	$: WorkMinutes =$saveDataMainStore.earnings? MoneyTimeFunctions.moneyToWorkMinutes(
		$saveDataMainStore.earnings,
		activitySaveData.money
	):0

	$: imageurl = 'images/' + activitySaveData.activityType + '.jpg';
</script>

<div style="">
	<div
		on:mouseenter={() => {
			tempDataStoreReducers.highlightActivity(activityNumber);
		}}
		on:mouseleave={() => {
			tempDataStoreReducers.highlightActivity(undefined);
		}}
		style="height: {WorkMinutes}px; background-repeat: no-repeat ;background-size:180%;background-position: right top; background-image: linear-gradient(#bbbbbb, #858585)"
		class=" flex  justify-center cent overflow-hidden bg-gray-300  box-border {highlighted()} "
	>
		<div style="width: 100%;height: 100%">
			<b class="text-center text-sm">{activitySaveData.activityType}</b>
		</div>
	</div>
</div>
