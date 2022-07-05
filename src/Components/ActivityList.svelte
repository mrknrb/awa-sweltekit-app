<script lang="ts">
	import ActivityCard from './ActivityCard.svelte';
	import { saveDataMainStore } from '../Store/StoreSaveData';
	import { ActivityCardStates } from '../Enums/ActivityCardStates';
	import ActivityTimeElement from './ActivityTimeElement.svelte';
	let hoverActivityId: string;
	$: activityHoveredFunc = (activityId: string) => {
		//  console.log(option, settingSaveData)
		return activityId === hoverActivityId;
	};
	$: mouseEnterFunc = (activityId?: string) => {
		if (!activityId) hoverActivityId = '';
		hoverActivityId = activityId;
	};
</script>

<div style="margin:10px;border:15px;padding:5px;border-radius: 20px">
	<div style="display: flex; justify-content: center">
		<h1>ActivityList</h1>
	</div>
	<div style="display: flex;justify-content:center ;flex-wrap: wrap;">
		<div class=" w-full overflow-auto flex flex-col " style="white-space:nowrap; padding: 10px;">
			<div class=" w-full  flex mb-2 " style="white-space:nowrap;">
				{#each $saveDataMainStore.activityList as data, i}
					<ActivityTimeElement
						on:mouseenter={mouseEnterFunc(data.activityId)}
						on:mouseleave={mouseEnterFunc()}
						hovered={activityHoveredFunc(data.activityId)}
						activitySaveData={data}
					/>
				{/each}
			</div>
			<div class=" w-full  flex" style="white-space:nowrap;">
				{#each $saveDataMainStore.activityList as data, i}
					<ActivityCard
						on:mouseenter={mouseEnterFunc(data.activityId)}
						on:mouseleave={mouseEnterFunc()}
						hovered={activityHoveredFunc(data.activityId)}
						activityType={data.activityType}
						activitySaveData={data}
						activityCardState={ActivityCardStates.List}
					/>
				{/each}
			</div>
		</div>
	</div>
</div>
