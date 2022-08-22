<script lang="ts">
	import Exercise from '../components/Exercise.svelte';
	import ActiveWorkout from '../components/ActiveWorkout.svelte';
	import ExerciseFilter from '../components/ExerciseFilter.svelte';

	import { strengthData } from '../data/strength';
	import { filterExercises, getWorkoutByDate, prepareBulkData } from '../utils/utils';

	const data = prepareBulkData(strengthData);

	let activeWorkout: any = null;
	let activeCategory: string = '';
	let searchTerm: string = '';

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

	function handleCategory(event: any) {
		activeCategory = event.detail.category;
	}

	$: filteredData = filterExercises(data, activeCategory, searchTerm);

	console.log(data);
</script>

<div class="max-w-6xl mx-auto px-3">
	<h1 class="text-dark_headline mb-2 md:mb-4 font-headline text-2xl md:text-3xl">Kraftverlauf</h1>
	<div class="mb-4">
		<input
			type="text"
			class="p-2 rounded-md bg-dark_bg_highlight w-full mb-3 text-dark_text"
			placeholder="Übung suchen..."
			bind:value={searchTerm}
		/>
		<ExerciseFilter {activeCategory} on:changeCategory={handleCategory} />
		<p class="text-dark_text">{filteredData.length} Übungen</p>
	</div>
	{#each filteredData as d}
		<Exercise data={d} on:setActiveIndex={setActiveWorkout} />
	{/each}
</div>

{#if activeWorkout?.workout}
	<ActiveWorkout {activeWorkout} on:click={closeActiveWorkout} />
{/if}
