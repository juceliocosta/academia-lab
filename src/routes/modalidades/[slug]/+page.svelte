<script>
	import { globalModalidades } from '#lib/stores/modalidades.svelte.js';
	import IntroSingle from '#lib/IntroSingle.svelte';
	import Card from '#lib/Card.svelte';

	/** @type {import('./$types').PageProps} */
	let { data } = $props();
</script>

<IntroSingle {data} />

<section class="modalidades wrap">
	<h3>Outras modalidades:</h3>
	<div class="modalidades__wrapper wrap">
		{#each globalModalidades as info}
			<Card {info} />
		{/each}
	</div>
</section>

<style>
	.modalidades {
		margin-top: 60px;
	}
	.modalidades__wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
</style>
