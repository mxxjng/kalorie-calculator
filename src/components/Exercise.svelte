<script lang="ts">
	import type { FinalPreparedData } from '../types/types';
	import { formatDate } from '../utils/utils';

	import Chart from './Chart.svelte';
	import TopWorkout from './TopWorkout.svelte';

	export let data: FinalPreparedData;

	let startDate = '01-01-2019';
	let endDate = Date.now();

	$: filteredList = data.pd.filter(
		(item) =>
			new Date(formatDate(item.date)) >= new Date(startDate) &&
			new Date(formatDate(item.date)) <= new Date(endDate)
	);
</script>

<div class="p-3 md:p-4 bg-dark_bg_highlight rounded-md mb-6">
	<h2 class="text-dark_headline font-headline text-xl md:text-2xl ">{data.name}</h2>
	<p class="text-dark_text mb-4">{filteredList.length} Einheiten</p>
	<Chart
		on:setActiveIndex
		name={data.name}
		dates={filteredList.map((data) => data.date)}
		averageWeights={filteredList.map((data) => data.averageWeight)}
		oneRepMax={filteredList.map((data) => data.oneRepMax)}
		averageReps={filteredList.map((data) => data.averageReps)}
	/>
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
