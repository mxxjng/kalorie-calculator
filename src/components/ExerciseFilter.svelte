<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const categories = [
		{ filter: '', name: 'Alle' },
		{ filter: 'Brust', name: 'Brust' },
		{ filter: 'Rücken', name: 'Rücken' },
		{ filter: 'Schulter', name: 'Schulter' },
		{ filter: 'Trizeps', name: 'Trizeps' },
		{ filter: 'Bizeps', name: 'Bizeps' },
		{ filter: 'Beine', name: 'Beine' }
	];

	const dispatch = createEventDispatcher();

	function handleCategory(category: string) {
		dispatch('changeCategory', { category });
	}

	export let activeCategory: string;

	$: ac = activeCategory;
</script>

<div class="">
	{#each categories as category}
		<button
			class="{ac === category.filter
				? 'bg-primary'
				: 'bg-dark_bg_highlight'} text-dark_headline px-4 py-1 text-sm rounded-md mr-2 mb-2"
			on:click={() => handleCategory(category.filter)}>{category.name}</button
		>
	{/each}
</div>
