<script lang="ts">
	import { saveDataMainStore } from '../Store/StoreSaveData';
	import ActivityCostElement from './ActivityCostElement.svelte';
	import ActivityTimeElement from './ActivityTimeElement.svelte';
	import { TimeFunctions } from '../../../Functions/TimeFunctions';

	let idolista: number[] = [];
	for (let i = 0; i < 24 * 4; i++) {
		idolista.push(i * 15);
	}
	//yx ----------------------------   30pxel 15 perc szabvanyosan
</script>

<!--
<DiagramTitle title="Time" />-->
<div class="   ">
	<div class=" h-full  flex mb-2 overflow-auto flex-row" style="white-space:nowrap">
		<div class="  h-5  bg-blue-700 flex-col flex flex-col ">
			{#each idolista as idoMertek, i}
				<div
					style="border-right: #a503e5; min-height: 30px;height: 50px "
					class="bg-gray-500 box-border border-t overflow-hidden"
				>
					{TimeFunctions.MinuteToHourMinute(idoMertek)}
				</div>
			{/each}
		</div>

		<div class=" w-full flex-col flex mb-2 ">
			{#each $saveDataMainStore.activityList as data, i}
				<ActivityTimeElement activitySaveData={data} activityNumber={i} />
			{/each}
		</div>
		<div class=" w-full flex-col flex mb-2 ">
			{#each $saveDataMainStore.activityList as data, i}
				<ActivityCostElement activitySaveData={data} activityNumber={i} />
			{/each}
		</div>
	</div>
</div>
