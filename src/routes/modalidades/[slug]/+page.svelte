<script>
	import autoAnimate from '@formkit/auto-animate';
	import { globalModalidades } from '#lib/stores/modalidades.svelte.js';
	import IntroSingle from '#lib/IntroSingle.svelte';
	import Card from '#lib/Card.svelte';
	import { page } from '$app/state';

	let { data } = $props();
</script>

<!-- desmonta e monta o componente sempre que 'data' mudar -->
<!-- Útil para animações rodarem novamente do zero -->
{#key data}
	<IntroSingle {data} />
{/key}

<section class="modalidades wrap">
	<h3>Outras modalidades:</h3>
	<div class="modalidades__wrapper wrap" use:autoAnimate>
		{#each globalModalidades as info}
			{#if info.slug !== page.params.slug}
				<Card {info} />
			{/if}
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
	@media (max-width: 800px) {
		.modalidades__wrapper {
			grid-template-columns: 1fr;
		}
	}
</style>
