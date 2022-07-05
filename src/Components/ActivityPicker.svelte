<script lang="ts">
	import ActivityGroup from './ActivityGroup.svelte';
	import { globalStaticData } from '../Store/GlobalStaticData.js';
</script>

<div style="width: 500px" class="h-full float-left bg-gray-300 overflow-auto">
	{#each globalStaticData.activityGroups as group, i}
		<ActivityGroup groupData={group} />
	{/each}
</div>
