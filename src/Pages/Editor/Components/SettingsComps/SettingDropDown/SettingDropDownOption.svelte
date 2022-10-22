<script lang="ts">
	import { StaticData_SettingOption } from '../../../Data/StaticData/StaticDataTypes/StaticData_SettingOption.js';
	import ValuePoint from '../../ValuePoint.svelte';

	export let optionStaticData: StaticData_SettingOption;

	export let optionActive: boolean;

	$: optionColorFunc = () => {
		if (optionActive) return 'bg-gray-600 bg-opacity-40';

		return 'bg-gray-400 bg-opacity-40';
	};
</script>

<div class="hoverClick cursorSelect flex flex-row grow-0 {optionColorFunc()}" on:click>
	<b class="ml-5">{optionStaticData.settingOptionName}</b>
	{#each optionStaticData.coreValueTypes as coreValue, i}
		<ValuePoint
			CoreValueType={optionStaticData.coreValueTypes[i].coreValue}
			PointNumber={optionStaticData.coreValueTypes[i].rank}
		/>
	{/each}
</div>
