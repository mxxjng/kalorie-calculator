<script lang="ts">
	import CloseIcon from './Icons/CloseIcon.svelte';

	export let activeWorkout: any;
</script>

<div class="fixed w-full h-full top-0 left-0 flex items-center justify-center bg px-3">
	<div class="w-full md:w-1/2  max-w-3xl mx-auto bg-dark_bg p-4 md:p-8 rounded-md">
		<div class="flex items-center justify-between mb-4">
			<div>
				<h2 class="font-headline text-dark_headline text-xl md:text-2xl">
					{activeWorkout?.name}
				</h2>
				<p class="text-dark_text">{activeWorkout?.workout?.date}</p>
			</div>
			<CloseIcon on:click />
		</div>
		<h3 class="font-headline text-dark_headline text-lg md:text-xl ">Stats</h3>
		<div class="mb-4">
			<div class="flex items-center justify-between mb-2">
				<p class="text-dark_text">One Rep Max</p>
				<p class="text-dark_headline font-headline">
					{activeWorkout?.workout?.oneRepMax.toFixed(1)} KG
				</p>
			</div>
			<div class="flex items-center justify-between mb-2">
				<p class="text-dark_text">Average Weight</p>
				<p class="text-dark_headline font-headline">
					{activeWorkout?.workout?.averageWeight.toFixed(1)} KG
				</p>
			</div>
			<div class="flex items-center justify-between mb-2">
				<p class="text-dark_text">Average Reps</p>
				<p class="text-dark_headline font-headline">
					{activeWorkout?.workout?.averageReps.toFixed(1)}
				</p>
			</div>
			<div class="flex items-center justify-between mb-2">
				<p class="text-dark_text">Volume</p>
				<p class="text-dark_headline font-headline">
					{activeWorkout?.workout?.exerciseVolume} KG
				</p>
			</div>
		</div>
		<h3 class="font-headline text-dark_headline text-lg md:text-xl ">Sets</h3>
		<div class="block md:flex">
			{#each activeWorkout?.sets as d}
				<div class="bg-dark_bg_highlight p-2 rounded-md mr-0 md:mr-2 mb-2">
					<p class="text-dark_headline hidden md:block">Set: {d.Set}</p>
					<p class="text-dark_text">
						KG <span class="font-headline text-dark_headline">{d.Weight}</span> | WDH:
						<span class="font-headline text-dark_headline">{d['Reps/Seconds']}</span>
					</p>
				</div>
			{/each}
		</div>
	</div>
</div>
