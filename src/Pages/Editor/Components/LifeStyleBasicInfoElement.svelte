<script lang="ts">
	import { saveDataMainStore, saveDataMainStoreReducers } from '../Store/StoreSaveData';
	import { nagyitasKalkulalo } from '../../../Egyebek/NagyitasKalkulalo';
	import { IdoListaGeneralo } from '../../../Egyebek/IdoListaGeneralo';
	import { TimeUnits } from '../../../Egyebek/TimeUnit/TimeUnits';
	import ActivityDurationElement from './ActivityDurationElement.svelte';

	export let elementName = '';
	export let type = 'text';
	export let value = '';
</script>

<b> {elementName} </b>
<input {type} class="text-3xl" {value} on:change />
