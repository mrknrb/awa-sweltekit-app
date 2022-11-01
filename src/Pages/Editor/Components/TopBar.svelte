<script>
	import { saveDataMainStoreReducers } from '../Store/StoreSaveData';
	import { storeTempData, tempDataStoreReducers } from '../Store/StoreTempData';
	import TopBarButton from './TopBarButton.svelte';
	import IoIosAdd from 'svelte-icons/io/IoIosAdd.svelte';
	import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte';
	import TiChevronRight from 'svelte-icons/ti/TiChevronRight.svelte';
	import TiChevronLeft from 'svelte-icons/ti/TiChevronLeft.svelte';
	import TiPlus from 'svelte-icons/ti/TiPlus.svelte';

	$: SaveModifiedColor = $storeTempData.modificationSinceSave ? 'bg-amber-800  ' : ' ';
</script>

<div class="absolute bottom-6 right-6   h-16 flex  justify-end space-x-2 ">
	<TopBarButton
		text="Save"
		classInsert={SaveModifiedColor}
		on:click={async () => {
			console.log(await saveDataMainStoreReducers.saveData());
		}}
	/>

	<TopBarButton
		classInsert="  "
		on:click={() => {
			tempDataStoreReducers.activityPickerActivate(true);
		}}><TiChevronLeft /></TopBarButton
	>
	<TopBarButton
		classInsert="  "
		on:click={() => {
			tempDataStoreReducers.activityPickerActivate(true);
		}}><TiChevronRight /></TopBarButton
	>
	<TopBarButton
		classInsert="bg-green-600  "
		on:click={() => {
			tempDataStoreReducers.activityPickerActivate(true);
		}}><TiPlus /></TopBarButton
	>
</div>

<style>
</style>
