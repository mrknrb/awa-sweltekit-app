<script lang="ts">
	import { SettingsTypes } from '../Enums/SettingsTypes.js';
	import SettingBool from './SettingsComps/SettingBool/SettingBool.svelte';
	import SettingDropDown from './SettingsComps/SettingDropDown/SettingDropDown.svelte';
	import { saveDataMainStoreReducers } from '../Store/StoreSaveData.js';
	import { ActivityTypes } from '../Enums/ActivityTypes.js';
	import { SaveData_Activity } from '../Data/SaveData/SaveData_Activity.js';
	import { getActivityStaticDataByType } from '../Store/GlobalStaticData.js';
	import { ActivityCardStates } from '../Enums/ActivityCardStates';
	import { StaticData_Setting } from '../Data/StaticData/StaticDataTypes/StaticData_Setting';
	import { StaticData_SettingOption } from '../Data/StaticData/StaticDataTypes/StaticData_SettingOption';
	import { OMF } from '../Egyebek/OMF';

	export let activityType: ActivityTypes;
	export let activitySaveData: SaveData_Activity = new SaveData_Activity(activityType);
	let ActivityStaticData = getActivityStaticDataByType(activityType);
	export let activityCardState: ActivityCardStates;
	import MdAdd from 'svelte-icons/md/MdAdd.svelte';
	function SettingChange(settingData: StaticData_Setting, optionData: StaticData_SettingOption) {
		saveDataMainStoreReducers.settingChange(
			activitySaveData.activityId,
			settingData.settingName,
			optionData.settingOptionName
		);
	}

	$: settingSaveFunc = (settingName: string) => {
		return OMF.get(activitySaveData.settings, settingName);
	};
	export let hovered = false;

	$: borderOnHover = () => {
		if (hovered) return ' brightness-105';
		return '';
	};
</script>

<span on:mouseenter on:mouseleave class="mrkCard  {borderOnHover()} ">
	<div class="flex ">
		<h3 class="justify-center text-2xl text-center flex-grow ">{activityType}</h3>
		{#if activityCardState == ActivityCardStates.Picker}
			<div
				class="bg-green-600 w-10 h-10 flex justify-center rounded-bl-xl hoverClick float-right"
				on:click={() => {
					saveDataMainStoreReducers.addActivity(activityType);
				}}
			>
				<MdAdd />
			</div>
		{/if}
		<!-- { activitySaveData.activityId}-->
	</div>
	<div class="flex flex-col  ">
		{#each ActivityStaticData.activitySettings as setting, i}
			{#if setting.settingType === SettingsTypes.boolean}
				<SettingBool settingStaticData={setting} />
			{:else if setting.settingType === SettingsTypes.dropDown}
				<SettingDropDown
					settingStaticData={setting}
					on:SettingChange={(e) => {
						SettingChange(setting, e.detail);
					}}
					settingSaveData={settingSaveFunc(setting.settingName)}
				/>
			{/if}
		{/each}
	</div>
</span>
