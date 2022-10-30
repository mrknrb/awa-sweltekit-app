<script lang="ts">
	export let elementName = '';
	export let type = 'text';
	export let value = '';
</script>

<b> {elementName} </b>
<input {type} class="text-3xl" {value} on:change />
