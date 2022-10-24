<script>
	import ActivityCardList from './ActivityCardList.svelte';
	import ActivityTimeList from './ActivityTimeList.svelte';
	import LifeStyleBasicInfo from './LifeStyleBasicInfo.svelte';
</script>

<div style="height: 100%; " class=" p-4 left-0 right-0 overflow-auto">
	<LifeStyleBasicInfo />
	<ActivityTimeList />
	<ActivityCardList />
</div>
