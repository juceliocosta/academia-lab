<script>
	import Info from '#lib/Info.svelte';
	import Intro from '#lib/Intro.svelte';
	import exercicios from '#lib/assets/exercicios-grupo.avif';
	import weight from '#lib/assets/icon-weight.png';
</script>

<Intro
	title="Conheça a academia que mais cresce na cidade!"
	content="Confira algumas das perguntas frequentes."
	img={exercicios}
	icon={weight}
	btn="Modalidades"
	href="/modalidades"
/>

<section class="faq">
	<div class="faq__wrapper wrap">
		<Info
			question="Quanto custa a mensalidade?"
			answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint eaque eos earum laboriosam, repudiandae aspernatur? Tenetur placeat nulla voluptatibus ipsum aliquid, delectus pariatur distinctio, asperiores voluptatem possimus magnam itaque voluptates."
		/>
		<Info
			question="Posso utilizar quantos dias da semana?"
			answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint eaque eos earum laboriosam, repudiandae aspernatur? Tenetur placeat nulla voluptatibus ipsum aliquid, delectus pariatur distinctio, asperiores voluptatem possimus magnam itaque voluptates."
		/>
		<Info
			question="Quantas modalidades disponíveis?"
			answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint eaque eos earum laboriosam, repudiandae aspernatur? Tenetur placeat nulla voluptatibus ipsum aliquid, delectus pariatur distinctio, asperiores voluptatem possimus magnam itaque voluptates."
		/>
	</div>
</section>

<style>
	.faq {
		margin-top: 60px;
	}
	.faq__wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
	@media (max-width: 800px) {
		.faq__wrapper {
			grid-template-columns: 1fr;
		}
	}
</style>
