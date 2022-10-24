<!--<link href="https://unpkg.com/mono-icons@1.3.1/iconfont/icons.css" rel="stylesheet">-->
<script lang="ts">
	import { authStoreReducers } from '../Pages/User/Store/authStore';
</script>

<div class="bg-gray-400 w-full h-full">
	<input
		type="button"
		value="Logout"
		on:click={function () {
			authStoreReducers.logout();
		}}
	/>
</div>
