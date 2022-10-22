<script lang="ts">
	import { SaveData_Activity } from '../Data/SaveData/SaveData_Activity';
	import { nagyitasKalkulalo } from '../../../Egyebek/NagyitasKalkulalo';

	export let nagyitas;
	export let igazito;
	export let hovered = false;
	export let activitySaveData: SaveData_Activity;

	$: nagyitasKalkulaloEredmeny = nagyitasKalkulalo(activitySaveData.duration, nagyitas, igazito);
	$: brighterOnHover = () => {
		if (hovered) return 'brightness-110';
		return '';
	};
</script>

<div
	on:mouseenter
	on:mouseleave
	style="min-width:{nagyitasKalkulaloEredmeny}rem;width: {nagyitasKalkulaloEredmeny}rem"
	class="h-8 bg-green-600 flex justify-center cent overflow-hidden border-r-4 {brighterOnHover()} "
>
	<a class="text-center">{activitySaveData.activityType}</a>
</div>
