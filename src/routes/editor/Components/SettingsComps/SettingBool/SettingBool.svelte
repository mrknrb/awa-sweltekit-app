<script lang="ts">
	import { StaticData_Setting } from '../../../Data/StaticData/StaticDataTypes/StaticData_Setting.js';
	import FaToggleOff from 'svelte-icons/fa/FaToggleOff.svelte';
	import FaToggleOn from 'svelte-icons/fa/FaToggleOn.svelte';
	import { createEventDispatcher } from 'svelte';

	export let settingStaticData: StaticData_Setting;
	export let settingSaveData = false;
	const dispatch = createEventDispatcher();

	let clickEvent = () => {
		/* settingSaveData = !settingSaveData;*/
		dispatch('SettingChange', !settingSaveData);
	};
	$: optionColorFunc = () => {
		if (settingSaveData) return 'bg-gray-200 bg-opacity-40';

		return 'bg-gray-400 bg-opacity-40';
	};
</script>

<div
	on:click={clickEvent}
	class="flex flex-row justify-between w-full cursorSelect hoverClick grow {optionColorFunc()}"
	style="align-items: center"
>
	<b class="ml-2"> {settingStaticData.settingName}</b>
	<div class="h-4 w-4 mr-2 flex flex-col grow ">
		{#if settingSaveData}
			<FaToggleOn />
		{:else}
			<FaToggleOff />
		{/if}
	</div>
</div>
