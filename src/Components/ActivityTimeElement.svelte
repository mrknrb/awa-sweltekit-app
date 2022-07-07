<script lang="ts">
	import { SaveData_Activity } from '../Data/SaveData/SaveData_Activity';

	export let time = 100;

	export let hovered = false;
	export let activitySaveData: SaveData_Activity;
	$: brighterOnHover = () => {
		if (hovered) return 'brightness-110';
		return '';
	};
</script>

<div
	on:mouseenter
	on:mouseleave
	style="min-width:{time}px;width: {time}px"
	class="h-8 bg-amber-400 flex justify-center cent overflow-hidden border-r-4 {brighterOnHover()} "
>
	<a class="text-center">{activitySaveData.activityType}</a>
</div>
