<script lang="ts">
	import met from '../data/met.json';
	import Grundumsatz from '../components/Grundumsatz.svelte';

	let name: string = 'world';
</script>

<h1>Hello {met.data[0].name}!</h1>
<Grundumsatz />
