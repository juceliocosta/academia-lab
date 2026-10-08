<script>
	import Card from '#lib/Card.svelte';
	import Intro from '#lib/Intro.svelte';
	import alongamento from '#lib/assets/alongamento.avif';
	import weight from '#lib/assets/icon-weight.png';
	import { globalModalidades } from '#lib/stores/modalidades.svelte.js';
</script>

<Intro
	title="Temos a modalidade certa para você"
	content="Descubra as diversas modalidades da nossa academia."
	img={alongamento}
	icon={weight}
/>

<section class="modalidades">
	<div class="modalidades__wrapper wrap">
		{#each globalModalidades as modalidade}
			<Card info={modalidade} />
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
