<script lang="ts">
	import { saveDataMainStoreReducers } from '../Store/StoreSaveData.js';
	import { ActivityTypes } from '../Enums/ActivityTypes.js';
	import { SaveData_Activity } from '../Data/SaveData/SaveData_Activity.js';
	import { getActivityStaticDataByType } from '../Store/GlobalStaticData.js';
	import { StaticData_Setting } from '../Data/StaticData/StaticDataTypes/StaticData_Setting';
	import { StaticData_SettingOption } from '../Data/StaticData/StaticDataTypes/StaticData_SettingOption';
	import { OMF } from '../Egyebek/OMF';
	import MdAdd from 'svelte-icons/md/MdAdd.svelte';
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';

	export let activityType: ActivityTypes;
	export let activitySaveData: SaveData_Activity = new SaveData_Activity(activityType);
	$: ActivityStaticData = getActivityStaticDataByType(activityType);
</script>

<span on:mouseenter on:mouseleave class="mrkCard">
	<div class="flex ">
		<h3 class="justify-center text-2xl text-center flex-grow">
			{activityType}
		</h3>

		<div
			class="bg-green-600 w-8 h-8 flex justify-center rounded-bl-xl hoverClick float-right shadow shadow-gray-700 active:shadow-2xl"
			on:click={() => {
				saveDataMainStoreReducers.addActivity(activityType);
			}}
		>
			<MdAdd />
		</div>

		<!-- { activitySaveData.activityId}-->
	</div>
</span>
