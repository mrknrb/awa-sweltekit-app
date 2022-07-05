<script lang="ts">
	import { StaticData_Setting } from '../../../Data/StaticData/StaticDataTypes/StaticData_Setting.js';
	import SettingDropDownOption from './SettingDropDownOption.svelte';
	import { createEventDispatcher } from 'svelte';
	import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';
	import MdKeyboardArrowUp from 'svelte-icons/md/MdKeyboardArrowUp.svelte';
	export let settingStaticData: StaticData_Setting;
	export let settingSaveData: string;
	let isShowing = false;
	const dispatch = createEventDispatcher();
	$: optionActive = (option: string) => {
		//  console.log(option, settingSaveData)
		return option === settingSaveData;
	};
</script>

<b class="ml-2">{settingStaticData.settingName}</b>
<div class="w-full mt-1 mb-1  bg">
	<div
		class="hoverClick bg-gray-400 bg-opacity-40 cursorSelect  w-full p-0.5 flex flex-row justify-between"
		on:click={() => {
			isShowing = !isShowing;
		}}
	>
		<b class="ml-3">{settingSaveData ? settingSaveData : ''}</b>
		<div class="h-5 w-5">
			{#if isShowing}
				<MdKeyboardArrowUp />
			{:else}
				<MdKeyboardArrowDown />
			{/if}
		</div>
	</div>
	{#if isShowing}
		<div style="width: 100%">
			{#each settingStaticData.settingOptions as option, i}
				<SettingDropDownOption
					on:click={() => {
						dispatch('SettingChange', option);
					}}
					optionStaticData={option}
					optionActive={optionActive(option.settingOptionName)}
				/>
			{/each}
		</div>
	{/if}
</div>
