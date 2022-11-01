<script>
	import { saveDataMainStoreReducers } from '../Store/StoreSaveData';
</script>

<div class="fixed bottom-6 right-6  h-16 flex  justify-end space-x-2">
	<input
		type="button"
		value="Save"
		class="bg-gray-500   w-16 hover:bg-amber-500 font-bold rounded-2xl"
		on:click={async () => {
			console.log(await saveDataMainStoreReducers.saveData());
		}}
	/>

	<div class=" w-16   bg-green-600 justify-center content-center flex rounded-2xl ">
		<b class="m-auto text-6xl">+</b>
	</div>
</div>

<style>
</style>
