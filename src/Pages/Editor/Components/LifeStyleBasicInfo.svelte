<script lang="ts">
	import DiagramTitle from './DiagramTitle.svelte';
	import {
		saveDataMainActual,
		saveDataMainStore,
		saveDataMainStoreReducers
	} from '../Store/StoreSaveData';
	import { onMount } from 'svelte';
	import { BrowserStoreReducers } from '../../Browser/Store/BrowserStore';
	import LifeStyleBasicInfoElement from './LifeStyleBasicInfoElement.svelte';
</script>

<DiagramTitle title="Basic Info" />
<div class="flex flex-col">
	<LifeStyleBasicInfoElement
		elementName="Title"
		value={$saveDataMainStore.title}
		on:change={(event) => {
			saveDataMainStoreReducers.changeSave((saveData) => {
				saveData.title = event.target.value;
				return saveData;
			});
		}}
	/>
	<LifeStyleBasicInfoElement
		elementName="Earnings"
		type="number"
		value={$saveDataMainStore.earning}
		on:change={(event) => {
			saveDataMainStoreReducers.changeSave((saveData) => {
				saveData.earning = event.target.value;
				return saveData;
			});
		}}
	/>
	<LifeStyleBasicInfoElement
		elementName="sleepDuration"
		type="number"
		value={$saveDataMainStore.sleepDuration}
		on:change={(event) => {
			saveDataMainStoreReducers.changeSave((saveData) => {
				saveData.sleepDuration = event.target.value;
				return saveData;
			});
		}}
	/>
	<LifeStyleBasicInfoElement
		elementName="WorkDuration"
		type="number"
		value={$saveDataMainStore.workDuration}
		on:change={(event) => {
			saveDataMainStoreReducers.changeSave((saveData) => {
				saveData.workDuration = event.target.value;
				return saveData;
			});
		}}
	/>
</div>
