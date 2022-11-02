<script lang="ts">
	export let elementName = '';
	export let type = 'text';
	export let value = '';
</script>

<b class="label"> {elementName} </b>
<input {type} class="text-3xl input" {value} on:change />
