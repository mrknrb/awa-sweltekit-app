<script>
	import ActivityCardList from './ActivityCardList.svelte';
	import ActivityTimeList from './ActivityTimeList.svelte';
</script>

<div style="height: 100%;width: calc(100% - 500px);float:left;">
	<div style="margin:10px;border:15px;padding:5px;border-radius: 20px">
		<div style="display: flex; justify-content: center">
			<h1>ActivityList</h1>
		</div>
		<div style="display: flex;justify-content:center ;flex-wrap: wrap;">
			<div class=" w-full flex flex-col " style="white-space:nowrap; padding: 10px;">
				<ActivityTimeList />
				<ActivityCardList />
			</div>
		</div>
	</div>
</div>
