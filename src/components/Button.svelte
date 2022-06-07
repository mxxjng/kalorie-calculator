<script lang="ts">
	export let text: string;
	export let className = 'p-4 bg-primary';
</script>

<button class={className} type="submit">
	{text}
</button>
