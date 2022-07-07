<script lang="ts">
	import ActivityCard from './ActivityCard.svelte';
	import { saveDataMainStore, saveDataMainStoreReducers } from '../Store/StoreSaveData';
	import { ActivityCardStates } from '../Enums/ActivityCardStates';
	import ActivityTimeElement from './ActivityTimeElement.svelte';
	import { storeTempData } from '../Store/StoreTempData';

	$: hoverActivityId = 'string';
	$: activityHoveredFunc = (activityId: string) => {
		//  console.log(option, settingSaveData)
		return activityId === hoverActivityId;
	};
	$: mouseEnterFunc = (activityId?: string) => {
		if (!activityId) hoverActivityId = '';
		hoverActivityId = activityId;
	};
	$: dragActivityId = '';
	$: mouseGrabEffect = () => {
		if (dragActivityId) {
			document.body.style.cursor = 'grab';
		}
	};
	$: dropActivityId = '';
	storeTempData.subscribe((value) => {
		if (!value.mouseDown) {
			if (dragActivityId && dropActivityId) {
				saveDataMainStoreReducers.changeActivityOrder(dragActivityId, dropActivityId);
				dragActivityId = '';
				dropActivityId = '';
			}
		}
	});

	$: mouseEnterDropHighlight = (activityId?: string) => {
		if (dragActivityId && dropActivityId)
			if (activityId == dropActivityId) {
				return true;
			} else {
				return false;
			}
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
						highlightBorder={mouseEnterDropHighlight(data.activityId)}
						on:mousedown={() => {
							dragActivityId = data.activityId;
						}}
						on:mouseenter={() => {
							mouseEnterFunc(data.activityId);
							dropActivityId = data.activityId;
						}}
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
