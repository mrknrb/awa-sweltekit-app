<script lang="ts">
	import { UnitDataType } from '../../Enums/TimeUnit/UnitDataType';
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
	style="
  -webkit-appearance: none;"
	name="cars"
	id="cars"
	class="font-bold ActivityCardElem "
	bind:value
	on:change={() => {
		changed();
	}}
>
	{#each unitsData as data, i}
		<option class="font-bold" value={unitsData[i]._id}>{unitsData[i].label}</option>
	{/each}
</select>
