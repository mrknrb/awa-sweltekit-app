<script lang="ts">
	import { saveDataMainStore } from '../Store/StoreSaveData';
	import ActivityTimeElement from './ActivityTimeElement.svelte';
	import { nagyitasKalkulalo } from '../../../Egyebek/NagyitasKalkulalo';
	import { IdoListaGeneralo } from '../../../Egyebek/IdoListaGeneralo';
	import { TimeUnits } from '../../../Egyebek/TimeUnit/TimeUnits';
	import DiagramTitle from './DiagramTitle.svelte';
	import { storeTempData } from '../Store/StoreTempData';

	$: nagyitas = 1;
	let ebrenletIdo = 16 * 60;
	let igazito = 0.05;

	let foDiv: HTMLDivElement;
	$: nagyitasKalkulaloEredmeny = nagyitasKalkulalo(ebrenletIdo, nagyitas, igazito);

	$: IdoMertekLista = IdoListaGeneralo(
		TimeUnits.Minute_Day,
		nagyitasKalkulaloEredmeny / 3,
		ebrenletIdo
	);
</script>

<!--
<DiagramTitle title="Time" />-->
<div class="   ">
	<!--	<div>
		<input
			type="button"
			class="bg-amber-100 text-3xl w-8"
			value="-"
			on:click={() => {
				nagyitas -= 0.1;
			}}
		/>
		<input
			type="button"
			class="bg-amber-100 text-3xl w-8"
			value="+"
			on:click={() => {
				nagyitas += 0.1;
			}}
		/>
	</div>-->
	<div
		class=" h-full  flex mb-2 overflow-hidden flex-row"
		style="white-space:nowrap;scroll-behavior: smooth;"
		bind:this={foDiv}
	>
		<div
			class="  h-5  bg-blue-700 flex-col flex flex-col "
			style=" min-height:{nagyitasKalkulaloEredmeny}rem;height:{nagyitasKalkulaloEredmeny}rem;"
		>
			{#each IdoMertekLista as idoMertek, i}
				<div style="border-right: #a503e5" class="bg-gray-500 h-full flex w-full overflow-hidden">
					{IdoMertekLista[i].timeUnitIdotartam}
				</div>
			{/each}
		</div>

		<div class=" w-full flex-col flex mb-2 ">
			{#each $saveDataMainStore.activityList as data, i}
				<ActivityTimeElement activitySaveData={data} {nagyitas} {igazito} activityNumber={i} />
			{/each}
		</div>
		<div class=" w-full flex-col flex mb-2 ">
			{#each $saveDataMainStore.activityList as data, i}
				<ActivityTimeElement activitySaveData={data} {nagyitas} {igazito} activityNumber={i} />
			{/each}
		</div>
		<div class="  flex-col flex  " style="height: 10000px" />
	</div>
</div>
