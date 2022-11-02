<script lang="ts">
	import ActivityCardList from './ActivityCardList.svelte';
	import LifeStyleBasicInfo from './LifeStyleBasicInfo.svelte';
	import ActivityPicker from './ActivityPicker.svelte';
	import { storeTempData } from '../Store/StoreTempData';

	$: currentTab = $storeTempData.currentTabId;
</script>

<ActivityPicker />
<div class="  left-0 right-0 overflow-auto min-h-full relative">
	{#if 0 === currentTab}
		<LifeStyleBasicInfo />
	{/if}

	{#if 1 === currentTab}
		<ActivityCardList />
	{/if}

	{#if 2 === currentTab}
		<h3>Tab 3 content</h3>
	{/if}
</div>
