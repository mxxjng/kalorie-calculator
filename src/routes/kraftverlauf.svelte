<script lang="ts">
	import ActiveWorkout from '../components/ActiveWorkout.svelte';
	import Chart from '../components/Chart.svelte';
	import TopWorkout from '../components/TopWorkout.svelte';

	import { strengthData } from '../data/strength';
	import { getWorkoutByDate, prepareBulkData } from '../utils/utils';

	const data = prepareBulkData(strengthData);

	let activeWorkout: any = null;

	function setActiveWorkout(e: any) {
		const workout: any = data.find((f) => f.name === e.detail.exerciseName);
		const aw: any = workout?.pd[e.detail.index];
		const sets = getWorkoutByDate(strengthData, aw?.date, workout?.name);

		activeWorkout = {
			workout: aw,
			sets,
			name: e.detail.exerciseName
		};
	}

	function closeActiveWorkout() {
		activeWorkout = null;
	}

	console.log(data);
</script>

<div class="max-w-6xl mx-auto px-3">
	<h1 class="text-dark_headline mb-2 md:mb-4 font-headline text-2xl md:text-3xl">Kraftverlauf</h1>
	{#each data as d}
		<div class="p-3 md:p-4 bg-dark_bg_highlight rounded-md mb-6">
			<h2 class="text-dark_headline font-headline text-xl md:text-2xl ">{d.name}</h2>
			<p class="text-dark_text mb-4">{d.pd.length} Einheiten</p>
			<Chart
				on:setActiveIndex={setActiveWorkout}
				name={d.name}
				dates={d.pd.map((data) => data.date)}
				averageWeights={d.pd.map((data) => data.averageWeight)}
				oneRepMax={d.pd.map((data) => data.oneRepMax)}
				averageReps={d.pd.map((data) => data.averageReps)}
			/>
			<TopWorkout
				name="One Rep Max"
				data={d.bestOneRepMax?.sets}
				date={d.bestOneRepMax?.date}
				value={`${d.bestOneRepMax.value.toFixed(1)} KG`}
			/>
			<TopWorkout
				name="Highest Average Weight"
				data={d.bestWeight?.sets}
				date={d.bestWeight.date}
				value={`${d.bestWeight.value.toFixed(1)} KG`}
			/>
			<TopWorkout
				name="Highest Volume"
				data={d.bestVolume?.sets}
				date={d.bestVolume.date}
				value={`${d.bestVolume.value} KG`}
			/>
		</div>
	{/each}
</div>

{#if activeWorkout?.workout}
	<ActiveWorkout {activeWorkout} on:click={closeActiveWorkout} />
{/if}
