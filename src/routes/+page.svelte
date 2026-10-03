<script>
	import imgHome from '../assets/musculacao.jpg';
</script>

<section class="intro" style="background-image: url({imgHome});">
	<div class="intro__wrapper wrap">
		<h1>Você está pronto para o desafio?</h1>
		<p>
			A Acedemia-lab está pronta para te ajudar a chegar mais longe e alcnaçar sua melhor
			performance.
		</p>
		<a href="/sobre">Sobre</a>
	</div>
</section>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam iusto voluptatibus sint
	dolor? Alias neque tempore ab nam iure illum totam a blanditiis est, velit nemo obcaecati harum
	sequi!
</p>

<style>
	.intro {
		min-height: 360px;
		background-size: cover;
		background-position: center;
		display: grid;
		align-content: center;
		justify-content: start;
		position: relative;
	}

	.intro::after {
		content: '';
		position: absolute;
		inset: 0; /*top, right, bottom e left 0*/
		background-color: rgba(0, 0, 0, 0.55);
	}

	.intro__wrapper {
		z-index: 1;
	}
</style>
