<script lang="ts">
	import { LifeStyleBasicData } from '../Data/LifeStyleBasicData';
	import queryString from 'query-string';

	export let lifeStyleBasicData: LifeStyleBasicData;
	let id = lifeStyleBasicData._id;
	function openPage() {
		let finalurl = '';
		finalurl = location.origin;
		finalurl += '/editor?';
		finalurl += queryString.stringify({ id: lifeStyleBasicData._id });
		window.open(finalurl, '_self');
	}
</script>

<div class="flex flex-row m-4  ">
	<div class="flex flex-row  bg-sky-200 " on:click={openPage}>
		<h2 class="m-4">{lifeStyleBasicData.title}</h2>
		<h2 class="m-4">{lifeStyleBasicData._id}</h2>
	</div>

	<div class="flex flex-row h-full w-5 min-h-full  bg-red-900">
		<h2>x</h2>
	</div>
</div>
