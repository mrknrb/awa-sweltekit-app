<script lang="ts">
	import { StaticData_SettingOption } from '../../../Data/StaticData/StaticDataTypes/StaticData_SettingOption.js';

	export let optionStaticData: StaticData_SettingOption;

	export let optionActive: boolean;

	$: optionColorFunc = () => {
		if (optionActive) return 'bg-green-600 bg-opacity-80';

		return 'bg-gray-400 bg-opacity-40';
	};
</script>

<div class="hoverClick cursorSelect  {optionColorFunc()}" on:click>
	<b class="ml-5">{optionStaticData.settingOptionName}</b>
</div>
