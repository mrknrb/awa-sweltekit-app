<script lang="ts">
	import { saveDataMainStoreReducers } from '../Store/StoreSaveData';
	import { storeTempData, tempDataStoreReducers } from '../Store/StoreTempData';
	export let classInsert = '';

	export let text = '';
</script>

<div
	class=" w-16 items-center {classInsert} active:shadow-lg bg-gray-500 justify-center content-center flex rounded-full hoverClick  shadow-md shadow-gray-700"
	on:click
>
	<div class="max-h-10  h-16 w-16 flex content-center justify-center items-center">
		<slot />

		<b class="font-extrabold text-center m-auto">{text}</b>
	</div>
</div>
