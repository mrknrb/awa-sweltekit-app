<script lang="ts">
	import { saveDataMainStore } from '../Store/StoreSaveData';
	import ActivityTimeElement from './ActivityTimeElement.svelte';
	import { nagyitasKalkulalo } from '../../../Egyebek/NagyitasKalkulalo';
	import { IdoListaGeneralo } from '../../../Egyebek/IdoListaGeneralo';
	import { TimeUnits } from '../../../Egyebek/TimeUnit/TimeUnits';
	import DiagramTitle from './DiagramTitle.svelte';

	$: nagyitas = 1;
	let ebrenletIdo = 16 * 60;
	let igazito = 0.05;
	$: nagyitasKalkulaloEredmeny = nagyitasKalkulalo(ebrenletIdo, nagyitas, igazito);

	$: IdoMertekLista = IdoListaGeneralo(
		TimeUnits.Minute_Day,
		nagyitasKalkulaloEredmeny / 3,
		ebrenletIdo
	);
	console.log(IdoMertekLista);
</script>

<DiagramTitle title="Time" />
<div class="   ">
	<input
		type="button"
		class="bg-amber-100 text-6xl w-16"
		value="-"
		on:click={() => {
			nagyitas -= 0.1;
		}}
	/>
	<input
		type="button"
		class="bg-amber-100 text-6xl w-16"
		value="+"
		on:click={() => {
			nagyitas += 0.1;
		}}
	/>
</div>
<div class=" w-full  flex mb-2 overflow-auto flex-col" style="white-space:nowrap">
	<div
		class="  h-5  bg-blue-700 flex-row flex flex-row"
		style=" min-width:{nagyitasKalkulaloEredmeny}rem;width:{nagyitasKalkulaloEredmeny}rem "
	>
		{#each IdoMertekLista as idoMertek, i}
			<div style="border-right: #a503e5" class="bg-gray-500 h-full flex w-full overflow-hidden">
				{IdoMertekLista[i].timeUnitIdotartam}
			</div>
		{/each}
	</div>

	<div class=" w-full  flex mb-2 ">
		{#each $saveDataMainStore.activityList as data, i}
			<ActivityTimeElement activitySaveData={data} {nagyitas} {igazito} />
		{/each}
	</div>
</div>
