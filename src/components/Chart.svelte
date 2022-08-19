<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte/internal';
	import Chart from 'chart.js/auto';

	const dispatch = createEventDispatcher();

	function setActiveIndex(index: number, name: string) {
		dispatch('setActiveIndex', {
			index,
			exerciseName: name
		});
	}

	let ctx: any;

	export let dates: string[];
	export let averageWeights: number[];
	export let oneRepMax: number[];
	export let averageReps: number[];
	export let name: string;

	onMount(async () => {
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: dates,
				datasets: [
					{
						label: 'Average Weight (KG)',
						data: averageWeights,
						backgroundColor: ['rgba(255, 99, 132, 0.2)'],
						borderColor: ['rgba(255, 99, 132, 1)'],
						borderWidth: 1
					},
					{
						label: 'OneRepMax (KG)',
						data: oneRepMax,
						backgroundColor: ['rgba(0, 171, 205, 0.2)'],
						borderColor: ['rgba(0, 171, 205, 1)'],
						borderWidth: 1
					},
					{
						label: 'Average Reps ',
						data: averageReps,
						backgroundColor: ['rgba(41, 205, 0, 0.2)'],
						borderColor: ['rgba(41, 205, 0, 1)'],
						borderWidth: 1
					}
				]
			},
			options: {
				maintainAspectRatio: false,
				onClick: (e, elements, chart) => {
					setActiveIndex(elements[0]?.index, name);
				},
				scales: {
					y: {
						beginAtZero: false
					}
				}
			}
		});
	});
</script>

<div class="chart mb-4">
	<canvas id="myChart" bind:this={ctx} />
</div>
