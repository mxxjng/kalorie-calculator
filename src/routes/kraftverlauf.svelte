<script lang="ts">
	import Exercise from '../components/Exercise.svelte';
	import ActiveWorkout from '../components/ActiveWorkout.svelte';

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
		<Exercise data={d} on:setActiveIndex={setActiveWorkout} />
	{/each}
</div>

{#if activeWorkout?.workout}
	<ActiveWorkout {activeWorkout} on:click={closeActiveWorkout} />
{/if}
