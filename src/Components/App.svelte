<!--<link href="https://unpkg.com/mono-icons@1.3.1/iconfont/icons.css" rel="stylesheet">-->
<script lang="ts">
	import TopBar from './TopBar.svelte';
	import ActivityPicker from './ActivityPicker.svelte';
	import DiagramBody from './DiagramBody.svelte';
</script>

<TopBar />

<div style="height: calc(100% - 50px) ;width: 100%" class="bg-gray-400">
	<ActivityPicker />
	<DiagramBody />
</div>
