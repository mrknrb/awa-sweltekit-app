<script lang="ts">
	import { StaticData_Setting } from '../../../Data/StaticData/StaticDataTypes/StaticData_Setting.js';
	import FaToggleOff from 'svelte-icons/fa/FaToggleOff.svelte';
	import FaToggleOn from 'svelte-icons/fa/FaToggleOn.svelte';
	import { createEventDispatcher } from 'svelte';

	export let settingStaticData: StaticData_Setting;
	export let settingSaveData = 0;
	const dispatch = createEventDispatcher();

	let changeEvent = () => {
		dispatch('SettingChange', settingSaveData);
	};
</script>

<div
	class="flex flex-col justify-between w-full cursorSelect hoverClick grow "
	style="align-items: center"
>
	<b class="ml-2"> {settingStaticData.settingName}</b>
	<input
		type="number"
		bind:value={settingSaveData}
		class="w-full  bg-transparent pl-2 font-bold"
		on:keyup={changeEvent}
	/>
</div>
