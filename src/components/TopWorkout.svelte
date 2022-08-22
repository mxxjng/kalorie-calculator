<script lang="ts">
	import type { JsonDataProp } from 'src/types/types';

	export let name: string;
	export let data: JsonDataProp[];
	export let date: string;
	export let value: string;
</script>

<div class="mb-4">
	<h2 class="font-headline text-dark_headline text-md md:text-xl">Top Workout: {name} ({value})</h2>
	<p class="text-dark_text mb-3">{date}</p>
	<div class="block md:flex">
		{#each data as d}
			<div class="bg-dark_bg_highlight p-2 rounded-md mr-0 md:mr-4 mb-2">
				<p class="text-dark_headline hidden md:block">Set: {d.Set}</p>
				<p class="text-dark_text">
					KG <span class="font-headline text-dark_headline">{d.Weight}</span> | WDH:
					<span class="font-headline text-dark_headline">{d['Reps/Seconds']}</span>
				</p>
			</div>
		{/each}
	</div>
</div>
