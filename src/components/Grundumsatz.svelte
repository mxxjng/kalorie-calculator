<script lang="ts">
	import { calculateGrundumsatz } from '../utils/utils';

	let age: number;
	let height: number;
	let weight: number;

	let result: number;
	let submitted: boolean = false;

	function handleSubmit() {
		result = calculateGrundumsatz(age, height, weight);
		submitted = true;
	}
</script>

<div class="max-w-3xl mx-auto px-4">
	<h2 class="text-2xl mb-4 font-headline text-dark_headline">Grundumsatz berechnen</h2>
	<form class="mb-4" on:submit|preventDefault={handleSubmit}>
		<label class="text-dark_text " for="age">Alter in Jahren</label>
		<input
			id="age"
			class="w-full bg-dark_bg_highlight  rounded-md p-2 mb-4 text-dark_headline"
			type="number"
			bind:value={age}
			required
			placeholder="Alter eingeben..."
		/>
		<label class="text-dark_text " for="height">Größe in CM</label>
		<input
			id="height"
			class="w-full bg-dark_bg_highlight  rounded-md p-2 mb-4 text-dark_headline"
			type="number"
			bind:value={height}
			required
			placeholder="Größe in CM eingeben..."
		/>
		<label class="text-dark_text " for="weight">Gewicht in KG</label>
		<input
			id="weight"
			class="w-full bg-dark_bg_highlight  rounded-md p-2 mb-4 text-dark_headline"
			type="number"
			bind:value={weight}
			required
			placeholder="Gewicht in KG ingeben..."
		/>
		<button class="p-2 bg-primary rounded-md font-headline w-full md:w-initial">Berechnen</button>
	</form>

	{#if submitted}
		<h3 class="text-2xl font-headline text-dark_headline">
			Grundumsatz: <span class="text-primary">{result.toFixed()}</span> Kalorien
		</h3>
	{/if}
</div>
