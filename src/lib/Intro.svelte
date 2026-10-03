<script>
	let { title = '', content = '', btn = '', href = '', img = '', icon = '' } = $props();
</script>

<section class="intro" style="background-image: url({img});">
	<div class="intro__wrapper wrap">
		<h1>
			{title}
			{#if icon}
				<img src={icon} alt="icone" />
			{/if}
		</h1>
		<p>{content}</p>

		{#if btn && href}
			<a class="btn" {href}>{btn}</a>
		{/if}
	</div>
</section>

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
		max-width: 450px;
	}

	.btn {
		margin-top: 24px;
	}

	h1 {
		white-space: pre-line;
	}

	p {
		font-size: calc(18 / 16 * 1rem);
		margin-top: 16px;
	}

	img {
		display: inline;
		max-width: 36px;
	}
</style>
