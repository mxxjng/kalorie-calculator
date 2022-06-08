<script lang="ts">
	// todo: make input fields required and a form
	import met from '../data/met.json';

	let values: DailyValues = [{ hours: 0, metFactor: 0 }];
	let result: number | undefined = undefined;

	$: totalhours = calculateTotalHours(values);

	function addValue() {
		values = [...values, { hours: 0, metFactor: 0 }];
	}

	function removeValue(index: number) {
		values.splice(index, 1);
		values = values;
	}

	function calculateFactor() {
		const addition = values.reduce((acc, val) => val.hours * val.metFactor + acc, 0);
		result = addition / 24;
	}

	function calculateTotalHours(values: DailyValues) {
		return values.reduce((acc, val) => acc + val.hours, 0);
	}
</script>

<h2 class="text-2xl mb-4 font-headline text-dark_headline">Aktivitätsfaktor berechnen</h2>
{#each values as value, i}
	<div class="mb-4 p-2 rounded-md border border-dark_bg_highlight">
		<label class="text-dark_text " for={`hours-${i}`}>Dauer der Aktivität in Stunden</label>
		<input
			type="number"
			id={`hours-${i}`}
			class="w-full bg-dark_bg_highlight  rounded-md p-2 mb-4 text-dark_headline"
			bind:value={value.hours}
		/>
		<label class="text-dark_text " for={`activity-${i}`}>Art der Aktivität</label>
		<select
			class="w-full bg-dark_bg_highlight p-2 rounded-md text-dark_headline mb-4"
			name=""
			bind:value={value.metFactor}
			id=""
		>
			{#each met.data as option}
				<option value={option.met}>{option.name}</option>
			{/each}
		</select>
		{#if values.length > 1}
			<button class="bg-danger p-1 rounded-md" on:click={() => removeValue(i)}
				>Aktivität entfernen</button
			>
		{/if}
	</div>
{/each}
<button
	on:click={addValue}
	class="w-full mb-2 bg-dark_bg border border-primary text-primary p-2 rounded-md font-headline"
	>Aktivität hinzufügen</button
>
<p class={totalhours === 24 ? 'text-success mb-6' : 'text-danger mb-6'}>
	{totalhours} Stunden an Aktivität angegeben (bitte 24h angeben)
</p>
<button
	on:click={calculateFactor}
	disabled={totalhours !== 24}
	class={totalhours === 24
		? 'w-full bg-primary p-2 rounded-md font-headline'
		: 'w-full p-2 rounded-md font-headline bg-dark_bg_highlight cursor-not-allowed'}
	>Berechnen</button
>

{#if result}
	<h3 class="text-2xl font-headline text-dark_headline font-headline mt-4">
		Aktivitätsfaktor: <span class="text-primary">{result.toFixed(2)}</span>
	</h3>
{/if}
