<script>
	import iconPlus from '#lib/assets/icon-plus.svg';
	import autoAnimate from '@formkit/auto-animate';
	let { question = '', answer = '', active = false } = $props();
	let handleActive = () => {
		active = !active;
	};
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div class="info" onclick={handleActive} onkeyup={handleActive} tabindex="0" use:autoAnimate>
	<div class="question" class:active>
		<h3>{question}</h3>
		<img src={iconPlus} alt="" width="20" />
	</div>
	{#if active}
		<div class="answer">
			<p>{answer}</p>
		</div>
	{/if}
</div>

<style>
	.info {
		cursor: pointer;
	}
	.question {
		display: flex;
		align-items: center;
		border: 1px solid var(--subtle);
		padding: 17px 16px;
		height: 70px;
		transition: 250ms;
	}
	.question.active {
		border-color: #fff;
		transition: 125ms;
	}
	img {
		margin-left: auto;
		transition: 250ms;
	}
	.question.active img {
		transform: rotate(45deg);
		transition: 125ms;
	}
	.answer {
		padding: 0 16px;
		border-left: 1px solid var(--feat);
		margin: 16px 0px;
	}
</style>
