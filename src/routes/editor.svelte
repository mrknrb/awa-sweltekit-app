<!--<link href="https://unpkg.com/mono-icons@1.3.1/iconfont/icons.css" rel="stylesheet">-->
<script lang="ts">
	import TopBar from '../Pages/Editor/Components/TopBar.svelte';
	import ActivityPicker from '../Pages/Editor/Components/ActivityPicker.svelte';
	import DiagramBody from '../Pages/Editor/Components/DiagramBody.svelte';
</script>

<TopBar />

<div style="height: calc(100% - 50px) ;width: 100%" class="bg-gray-400">
	<ActivityPicker />
	<DiagramBody />
</div>
