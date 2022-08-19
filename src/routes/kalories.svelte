<script lang="ts">
	import met from '../data/met.json';
	import Grundumsatz from '../components/Grundumsatz.svelte';
	import MetFactor from '../components/METFactor.svelte';

	let name: string = 'world';
</script>

<div class="max-w-6xl mx-auto px-3 mb-20">
	<h1>Hello {met.data[0].name}!</h1>
	<Grundumsatz />
	<MetFactor />
</div>
