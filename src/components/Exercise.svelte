<script lang="ts">
	import type { FinalPreparedData } from '../types/types';
	import { formatDate } from '../utils/utils';

	import Chart from './Chart.svelte';
	import Arrow from './Icons/Arrow.svelte';
	import TopWorkout from './TopWorkout.svelte';

	export let data: FinalPreparedData;

	let startDate = '01-01-2019';
	let endDate = Date.now();
	let topWorkoutsOpen = false;

	$: filteredList = data.pd.filter(
		(item) =>
			new Date(formatDate(item.date)) >= new Date(startDate) &&
			new Date(formatDate(item.date)) <= new Date(endDate)
	);
</script>

<div class="p-3 md:p-4 bg-dark_bg_highlight rounded-md mb-6">
	<h2 class="text-dark_headline font-headline text-xl md:text-2xl ">{data.name}</h2>
	<p class="text-dark_text">{filteredList.length} Einheiten</p>
	<p class="text-dark_text mb-4 text-sm">{data?.comment}</p>
	<Chart
		on:setActiveIndex
		name={data.name}
		dates={filteredList.map((data) => data.date)}
		averageWeights={filteredList.map((data) => data.averageWeight)}
		oneRepMax={filteredList.map((data) => data.oneRepMax)}
		averageReps={filteredList.map((data) => data.averageReps)}
	/>
	<div class="p-4 bg-dark_bg rounded-md">
		<div
			class="flex justify-between items-center cursor-pointer"
			on:click={() => (topWorkoutsOpen = !topWorkoutsOpen)}
		>
			<h3 class="font-headline text-dark_headline text-lg">Top Workouts</h3>
			{#if topWorkoutsOpen}
				<div class="rotate-180">
					<Arrow />
				</div>
			{:else}
				<div>
					<Arrow />
				</div>
			{/if}
		</div>
		{#if topWorkoutsOpen}
			<div class="mt-4">
				<TopWorkout
					name="One Rep Max"
					data={data.bestOneRepMax?.sets}
					date={data.bestOneRepMax?.date}
					value={`${data.bestOneRepMax.value.toFixed(1)} KG`}
				/>
				<TopWorkout
					name="Highest Average Weight"
					data={data.bestWeight?.sets}
					date={data.bestWeight.date}
					value={`${data.bestWeight.value.toFixed(1)} KG`}
				/>
				<TopWorkout
					name="Highest Volume"
					data={data.bestVolume?.sets}
					date={data.bestVolume.date}
					value={`${data.bestVolume.value} KG`}
				/>
			</div>
		{/if}
	</div>
</div>
