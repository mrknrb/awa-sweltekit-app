<script lang="ts">
	import { SaveData_Activity } from '../Data/SaveData/SaveData_Activity';
	import { nagyitasKalkulalo } from '../../../Egyebek/NagyitasKalkulalo';
	import { storeTempData, tempDataStoreReducers } from '../Store/StoreTempData';
	import { createEventDispatcher } from 'svelte';

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

	$: imageurl = 'images/' + activitySaveData.activityType + '.jpg';
</script>

<div style="  /* background-image: linear-gradient(#bbbbbb, #858585)*/">
	<div
		on:mouseenter={() => {
			tempDataStoreReducers.highlightActivity(activityNumber);
		}}
		on:mouseleave={() => {
			tempDataStoreReducers.highlightActivity(undefined);
		}}
		style="height: {activitySaveData.duration *
			2}px;background-repeat: no-repeat ;background-size:180%;background-position: right top; background-image: linear-gradient(#bbbbbb, #858585)"
		class="w-16 flex  justify-center cent overflow-hidden bg-gray-300 bg-opacity-60 box-border {highlighted()} "
	>
		<div style="width: 100%;height: 100%;overflow: hidden">
			<b class="text-center">{activitySaveData.activityType}</b>
		</div>
	</div>
</div>
