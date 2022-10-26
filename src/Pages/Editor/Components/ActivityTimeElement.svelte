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
	$: imageurl = 'images/' + activitySaveData.activityType + '.jpg';
</script>

<div style="  background-image: linear-gradient(#bbbbbb, #858585)">
	<div
		on:mouseenter
		on:mouseleave
		style="min-height:{nagyitasKalkulaloEredmeny}rem;height: {nagyitasKalkulaloEredmeny}rem ;background-image: url({imageurl});background-repeat: no-repeat ;background-size:180%;background-position: -50px"
		class="w-16  flex justify-center cent overflow-hidden {brighterOnHover()} "
	>
		<div style=" backdrop-filter:blur(2px) ;width: 100%;height: 100%">
			<a class="text-center">{activitySaveData.activityType}</a>
		</div>
	</div>
</div>
