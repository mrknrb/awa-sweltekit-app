<script lang="ts">
	import { StaticData_ActivityGroup } from '../Data/StaticData/StaticDataTypes/StaticData_ActivityGroup.js';
	import ActivityCard from './ActivityCard.svelte';
	import { globalStaticData } from '../Store/GlobalStaticData.js';
	import ActivityPickerCard from './ActivityPickerCard.svelte';

	export let groupData: StaticData_ActivityGroup;
</script>

<div>
	<div
		style="margin:10px;border:15px;padding:5px; background-color: rgb(169,174,187)"
		class="rounded-2xl"
	>
		<div style="display: flex; justify-content: center">
			<h2 style="margin: 5px">
				{groupData.GroupType}
			</h2>
		</div>
		<div style="display: flex;justify-content:center ;flex-wrap: wrap;">
			{#each globalStaticData.activities as activity, i}
				{#if activity.activityGroupType === groupData.GroupType}
					<ActivityPickerCard activityType={activity.activityType} />
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	p {
		background-color: aqua;
	}
</style>
