<script lang="ts">
	import { UnitDataType } from '../../../../Egyebek/TimeUnit/UnitDataType';
	import { createEventDispatcher } from 'svelte';

	export let unitsData: UnitDataType[];

	export let value = unitsData[0]._id;
	const dispatch = createEventDispatcher();
	function changed() {
		dispatch('changed', {
			value
		});
	}
</script>

<select
	name="cars"
	id="cars"
	class="font-bold bg-transparent cursor-pointer"
	bind:value
	on:change={() => {
		changed();
	}}
>
	{#each unitsData as data, i}
		<option class="font-bold" value={unitsData[i]._id}>{unitsData[i].label}</option>
	{/each}
</select>
