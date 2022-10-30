<script lang="ts">
	import { saveDataMainStore } from '../Store/StoreSaveData';
	import ActivityCostElement from './ActivityCostElement.svelte';
	import ActivityTimeElement from './ActivityTimeElement.svelte';
	import { TimeFunctions } from '../../../Functions/TimeFunctions';
	import { getActivityStaticDataByType } from '../Store/GlobalStaticData';

	let idolista: number[] = [];
	for (let i = 0; i < 24 * 2; i++) {
		idolista.push(i * 30);
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
					style="border-right: #a503e5; min-height: 30px;height: 30px "
					class="bg-gray-500 box-border border-t overflow-hidden"
				>
					{TimeFunctions.MinuteToHourMinute(idoMertek)}
				</div>
			{/each}
		</div>

		<div class=" w-10 flex-col flex  overflow-hidden">
			{#each $saveDataMainStore.activityList as data, i}
				{#if getActivityStaticDataByType($saveDataMainStore.activityList[i].activityType).hasTime}
					<ActivityTimeElement activitySaveData={data} activityNumber={i} />
				{/if}
			{/each}
		</div>
		<div class=" w-10 flex-col flex  overflow-hidden">
			{#each $saveDataMainStore.activityList as data, i}
				<ActivityCostElement activitySaveData={data} activityNumber={i} />
			{/each}
		</div>
	</div>
</div>
