<script lang="ts">
	import { SettingsTypes } from '../Enums/SettingsTypes.js';
	import SettingBool from './SettingsComps/SettingBool/SettingBool.svelte';
	import SettingDropDown from './SettingsComps/SettingDropDown/SettingDropDown.svelte';
	import { saveDataMainStoreReducers } from '../Store/StoreSaveData.js';
	import { ActivityTypes } from '../Enums/ActivityTypes.js';
	import { SaveData_Activity } from '../Data/SaveData/SaveData_Activity.js';
	import { getActivityStaticDataByType } from '../Store/GlobalStaticData.js';
	import { StaticData_Setting } from '../Data/StaticData/StaticDataTypes/StaticData_Setting';
	import { OMF } from '../../../Egyebek/OMF';
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';
	import SettingNumber from './SettingsComps/SettingNumber/SettingNumber.svelte';
	import SettingTime from './SettingsComps/SettingTime/SettingTime.svelte';
	import { storeTempData, TempData, tempDataStoreReducers } from '../Store/StoreTempData';
	import IoIosLogIn from 'svelte-icons/io/IoIosLogIn.svelte';
	import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
	export let activityType: ActivityTypes;
	export let activitySaveData: SaveData_Activity = new SaveData_Activity(activityType);
	export let activityNumber = 0;
	$: ActivityStaticData = getActivityStaticDataByType(activityType);
	$: SettingChange = (settingData: StaticData_Setting, optionData: string) => {
		saveDataMainStoreReducers.settingChange(
			activitySaveData.activityId,
			settingData.settingName,
			optionData
		);
	};

	$: getSettingSaveFunc = (settingName: string) => {
		return OMF.get(activitySaveData.settings, settingName);
	};
	$: highlighted = () => {
		if ($storeTempData.highlightedActivitityNumber === activityNumber) {
			return 'backdrop-brightness-110 border-t-amber-600 border-t-4 ';
		} else {
			return 'backdrop-brightness-100';
		}
	};

	$: imageurl = 'images/' + activityType + '.jpg';
	let foDiv: HTMLDivElement;

	$: topScroll = () => {
		return foDiv.offsetTop - foDiv.parentElement.offsetTop - foDiv.parentElement.scrollTop;
	};
</script>

<div
	bind:this={foDiv}
	class="mrkCard {highlighted()}   border-transparent box-border border-t-4 border-gray-400 border-transparent"
	style="  background-size: 100%;background-repeat: no-repeat ;background-blend-mode: lighten ;background-image: url({imageurl});"
	on:mouseenter={() => {
		tempDataStoreReducers.highlightActivity(activityNumber, topScroll());
	}}
	on:touchstart={() => {
		tempDataStoreReducers.highlightActivity(activityNumber, topScroll());
	}}
	on:mouseleave={() => {
		tempDataStoreReducers.highlightActivity();
	}}
	on:dragleave={() => {
		tempDataStoreReducers.highlightActivity();
	}}
>
	<div class="flex " style="backdrop-filter: blur(2px);">
		<h3 class=" justify-center text-2xl text-center flex-grow">
			{activityNumber + 1}
		</h3>
		<h3 class="justify-center text-2xl text-center flex-grow">
			{activityType}
		</h3>
		<div
			on:click={() => {
				if ($storeTempData.draggingActionId === '')
					tempDataStoreReducers.draggingModeStartStop(activitySaveData.activityId);
				else {
					saveDataMainStoreReducers.changeActivityOrder(
						$storeTempData.draggingActionId,
						activitySaveData.activityId
					);
					tempDataStoreReducers.draggingModeStartStop('');
				}
			}}
			class="overflow-hidden  w-8 h-8 flex justify-center rounded-bl-xl hoverClick float-right shadow  active:shadow-2xl cursorSelect hover:bg-blue-300"
		>
			{#if $storeTempData.draggingActionId === ''}
				<IoIosMenu />
			{:else if $storeTempData.draggingActionId === activitySaveData.activityId}
				<IoIosMenu />
			{:else}
				<div class="bg-amber-400">
					<IoIosLogIn />
				</div>
			{/if}
		</div>
		<div
			on:click={() => {
				saveDataMainStoreReducers.deleteActivity(activitySaveData.activityId);
			}}
			class=" w-8 h-8 flex justify-center rounded-bl-xl hoverClick float-right shadow  active:shadow-2xl cursorSelect hover:bg-orange-600"
		>
			<IoIosClose />
		</div>
		<!-- { activitySaveData.activityId}-->
	</div>
	<div class="flex flex-col  " style="backdrop-filter: blur(2px);">
		{#each ActivityStaticData.activitySettings as setting, i}
			{#if setting.settingType === SettingsTypes.boolean}
				<SettingBool
					settingStaticData={setting}
					on:SettingChange={(e) => {
						SettingChange(setting, e.detail);
					}}
					settingSaveData={getSettingSaveFunc(setting.settingName)}
				/>
			{:else if setting.settingType === SettingsTypes.dropDown}
				<SettingDropDown
					settingStaticData={setting}
					settingSaveData={getSettingSaveFunc(setting.settingName)}
					on:SettingChange={(e) => {
						SettingChange(setting, e.detail);
					}}
				/>
			{:else if setting.settingType === SettingsTypes.number}
				<SettingNumber
					settingStaticData={setting}
					settingSaveData={getSettingSaveFunc(setting.settingName)}
					on:SettingChange={(e) => {
						SettingChange(setting, e.detail);
					}}
				/>
			{/if}
		{/each}
		{#if ActivityStaticData.hasTime === true}
			<SettingTime {activitySaveData} {ActivityStaticData} />
		{/if}
	</div>
</div>
